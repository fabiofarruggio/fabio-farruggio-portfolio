import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { assertEvidence, validateBundle, assertPinnedDigest, digest } from '../scripts/validate-content.mjs';
const fixture = id => JSON.parse(readFileSync(new URL(`../public/evidence/${id}.json`,import.meta.url),'utf8'));
test('curated bundle is structurally valid', () => validateBundle());
for (const id of ['catalog','postgres','policy']) {
  test(`${id}: accepted local record`, () => assertEvidence(fixture(id)));
  for (const [label, mutate] of [
    ['missing source commit', value => delete value.source.archiveCommit],
    ['absent limitations', value => { value.limitations = []; }],
    ['unverified live relabel', value => { value.mode = 'connected_live'; }],
    ['private path', value => { value.source.path = 'C:\\Users\\private\\file'; }],
    ['extra contact data', value => { value.contactEmail = 'invented@example.invalid'; }],
    ['sensitive synthetic token', value => { value.limitations = [`ghp_${'SYNTHETIC'.repeat(5)}`]; }],
  ]) test(`${id}: rejects ${label}`, () => { const value = fixture(id); mutate(value); assert.throws(() => assertEvidence(value)); });
}
test('cannot publish an unmeasured numeric claim', () => { const value = fixture('catalog'); delete value.testsPassed; assert.throws(() => assertEvidence(value)); });
test('cannot relabel memory tests as PostgreSQL', () => { const value = fixture('catalog'); value.databaseIntegrationVerified = true; assert.throws(() => assertEvidence(value)); });
test('cannot hide dirty-working-tree provenance', () => { const value = fixture('policy'); value.workingTreeDirty = false; assert.throws(() => assertEvidence(value)); });
test('cannot promote a failed UI check', () => { const value = fixture('postgres'); value.checks[0].status = 'failed'; assert.throws(() => assertEvidence(value)); });
test('cannot inflate a measured result after the pinned import', () => {
  const bytes = readFileSync(new URL('../public/evidence/catalog.json',import.meta.url));
  const value = JSON.parse(bytes.toString('utf8')); value.testsPassed = 999999;
  assert.throws(() => assertPinnedDigest(Buffer.from(JSON.stringify(value)), digest(bytes)));
});
