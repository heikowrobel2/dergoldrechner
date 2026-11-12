// Run: node --test tests/calc.test.js
const test = require('node:test');
const assert = require('node:assert/strict');
const C = require('../site/assets/calc.js');

const GOLD = 100; // EUR per gram, round number for easy checks
const SILVER = 1;

test('585 gold: 10 g -> 5.85 g fine, melt 585 EUR, payout 78-93 %', () => {
  const r = C.goldScrap(10, '585', GOLD);
  assert.equal(r.fineGrams, 5.85);
  assert.equal(r.meltValue, 585);
  assert.equal(r.payoutMin, 456.3);
  assert.equal(r.payoutMax, 544.05);
});

test('jewellery gold uses one band, 900 and above the bullion band', () => {
  assert.equal(C.goldScrap(10, '333', GOLD).payoutMax, 309.69); // 93 %
  assert.equal(C.goldScrap(10, '900', GOLD).payoutMax, 864);    // 96 %
});

test('750 gold', () => {
  assert.equal(C.goldScrap(4, '750', GOLD).meltValue, 300);
});

test('number parsing: German and English formats, units', () => {
  assert.equal(C.parseNumber('12,5'), 12.5);
  assert.equal(C.parseNumber('12,5 g'), 12.5);
  assert.equal(C.parseNumber('1.234,5'), 1234.5);
  assert.equal(C.parseNumber('1.234'), 1234);
  assert.equal(C.parseNumber('1,234.5'), 1234.5);
  assert.equal(C.parseNumber('2.5'), 2.5);
  assert.ok(Number.isNaN(C.parseNumber('')));
  assert.ok(Number.isNaN(C.parseNumber('abc')));
  assert.ok(Number.isNaN(C.parseNumber('-5')));
  assert.ok(Number.isNaN(C.parseNumber('0')));
  assert.ok(Number.isNaN(C.parseNumber('1e3')));
  assert.ok(Number.isNaN(C.parseNumber('12,5 kg')));
  assert.equal(C.parseNumber('12,5 Gramm'), 12.5);
});

test('invalid, empty, negative or huge input returns null (no fake 0 EUR)', () => {
  assert.equal(C.goldScrap('abc', '585', GOLD), null);
  assert.equal(C.goldScrap('', '585', GOLD), null);
  assert.equal(C.goldScrap(-5, '585', GOLD), null);
  assert.equal(C.goldScrap(1e21, '585', GOLD), null);
  assert.equal(C.goldScrap(10, '585', 0), null);
});

test('unknown fineness throws', () => {
  assert.throws(() => C.goldScrap(10, '123', GOLD));
});

test('dental gold: ceramic share reduces metal, range min < max', () => {
  const r = C.dental(10, 0.3, 'hoch', GOLD); // 7 g metal, 70-85 % gold
  assert.equal(r.fineGramsMin, 4.9);
  assert.equal(r.fineGramsMax, 5.95);
  assert.equal(r.meltValueMin, 490);
  assert.equal(r.meltValueMax, 595);
  assert.ok(r.payoutMin < r.payoutMax);
});

test('dental gold: ceramic share above 90 % is rejected, not silently capped', () => {
  assert.equal(C.dental(10, 0.95, 'hoch', GOLD), null);
});

test('coins: 2 Kruegerrand = 62.206 g fine', () => {
  const r = C.coins('kruegerrand', 2, GOLD);
  assert.equal(r.fineGrams, 62.21);
  assert.equal(r.meltValue, 6220.6);
});

test('coins: fractional or too large count is rejected', () => {
  assert.equal(C.coins('20mark', '2,7', GOLD), null);
  assert.equal(C.coins('20mark', 20000, GOLD), null);
});

test('silver coins: 10 Maple Leaf = 311.03 g fine; invalid count rejected', () => {
  const r = C.silverCoins('maple-ag', 10, SILVER);
  assert.equal(r.fineGrams, 311.03);
  assert.equal(C.silverCoins('5dm-adler', '1,5', SILVER), null);
});

test('silver bars and bullion coins use the bullion band (88-97 %)', () => {
  const r = C.silverCoins('bar-1kg', 1, SILVER);
  assert.equal(r.fineGrams, 999);
  assert.equal(r.payoutShare.max, 0.97);
  assert.equal(C.silverCoins('maple-ag', 1, SILVER).payoutShare.min, 0.88);
  assert.equal(C.silverCoins('5dm-adler', 1, SILVER).payoutShare.max, 0.85);
});

test('platinum 950: 10 g -> 9.5 g fine; invalid weight rejected', () => {
  const r = C.pgmScrap(10, '950', 30);
  assert.equal(r.fineGrams, 9.5);
  assert.equal(r.meltValue, 285);
  assert.equal(C.pgmScrap('abc', '950', 30), null);
});

test('silver 925: 100 g -> 92.5 g fine', () => {
  const r = C.silverScrap(100, '925', SILVER);
  assert.equal(r.fineGrams, 92.5);
  assert.equal(r.meltValue, 92.5);
});

test('mixed lot: several pieces with different finenesses are added up', () => {
  const r = C.goldMix([{ weight: '10', fineness: '585' }, { weight: '4', fineness: '750' }, { weight: '', fineness: '333' }], GOLD);
  assert.equal(r.fineGrams, 8.85);          // 5.85 + 3.0, empty row ignored
  assert.equal(r.meltValue, 885);
  assert.equal(r.pieces, 2);
  assert.equal(r.items.length, 2);
  assert.equal(r.payoutMin, 690.3);         // 585 * 0.78 + 300 * 0.78
  assert.equal(r.payoutMax, 823.05);        // (585 + 300) * 0.93
});

test('mixed lot: a filled but invalid row or no row at all returns null', () => {
  assert.equal(C.goldMix([{ weight: '10', fineness: '585' }, { weight: 'abc', fineness: '750' }], GOLD), null);
  assert.equal(C.goldMix([{ weight: '', fineness: '585' }], GOLD), null);
  assert.equal(C.goldMix([], GOLD), null);
});

test('mixed lot: 900+ fineness keeps its own payout band', () => {
  const r = C.goldMix([{ weight: '10', fineness: '585' }, { weight: '10', fineness: '999' }], GOLD);
  assert.equal(r.payoutMax, Math.round((585 * 0.93 + 999 * 0.96) * 100) / 100);
});

test('all payout ranges are sane', () => {
  for (const p of Object.values(C.PAYOUT)) {
    assert.ok(p.min > 0 && p.min < p.max && p.max <= 1);
  }
});
