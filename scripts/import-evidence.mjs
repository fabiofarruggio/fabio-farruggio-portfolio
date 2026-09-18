import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const privateEvidenceRoot = process.env.AQP_PRIVATE_EVIDENCE_ROOT ?? resolve(root, '..', 'qa-agent-platform-private');
const sources = [
  {
    id: 'catalog', repository: 'quality-lab-catalog-tests', archiveCommit: '14e9bddf63bccab45bc29b6003e6a380279a28b8',
    path: 'private/evidence/catalog-acceptance.json', expectedSourceSha256: 'fc5e57bc5d1e8c0b2d46db08761709e509df1b937efb81610b5e10e783eb1e48',
    privateRelativePath: 'public-evidence-sources/catalog-acceptance.json',
    pick: d => ({ recordedAt: d.recordedAt, status: d.status, mode: d.profile, executionKind: d.executionKind, executedSourceCommit: d.executedSuiteCommit, executedAppCommit: d.executedAppCommit, storeMode: d.storeMode, testsPassed: d.stats.expected, testsSkipped: d.stats.skipped, testsUnexpected: d.stats.unexpected, bindingTests: d.bindingTests, databaseIntegrationVerified: d.databaseIntegrationVerified, limitations: d.limitations }),
  },
  {
    id: 'postgres', repository: 'quality-lab-app', archiveCommit: 'da073c798c0488d59cde8d1526af7ce0a9a2f0f1',
    path: 'private/evidence/postgres-ui-result.json', expectedSourceSha256: 'e9f7ad13165f52a944e7ec4e89d39e5261ecfbe5fabd3b6c3514b0b884f04d58',
    privateRelativePath: 'public-evidence-sources/postgres-ui-result.json',
    pick: d => ({ recordedAt: d.completedAt, status: d.status, mode: d.mode, executionKind: d.executionKind, executedSourceCommit: d.appSourceGitSha, storeMode: d.storeMode, checks: d.checks, modelCalls: d.modelCalls, limitations: d.limitations }),
  },
  {
    id: 'policy', repository: 'qa-agent-platform', archiveCommit: 'b514e82d7c3c3cbfd613334691de069099b035ce',
    path: 'private/evidence/security-policy.json', expectedSourceSha256: '9e731e971888738e848391057e0782cbe834954ab33ac95f910684eca0dc3fc1',
    privateRelativePath: 'public-evidence-sources/policy.json',
    pick: d => ({ recordedAt: d.generatedAt, status: 'passed_local_boundary_checks', mode: d.executionMode, executionKind: d.executionKind, checkBaseCommit: d.captureHead, workingTreeDirty: d.workingTreeDirty, ownedSourcesUnchanged: d.ownedSourcesUnchangedDuringFinalFocusedAndStateRun, focusedTestsPassed: d.checks.find(c => c.name === 'Focused security policy/publisher').testsPassed, providerCalls: d.providerCalls, sourceHashes: d.sourceHashes, limitations: d.unverified, sourceBindingNote: d.sourceBindingNote }),
  },
];
mkdirSync(resolve(root, 'public/evidence'), { recursive: true });
const lock = {};
for (const source of sources) {
  const sourceFile = resolve(privateEvidenceRoot, source.privateRelativePath);
  const bytes = readFileSync(sourceFile);
  const sourceSha256 = createHash('sha256').update(bytes).digest('hex');
  if (sourceSha256 !== source.expectedSourceSha256) throw new Error(`Pinned source changed for ${source.id}`);
  const data = source.pick(JSON.parse(bytes.toString('utf8')));
  const excerpt = { schemaVersion: 1, id: source.id, kind: 'sanitized_selected_fields', source: { repository: source.repository, archiveCommit: source.archiveCommit, path: source.path, sha256: sourceSha256 }, ...data };
  const output = `${JSON.stringify(excerpt, null, 2)}\n`;
  writeFileSync(resolve(root, `public/evidence/${source.id}.json`), output);
  lock[`${source.id}.json`] = createHash('sha256').update(output).digest('hex');
  console.log(`Imported pinned ${source.id} excerpt; original source remains unchanged.`);
}
writeFileSync(resolve(root, 'src/data/evidence-lock.json'), `${JSON.stringify(lock, null, 2)}\n`);
