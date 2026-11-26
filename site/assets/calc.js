/* Calculation core for dergoldrechner.de.
 * Pure functions, no DOM. Used in the browser (window.GoldCalc) and in node tests.
 * All values are indicative (Richtwerte), never offers.
 * Functions return null when an input is missing or invalid, so the UI can show a message instead of 0 €. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.GoldCalc = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var TROY_OUNCE_G = 31.1034768;
  var MAX_WEIGHT_G = 100000;
  var MAX_COUNT = 10000;

  // Typical buyer payout as share of melt value. ASSUMPTION (not a sourced market figure), shown as a range.
  var PAYOUT = {
    // Gold scrap: published buy-back lists of good dealers show ~90-94 % for 333 to 750 alike (Nov 2026),
    // weaker buyers pay clearly less – hence a wide band, same for all jewellery finenesses.
    goldLow: { min: 0.78, max: 0.93 },   // 333/375
    goldMid: { min: 0.78, max: 0.93 },   // 585/750
    goldHigh: { min: 0.85, max: 0.96 },  // 900 and above
    goldCoin: { min: 0.92, max: 0.97 },
    goldBullion: { min: 0.95, max: 0.99 }, // 1 oz bullion coins (Krügerrand, Maple, Philharmoniker …): ~97–99 % at big dealers
    goldBullionSmall: { min: 0.92, max: 0.98 }, // fractional bullion coins (1/2 oz and smaller)
    goldBarSmall: { min: 0.90, max: 0.97 },// bars up to 10 g
    goldBar: { min: 0.94, max: 0.98 },     // bars 20–50 g / 1 oz
    goldBarLarge: { min: 0.97, max: 0.995 },// bars from 100 g
    dental: { min: 0.72, max: 0.88 },
    silverScrap: { min: 0.55, max: 0.80 },
    silverCoin: { min: 0.65, max: 0.85 },
    silverBar: { min: 0.88, max: 0.97 },   // bars and bullion coins (dealers list ~93-98 %)
    pgmScrap: { min: 0.70, max: 0.88 }   // platinum / palladium jewellery and scrap
  };

  // Platinum group metals: fineness in parts per thousand (same list for platinum and palladium).
  var PGM_FINENESS = [
    { id: '500', label: '500er (z. B. Palladium-Schmuck)', fine: 500 },
    { id: '600', label: '600er', fine: 600 },
    { id: '900', label: '900er', fine: 900 },
    { id: '950', label: '950er (üblich bei Platinschmuck)', fine: 950 },
    { id: '999', label: '999er (Barren, Münzen)', fine: 999 }
  ];

  /** Platinum or palladium by weight: metal 'platinum'|'palladium', weight g, fineness id, price EUR/g. */
  function pgmScrap(weightG, finenessId, pricePerG) {
    var f = find(PGM_FINENESS, finenessId);
    if (!f) throw new Error('Unbekannter Feingehalt: ' + finenessId);
    var w = parseNumber(weightG), p = parseNumber(pricePerG);
    if (!validWeight(w) || !(p > 0)) return null;
    return result(w * f.fine / 1000, p, PAYOUT.pgmScrap);
  }

  // Fine silver content per coin in grams (nominal values).
  var SILVER_COINS = [
    { id: 'maple-ag', label: 'Maple Leaf Silber 1 oz', fineG: 31.1035, payout: 'silverBar' },
    { id: 'philharmoniker-ag', label: 'Wiener Philharmoniker Silber 1 oz', fineG: 31.1035, payout: 'silverBar' },
    { id: 'kruegerrand-ag', label: 'Krügerrand Silber 1 oz', fineG: 31.1035, payout: 'silverBar' },
    { id: 'eagle-ag', label: 'American Eagle Silber 1 oz', fineG: 31.1035, payout: 'silverBar' },
    { id: 'britannia-ag', label: 'Britannia Silber 1 oz', fineG: 31.1035, payout: 'silverBar' },
    { id: '5dm-adler', label: '5 DM Silberadler (1951–1974)', fineG: 7.0 },
    { id: '10dm-625', label: '10 DM Gedenkmünze (1987–1997, 625er)', fineG: 9.688 },
    { id: '10dm-925', label: '10 DM Gedenkmünze (1998–2001, 925er)', fineG: 14.338 },
    { id: '5dm-gedenk', label: '5 DM Gedenkmünze (1952–1979, 625er)', fineG: 7.0 },
    { id: '10dm-olympia', label: '10 DM Olympia 1972 (625er)', fineG: 9.6875 },
    { id: '5mark-kaiser', label: '5 Mark Kaiserreich (900er)', fineG: 25.0 },
    { id: 'mtt', label: 'Maria-Theresien-Taler (833er)', fineG: 23.389 },
    { id: 's10', label: '10 Schilling (1957–1973, 640er)', fineG: 4.8 },
    { id: 's25', label: '25 Schilling (1955–1973, 800er)', fineG: 10.4 },
    { id: 's50-900', label: '50 Schilling (1959–1973, 900er)', fineG: 18.0 },
    { id: 's50-640', label: '50 Schilling (1974–1978, 640er)', fineG: 12.8 },
    { id: 's100-640', label: '100 Schilling (1974–1979, 640er)', fineG: 15.36 },
    { id: 's100-900', label: '100 Schilling (ab 1980, 900er)', fineG: 18.0 },
    { id: 's500', label: '500 Schilling (925er)', fineG: 22.2 },
    { id: '10eur-925', label: '10 Euro Gedenkmünze (2002–2010, 925er)', fineG: 16.65 },
    { id: '10eur-625', label: '10 Euro Gedenkmünze (2011–2015, nur Spiegelglanz, 625er)', fineG: 10.0 },
    { id: '20eur-925', label: '20 Euro Gedenkmünze (ab 2016, 925er)', fineG: 16.65 },
    { id: 'bar-1kg', label: 'Silberbarren 1 kg (999)', fineG: 999, payout: 'silverBar' },
    { id: 'bar-500', label: 'Silberbarren 500 g (999)', fineG: 499.5, payout: 'silverBar' },
    { id: 'bar-250', label: 'Silberbarren 250 g (999)', fineG: 249.75, payout: 'silverBar' },
    { id: 'bar-100', label: 'Silberbarren 100 g (999)', fineG: 99.9, payout: 'silverBar' },
    { id: 'bar-1oz', label: 'Silberbarren 1 oz (999)', fineG: 31.07, payout: 'silverBar' }
  ];

  // Fineness in parts per thousand.
  var GOLD_FINENESS = [
    { id: '333', label: '333er Gold (8 Karat)', fine: 333, payout: 'goldLow' },
    { id: '375', label: '375er Gold (9 Karat)', fine: 375, payout: 'goldLow' },
    { id: '585', label: '585er Gold (14 Karat)', fine: 585, payout: 'goldMid' },
    { id: '750', label: '750er Gold (18 Karat)', fine: 750, payout: 'goldMid' },
    { id: '875', label: '875er Gold (21 Karat)', fine: 875, payout: 'goldHigh' },
    { id: '900', label: '900er Gold (Münzgold)', fine: 900, payout: 'goldHigh' },
    { id: '916', label: '916er Gold (22 Karat)', fine: 916, payout: 'goldHigh' },
    { id: '999', label: '999er Feingold (24 Karat)', fine: 999, payout: 'goldHigh' }
  ];

  var SILVER_FINENESS = [
    { id: '800', label: '800er Silber', fine: 800 },
    { id: '835', label: '835er Silber', fine: 835 },
    { id: '900', label: '900er Silber', fine: 900 },
    { id: '925', label: '925er Sterlingsilber', fine: 925 },
    { id: '999', label: '999er Feinsilber', fine: 999 }
  ];

  // Dental alloys: assumed gold share range (fraction). Wide on purpose.
  var DENTAL_ALLOYS = [
    { id: 'hoch', label: 'Hochgoldhaltig (gelb, schwer)', min: 0.70, max: 0.85 },
    { id: 'reduziert', label: 'Goldreduziert (blasser)', min: 0.40, max: 0.60 },
    { id: 'unbekannt', label: 'Weiß ich nicht', min: 0.40, max: 0.80 }
  ];

  // Gold bars 999.9 by gross weight in grams.
  var GOLD_BARS = [1, 2, 2.5, 5, 10, 20, 31.1035, 50, 100, 250, 500, 1000].map(function (g) {
    var id = g === 31.1035 ? 'bar-1oz' : g === 1000 ? 'bar-1kg' : 'bar-' + String(g).replace('.', '_');
    var label = g === 31.1035 ? 'Goldbarren 1 Unze (31,1 g)' : g === 1000 ? 'Goldbarren 1 kg' : 'Goldbarren ' + String(g).replace('.', ',') + ' g';
    // dealers treat the nominal weight of a 999.9 bar as fine gold
    return { id: id, label: label, grams: g, fineG: g, payout: g <= 10 ? 'goldBarSmall' : g < 100 ? 'goldBar' : 'goldBarLarge' };
  });

  // Fine gold content per coin in grams (nominal values).
  var COINS = [
    { id: 'kruegerrand', label: 'Krügerrand 1 oz', fineG: 31.1035, payout: 'goldBullion' },
    { id: 'kruegerrand-12', label: 'Krügerrand 1/2 oz', fineG: 15.5518, payout: 'goldBullionSmall' },
    { id: 'kruegerrand-14', label: 'Krügerrand 1/4 oz', fineG: 7.7759, payout: 'goldBullionSmall' },
    { id: 'kruegerrand-110', label: 'Krügerrand 1/10 oz', fineG: 3.1103, payout: 'goldBullionSmall' },
    { id: 'maple', label: 'Maple Leaf 1 oz', fineG: 31.1035, payout: 'goldBullion' },
    { id: 'philharmoniker', label: 'Wiener Philharmoniker 1 oz', fineG: 31.1035, payout: 'goldBullion' },
    { id: 'kaenguru', label: 'Känguru (Nugget) 1 oz', fineG: 31.1035, payout: 'goldBullion' },
    { id: 'eagle', label: 'American Eagle 1 oz', fineG: 31.1035, payout: 'goldBullion' },
    { id: 'britannia', label: 'Britannia 1 oz', fineG: 31.1035, payout: 'goldBullion' },
    { id: 'halbunze', label: 'Teilstück 1/2 Unze (alle Anlagemünzen)', fineG: 15.5518, payout: 'goldBullionSmall' },
    { id: 'viertelunze', label: 'Teilstück 1/4 Unze (alle Anlagemünzen)', fineG: 7.7759, payout: 'goldBullionSmall' },
    { id: 'zehntelunze', label: 'Teilstück 1/10 Unze (alle Anlagemünzen)', fineG: 3.1103, payout: 'goldBullionSmall' },
    { id: 'fuenfundzwanzigstelunze', label: 'Teilstück 1/25 Unze (z. B. Philharmoniker)', fineG: 1.2441, payout: 'goldBullionSmall' },
    { id: 'goldeuro100', label: '100 Euro Goldmünze Deutschland (1/2 oz)', fineG: 15.5518, payout: 'goldBullionSmall' }, // 999.9 fine, sources: Bundesbank, Münze Deutschland
    { id: 'goldeuro50', label: '50 Euro Goldmünze Deutschland (1/4 oz)', fineG: 7.7759, payout: 'goldBullionSmall' },
    { id: 'goldeuro20', label: '20 Euro Goldmünze Deutschland (1/8 oz)', fineG: 3.8879, payout: 'goldBullionSmall' },
    { id: 'goldeuro200', label: '200 Euro Goldmünze Deutschland (1 oz, 2002)', fineG: 31.1035, payout: 'goldBullion' },
    { id: '20mark', label: '20 Mark Kaiserreich', fineG: 7.168 },
    { id: '10mark', label: '10 Mark Kaiserreich', fineG: 3.584 },
    { id: 'vreneli', label: '20 Franken Vreneli', fineG: 5.806 },
    { id: 'vreneli10', label: '10 Franken Vreneli', fineG: 2.903 },
    { id: 'sovereign', label: 'Sovereign (Großbritannien)', fineG: 7.322 },
    { id: 'halfsovereign', label: 'Half Sovereign (Großbritannien)', fineG: 3.661 },
    { id: 'dukat1', label: '1 Dukat Österreich', fineG: 3.442 },
    { id: 'dukat4', label: '4 Dukaten Österreich', fineG: 13.768 }
  ];

  /** Parses German or English number input. Returns NaN if invalid, empty, zero or negative.
   *  "12,5" -> 12.5, "12,5 g" -> 12.5, "1.234,5" -> 1234.5, "1.234" -> 1234, "1,234.5" -> 1234.5 */
  function parseNumber(v) {
    if (typeof v === 'number') return isFinite(v) && v > 0 ? v : NaN;
    var s = String(v == null ? '' : v).trim();
    if (/^-/.test(s)) return NaN;
    s = s.replace(/\s*(g|gramm|gr)\.?$/i, '');      // allow a trailing unit
    if (/[^\d.,\s]/.test(s)) return NaN;             // anything else (e.g. "1e3", "abc") is invalid
    s = s.replace(/\s/g, '');
    if (!s) return NaN;
    var lastComma = s.lastIndexOf(','), lastDot = s.lastIndexOf('.');
    if (lastComma !== -1 && lastDot !== -1) {
      var dec = lastComma > lastDot ? ',' : '.';
      var thou = dec === ',' ? '.' : ',';
      s = s.split(thou).join('').replace(dec, '.');
    } else if (lastComma !== -1) {
      s = s.split(',').length > 2 ? s.split(',').join('') : s.replace(',', '.');
    } else if (lastDot !== -1 && /^\d{1,3}(\.\d{3})+$/.test(s)) {
      s = s.split('.').join(''); // German thousands separator
    }
    var n = Number(s);
    return isFinite(n) && n > 0 ? n : NaN;
  }

  function find(list, id) {
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  function round2(x) { return Math.round(x * 100) / 100; }

  function validWeight(w) { return w > 0 && w <= MAX_WEIGHT_G; }

  function result(fineG, pricePerG, payout) {
    var melt = fineG * pricePerG;
    return {
      fineGrams: round2(fineG),
      meltValue: round2(melt),
      payoutMin: round2(melt * payout.min),
      payoutMax: round2(melt * payout.max),
      payoutShare: payout
    };
  }

  /** Scrap gold: weight in g, fineness id, gold price EUR per gram (fine gold). */
  function goldScrap(weightG, finenessId, goldPerG) {
    var f = find(GOLD_FINENESS, finenessId);
    if (!f) throw new Error('Unbekannter Feingehalt: ' + finenessId);
    var w = parseNumber(weightG), p = parseNumber(goldPerG);
    if (!validWeight(w) || !(p > 0)) return null;
    return result(w * f.fine / 1000, p, PAYOUT[f.payout]);
  }

  /**
   * Mixed lot of scrap gold: items [{ weight, fineness }]. Rows with an empty weight are skipped,
   * a filled but invalid row makes the whole result null (no silently wrong total).
   * Each piece keeps its own payout band; the totals are summed.
   */
  function goldMix(items, goldPerG) {
    var p = parseNumber(goldPerG);
    if (!(p > 0) || !items || !items.length) return null;
    var fine = 0, melt = 0, min = 0, max = 0, used = [];
    for (var i = 0; i < items.length; i++) {
      var raw = String(items[i].weight == null ? '' : items[i].weight).trim();
      if (raw === '') continue;
      var r = goldScrap(raw, items[i].fineness, p);
      if (!r) return null;
      var f = find(GOLD_FINENESS, items[i].fineness), w = parseNumber(raw), fg = w * f.fine / 1000;
      fine += fg; melt += fg * p; min += fg * p * PAYOUT[f.payout].min; max += fg * p * PAYOUT[f.payout].max;
      used.push({ weight: parseNumber(raw), fineness: items[i].fineness, fineGrams: r.fineGrams, meltValue: r.meltValue });
    }
    var total = used.reduce(function (s, u) { return s + u.weight; }, 0);
    if (!used.length || total > MAX_WEIGHT_G) return null;
    return {
      fineGrams: round2(fine), meltValue: round2(melt), payoutMin: round2(min), payoutMax: round2(max),
      payoutShare: { min: melt ? min / melt : 0, max: melt ? max / melt : 0 },
      pieces: used.length, items: used
    };
  }

  /** Dental gold: gross weight, share of ceramic/teeth (0..0.9), alloy id. Returns a range. */
  function dental(weightG, ceramicShare, alloyId, goldPerG) {
    var a = find(DENTAL_ALLOYS, alloyId);
    if (!a) throw new Error('Unbekannte Legierung: ' + alloyId);
    var w = parseNumber(weightG), p = parseNumber(goldPerG);
    var share = Number(ceramicShare) || 0;
    if (!validWeight(w) || !(p > 0) || share < 0 || share > 0.9) return null;
    var metalG = w * (1 - share);
    var low = result(metalG * a.min, p, PAYOUT.dental);
    var high = result(metalG * a.max, p, PAYOUT.dental);
    return {
      fineGramsMin: low.fineGrams,
      fineGramsMax: high.fineGrams,
      meltValueMin: low.meltValue,
      meltValueMax: high.meltValue,
      payoutMin: low.payoutMin,
      payoutMax: high.payoutMax,
      payoutShare: PAYOUT.dental
    };
  }

  /** Gold coins: coin id, whole number count. */
  function coins(coinId, count, goldPerG) {
    var c = find(COINS, coinId);
    if (!c) throw new Error('Unbekannte Münze: ' + coinId);
    var n = parseNumber(count), p = parseNumber(goldPerG);
    if (!(n >= 1) || n > MAX_COUNT || Math.floor(n) !== n || !(p > 0)) return null;
    return result(c.fineG * n, p, PAYOUT[c.payout || 'goldCoin']);
  }

  /** Gold bars 999.9: bar id, whole number count. */
  function bars(barId, count, goldPerG) {
    var b = find(GOLD_BARS, barId);
    if (!b) throw new Error('Unbekannter Barren: ' + barId);
    var n = parseNumber(count), p = parseNumber(goldPerG);
    if (!(n >= 1) || n > MAX_COUNT || Math.floor(n) !== n || !(p > 0)) return null;
    return result(b.fineG * n, p, PAYOUT[b.payout]);
  }

  /** Silver coins: coin id, whole number count, silver price EUR per gram. */
  function silverCoins(coinId, count, silverPerG) {
    var c = find(SILVER_COINS, coinId);
    if (!c) throw new Error('Unbekannte Münze: ' + coinId);
    var n = parseNumber(count), p = parseNumber(silverPerG);
    if (!(n >= 1) || n > MAX_COUNT || Math.floor(n) !== n || !(p > 0)) return null;
    return result(c.fineG * n, p, PAYOUT[c.payout || 'silverCoin']);
  }

  /** Scrap silver: weight in g, fineness id, silver price EUR per gram. */
  function silverScrap(weightG, finenessId, silverPerG) {
    var f = find(SILVER_FINENESS, finenessId);
    if (!f) throw new Error('Unbekannter Feingehalt: ' + finenessId);
    var w = parseNumber(weightG), p = parseNumber(silverPerG);
    if (!validWeight(w) || !(p > 0)) return null;
    return result(w * f.fine / 1000, p, PAYOUT.silverScrap);
  }

  function formatEUR(x) {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(x);
  }

  return {
    TROY_OUNCE_G: TROY_OUNCE_G,
    MAX_WEIGHT_G: MAX_WEIGHT_G,
    MAX_COUNT: MAX_COUNT,
    GOLD_FINENESS: GOLD_FINENESS,
    SILVER_FINENESS: SILVER_FINENESS,
    DENTAL_ALLOYS: DENTAL_ALLOYS,
    COINS: COINS,
    SILVER_COINS: SILVER_COINS,
    silverCoins: silverCoins,
    PGM_FINENESS: PGM_FINENESS,
    pgmScrap: pgmScrap,
    PAYOUT: PAYOUT,
    goldScrap: goldScrap,
    goldMix: goldMix,
    GOLD_BARS: GOLD_BARS,
    bars: bars,
    dental: dental,
    coins: coins,
    silverScrap: silverScrap,
    formatEUR: formatEUR,
    parseNumber: parseNumber
  };
});
