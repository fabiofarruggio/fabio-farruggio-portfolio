import { readFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const sha = /^[a-f0-9]{40}$/;
const hash = /^[a-f0-9]{64}$/;
export function assertEvidence(record) {
  if (!record || record.schemaVersion !== 1 || record.kind !== 'sanitized_selected_fields') throw new Error('Invalid evidence envelope');
  const common = ['schemaVersion','id','kind','source','recordedAt','status','mode','executionKind','limitations'];
  const extra = { catalog: ['executedSourceCommit','executedAppCommit','storeMode','testsPassed','testsSkipped','testsUnexpected','bindingTests','databaseIntegrationVerified'], postgres: ['executedSourceCommit','storeMode','checks','modelCalls'], policy: ['checkBaseCommit','workingTreeDirty','ownedSourcesUnchanged','focusedTestsPassed','providerCalls','sourceHashes','sourceBindingNote'] };
  if (!Object.hasOwn(extra, record.id) || Object.keys(record).some(key => ![...common, ...extra[record.id]].includes(key))) throw new Error('Non-allowlisted evidence field');
  if (record.mode !== 'offline_replay' || !Number.isFinite(Date.parse(record.recordedAt))) throw new Error('Unsupported mode or date');
  if (!record.source || !sha.test(record.source.archiveCommit) || !hash.test(record.source.sha256) || !/^[a-z0-9-]+$/.test(record.source.repository) || !/^[A-Za-z0-9_./-]+$/.test(record.source.path) || record.source.path.split('/').includes('..')) throw new Error('Missing exact source identity');
  if (Object.keys(record.source).sort().join(',') !== 'archiveCommit,path,repository,sha256') throw new Error('Non-allowlisted provenance field');
  const repositories = { catalog: 'quality-lab-catalog-tests', postgres: 'quality-lab-app', policy: 'qa-agent-platform' };
  if (record.source.repository !== repositories[record.id]) throw new Error('Evidence repository mismatch');
  if (!Array.isArray(record.limitations) || !record.limitations.length || record.limitations.some(item => typeof item !== 'string' || !item.trim())) throw new Error('Missing evidence limitations');
  if (record.id === 'catalog' && (record.status !== 'passed_local_snapshot_admission' || !sha.test(record.executedSourceCommit) || !sha.test(record.executedAppCommit) || !Number.isInteger(record.testsPassed) || record.testsPassed <= 0 || record.testsSkipped !== 0 || record.testsUnexpected !== 0 || record.databaseIntegrationVerified !== false || record.storeMode !== 'isolated_test_double')) throw new Error('Unmeasured or misrepresented Catalog claim');
  if (record.id === 'postgres' && (record.status !== 'passed' || !sha.test(record.executedSourceCommit) || record.storeMode !== 'postgres' || !Array.isArray(record.checks) || !record.checks.length || record.checks.some(check => check.status !== 'passed' || !/^[a-z_]+$/.test(check.name)) || record.modelCalls !== 0)) throw new Error('Unmeasured or misrepresented PostgreSQL claim');
  if (record.id === 'policy' && (record.status !== 'passed_local_boundary_checks' || !sha.test(record.checkBaseCommit) || record.workingTreeDirty !== true || record.ownedSourcesUnchanged !== true || !Number.isInteger(record.focusedTestsPassed) || record.focusedTestsPassed <= 0 || record.providerCalls !== 0 || !Array.isArray(record.sourceHashes) || !record.sourceHashes.length || !record.sourceBindingNote)) throw new Error('Unmeasured or relabeled policy claim');
  const serialized = JSON.stringify(record);
  if (/https?:\/\/|[A-Z]:\\|\/Users\/|\/home\/|gh[pousr]_[A-Za-z0-9]{16,}|github_pat_|sk-[A-Za-z0-9_-]{16,}|BEGIN .*PRIVATE KEY|authorization\s*:\s*bearer/i.test(serialized)) throw new Error('Non-public source field');
  return record;
}
export function validateBundle() {
  const expected = ['catalog.json','policy.json','postgres.json'];
  const names = readdirSync(resolve(root,'public/evidence')).sort();
  if (JSON.stringify(names) !== JSON.stringify(expected)) throw new Error('Unexpected public evidence asset');
  const lock = JSON.parse(readFileSync(resolve(root,'src/data/evidence-lock.json'),'utf8'));
  for (const name of names) {
    const bytes = readFileSync(resolve(root,'public/evidence',name));
    assertPinnedDigest(bytes, lock[name]);
    assertEvidence(JSON.parse(bytes.toString('utf8')));
  }
  const content = readFileSync(resolve(root,'src/data/site.ts'),'utf8');
  for (const phrase of ['squads simulados','publicación','pendiente']) if (!content.includes(phrase)) throw new Error(`Required disclosure absent: ${phrase}`);
  console.log(`PASS: ${names.length} allowlisted evidence excerpts; connected QA Agent capabilities remain pending.`);
}
export const digest = bytes => createHash('sha256').update(bytes).digest('hex');
export function assertPinnedDigest(bytes, expected) {
  if (!hash.test(expected) || digest(bytes) !== expected) throw new Error('Evidence bytes differ from the pinned import');
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) validateBundle();
