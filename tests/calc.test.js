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

test('coins: 2 Kruegerrand = 62.207 g fine (1 oz = 31.1035 g, same as price bar)', () => {
  const r = C.coins('kruegerrand', 2, GOLD);
  assert.equal(r.fineGrams, 62.21);
  assert.equal(r.meltValue, 6220.7);
});

test('coins: fractional or too large count is rejected', () => {
  assert.equal(C.coins('20mark', '2,7', GOLD), null);
  assert.equal(C.coins('20mark', 20000, GOLD), null);
});

test('silver coins: 10 Maple Leaf = 311.04 g fine; invalid count rejected', () => {
  const r = C.silverCoins('maple-ag', 10, SILVER);
  assert.equal(r.fineGrams, 311.04);
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

test('gold bars: nominal weight = fine gold, payout band by size', () => {
  const r = C.bars('bar-100', 1, GOLD);
  assert.equal(r.fineGrams, 100);
  assert.equal(r.meltValue, 10000);
  assert.equal(r.payoutShare, C.PAYOUT.goldBarLarge);
  assert.equal(C.bars('bar-5', 1, GOLD).payoutShare, C.PAYOUT.goldBarSmall);
  assert.equal(C.bars('bar-20', 1, GOLD).payoutShare, C.PAYOUT.goldBar);
  assert.equal(C.bars('bar-1kg', 2, GOLD).fineGrams, 2000);
  assert.equal(C.bars('bar-100', '1,5', GOLD), null);
  assert.ok(C.GOLD_BARS.length >= 10);
});

test('bullion coins buy back closer to spot than historic coins', () => {
  assert.equal(C.coins('maple', 1, GOLD).payoutShare, C.PAYOUT.goldBullion);
  assert.equal(C.coins('vreneli', 1, GOLD).payoutShare, C.PAYOUT.goldCoin);
  assert.equal(C.coins('dukat4', 1, GOLD).fineGrams, 13.77);
  assert.equal(C.coins('vreneli10', 2, GOLD).fineGrams, 5.81);
});

test('German gold euro coins: fine gold per coin and bullion-like payout', () => {
  assert.equal(C.coins('goldeuro100', 1, GOLD).fineGrams, 15.55);
  assert.equal(C.coins('goldeuro50', 1, GOLD).fineGrams, 7.78);
  assert.equal(C.coins('goldeuro20', 1, GOLD).fineGrams, 3.89);
  assert.equal(C.coins('goldeuro200', 1, GOLD).fineGrams, 31.1);
  assert.equal(C.coins('goldeuro100', 1, GOLD).payoutShare, C.PAYOUT.goldBullionSmall);
  assert.equal(C.coins('goldeuro200', 1, GOLD).payoutShare, C.PAYOUT.goldBullion);
});

test('all payout ranges are sane', () => {
  for (const p of Object.values(C.PAYOUT)) {
    assert.ok(p.min > 0 && p.min < p.max && p.max <= 1);
  }
});

test('21 carat gold (875) is available with mid-high payout', () => {
  const f = C.GOLD_FINENESS.find((x) => x.id === '875');
  assert.ok(f, '875 fineness missing');
  assert.equal(f.fine, 875);
});

test('historic silver coins: fine silver per coin', () => {
  const cases = { mtt: 23.39, '5mark-kaiser': 25, '5dm-gedenk': 7, '10dm-olympia': 9.69,
    's10': 4.8, 's25': 10.4, 's50-900': 18, 's50-640': 12.8, 's100-640': 15.36, 's100-900': 18, 's500': 22.2 };
  for (const [id, g] of Object.entries(cases)) {
    assert.equal(C.silverCoins(id, 1, SILVER).fineGrams, g, id);
  }
});

test('density: volume -> weight for fine gold and silver', () => {
  const g = C.density('volume', 10, 'gold999', GOLD);
  assert.equal(g.weightG, 193.2);
  assert.equal(g.volumeCm3, 10);
  assert.equal(g.fineGrams, 193.01); // 193.2 g x 0.999
  assert.equal(g.meltValue, 19300.68);
  assert.equal(C.density('volume', 10, 'silber999', SILVER).weightG, 104.9);
});

test('density: weight -> volume, one troy ounce of gold is about 1.61 cm3', () => {
  const r = C.density('weight', 31.1035, 'gold999', GOLD);
  assert.equal(r.volumeCm3, 1.61);
  assert.equal(r.weightG, 31.1);
  assert.equal(C.density('weight', 193.2, 'gold999', GOLD).volumeCm3, 10);
});

test('density: alloys are lighter than fine gold, invalid input returns null', () => {
  const a = C.density('volume', 1, 'gold750', GOLD), b = C.density('volume', 1, 'gold585', GOLD);
  assert.ok(a.weightG < 19.32 && b.weightG < a.weightG);
  assert.equal(C.density('volume', 0, 'gold999', GOLD), null);
  assert.equal(C.density('volume', 'abc', 'gold999', GOLD), null);
  assert.equal(C.density('volume', 1, 'unknown', GOLD), null);
  assert.equal(C.density('volume', 1, 'gold999', 0), null);
  assert.equal(C.density('x', 1, 'gold999', GOLD), null);
});

test('mass converter: troy ounce, gram, kilogram, avoirdupois ounce', () => {
  const oz = C.convertMass('1', 'oz');
  assert.equal(oz.grams, 31.1035);
  assert.equal(oz.kilograms, 0.0311);
  assert.equal(oz.troyOunces, 1);
  assert.equal(oz.avoirdupoisOunces, 1.0971);
  const g = C.convertMass('100', 'g');
  assert.equal(g.troyOunces, 3.2151);
  assert.equal(C.convertMass('1', 'kg').troyOunces, 32.1507);
  assert.equal(C.convertMass('1', 'avoz').grams, 28.3495);
  assert.equal(C.convertMass('1,5', 'oz').grams, 46.6552);
  assert.equal(C.convertMass('0', 'oz'), null);
  assert.equal(C.convertMass('1', 'lb'), null);
});
