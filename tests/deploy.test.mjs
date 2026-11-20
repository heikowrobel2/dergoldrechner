// Run: node --test tests/
import test from 'node:test';
import assert from 'node:assert/strict';
import { toDelete, toUpload, isServerOnly } from '../scripts/deploy-ftp.mjs';

test('live price cache and server files are never deleted or overwritten', () => {
  for (const f of ['data/price.json', 'data/price-state.json', 'data/price-history.json', 'data/price.lock', 'data/price.json.ab12.tmp', '.well-known/acme', 'error_log', 'api/error_log']) {
    assert.ok(isServerOnly(f), f);
  }
  const remote = ['data/price.json', 'data/price-state.json', 'data/price-history.json', 'api/config.php', 'old-page/index.html', 'index.html'];
  assert.deepEqual(toDelete(remote, ['index.html']), ['old-page/index.html']);
});

test('demo price file is never uploaded, changed files are', () => {
  const hashes = { 'data/price.json': 'demo', 'index.html': 'b', 'assets/app.js': 'c' };
  assert.deepEqual(toUpload(hashes, { 'index.html': 'b', 'assets/app.js': 'old' }), ['assets/app.js']);
  assert.deepEqual(toUpload(hashes, null).sort(), ['assets/app.js', 'index.html']);
});

test('api/config.php is uploaded when present but kept when absent', () => {
  assert.deepEqual(toUpload({ 'api/config.php': 'k' }, null), ['api/config.php']);
  assert.deepEqual(toDelete(['api/config.php'], []), []);
});
