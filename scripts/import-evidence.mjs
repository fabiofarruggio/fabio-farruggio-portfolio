import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const sources = [
  {
    id: 'catalog', repository: 'quality-lab-catalog-tests', archiveCommit: '14e9bddf63bccab45bc29b6003e6a380279a28b8',
    path: 'evidence/2026-09-17T12-51-57.287Z/acceptance.json',
    pick: d => ({ recordedAt: d.recordedAt, status: d.status, mode: d.profile, executionKind: d.executionKind, executedSourceCommit: d.executedSuiteCommit, executedAppCommit: d.executedAppCommit, storeMode: d.storeMode, testsPassed: d.stats.expected, testsSkipped: d.stats.skipped, testsUnexpected: d.stats.unexpected, bindingTests: d.bindingTests, databaseIntegrationVerified: d.databaseIntegrationVerified, limitations: d.limitations }),
  },
  {
    id: 'postgres', repository: 'quality-lab-app', archiveCommit: 'da073c798c0488d59cde8d1526af7ce0a9a2f0f1',
    path: 'docs/evidence/compose-20260917/browser-2026-09-17T02-40-26.233Z/result.json',
    pick: d => ({ recordedAt: d.completedAt, status: d.status, mode: d.mode, executionKind: d.executionKind, executedSourceCommit: d.appSourceGitSha, storeMode: d.storeMode, checks: d.checks, modelCalls: d.modelCalls, limitations: d.limitations }),
  },
  {
    id: 'policy', repository: 'qa-agent-platform', archiveCommit: 'b514e82d7c3c3cbfd613334691de069099b035ce',
    path: 'docs/implementation/evidence/security-policy/results.json',
    pick: d => ({ recordedAt: d.generatedAt, status: 'passed_local_boundary_checks', mode: d.executionMode, executionKind: d.executionKind, checkBaseCommit: d.captureHead, workingTreeDirty: d.workingTreeDirty, ownedSourcesUnchanged: d.ownedSourcesUnchangedDuringFinalFocusedAndStateRun, focusedTestsPassed: d.checks.find(c => c.name === 'Focused security policy/publisher').testsPassed, providerCalls: d.providerCalls, sourceHashes: d.sourceHashes, limitations: d.unverified, sourceBindingNote: d.sourceBindingNote }),
  },
];
mkdirSync(resolve(root, 'public/evidence'), { recursive: true });
const lock = {};
for (const source of sources) {
  const bytes = execFileSync('git', ['-C', resolve(root, '..', source.repository), 'show', `${source.archiveCommit}:${source.path}`], { maxBuffer: 5_000_000 });
  const data = source.pick(JSON.parse(bytes.toString('utf8')));
  const excerpt = { schemaVersion: 1, id: source.id, kind: 'sanitized_selected_fields', source: { repository: source.repository, archiveCommit: source.archiveCommit, path: source.path, sha256: createHash('sha256').update(bytes).digest('hex') }, ...data };
  const output = `${JSON.stringify(excerpt, null, 2)}\n`;
  writeFileSync(resolve(root, `public/evidence/${source.id}.json`), output);
  lock[`${source.id}.json`] = createHash('sha256').update(output).digest('hex');
  console.log(`Imported pinned ${source.id} excerpt; original source remains unchanged.`);
}
writeFileSync(resolve(root, 'src/data/evidence-lock.json'), `${JSON.stringify(lock, null, 2)}\n`);
