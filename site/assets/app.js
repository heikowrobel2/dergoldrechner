/* Wires the calculator form to GoldCalc and loads the current metal price. */
(function () {
  'use strict';
  var C = window.GoldCalc;
  var price = null; // { gold, silver, updated, demo? }
  var STALE_MS = 3 * 24 * 3600 * 1000;
  var OZ = 31.1034768; // grams per troy ounce
  var IS_LOCAL = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function eur(x) { return C.formatEUR(x); }
  function grams(x) { return x.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' g'; }
  function pct(x) { return Math.round(x * 100) + ' %'; }

  function plausible(p) {
    return p && p.gold >= 20 && p.gold <= 1000 && p.silver >= 0.2 && p.silver <= 50 && (!p.demo || IS_LOCAL);
  }

  function loadPrice() {
    return fetch('/api/price.php', { cache: 'no-store' })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (p) { if (!plausible(p)) throw new Error('bad'); return p; })
      .catch(function () {
        return fetch('/data/price.json', { cache: 'no-store' }).then(function (r) { return r.json(); });
      })
      .then(function (p) {
        if (!plausible(p)) throw new Error('Keine gültigen Kursdaten');
        price = p;
        return p;
      });
  }

  function priceStamp() {
    if (price.demo) return { txt: 'DEMO-KURS (nur Vorschau, kein echter Kurs)', stale: true };
    var d = new Date(price.updated);
    var txt = isNaN(d) ? 'unbekannt' : d.toLocaleString('de-DE', { dateStyle: 'medium', timeStyle: 'short' });
    return { txt: txt, stale: isNaN(d) || (Date.now() - d.getTime() > STALE_MS) };
  }

  function renderPriceBar() {
    var bar = $('#price-bar');
    if (!bar) return;
    var s = priceStamp();
    bar.innerHTML = 'Gold <strong>' + eur(price.gold * OZ) + ' je Unze</strong> (' + eur(price.gold) + '/g) · Silber <strong>' +
      eur(price.silver * OZ) + ' je Unze</strong> (' + eur(price.silver) + '/g)' + (s.stale ? ' · <span class="stale">' + (price.demo ? 'DEMO' : 'veraltet') + '</span>' : '');
    bar.title = 'Kursstand: ' + s.txt;
  }

  // Optional price slots anywhere on the page: <b data-price="gold|silver|stamp"></b>
  function renderPriceSlots() {
    var s = priceStamp();
    $all('[data-price]').forEach(function (el) {
      var k = el.getAttribute('data-price');
      var g = /^g(\d{3})$/.exec(k);
      if (g) { el.textContent = eur(price.gold * Number(g[1]) / 1000) + '/g'; return; }
      if ((k === 'platinum' || k === 'palladium') && price[k]) { el.textContent = eur(price[k]) + '/g'; return; }
      var qq = /^(gold|silver|platinum|palladium)q(\d+)$/.exec(k); // q = milligrams of fine metal
      if (qq) { if (price[qq[1]]) el.textContent = eur(price[qq[1]] * Number(qq[2]) / 1000); return; }
      var wq = /^(gold|silver)w(\d+)$/.exec(k);
      if (wq) { el.textContent = eur(price[wq[1]] * Number(wq[2])); return; }
      var ozv = /^(gold|silver|platinum|palladium)ozv$/.exec(k);
      if (ozv) { if (price[ozv[1]]) el.textContent = eur(price[ozv[1]] * OZ); return; }
      var oz = /^(gold|silver|platinum|palladium)oz$/.exec(k);
      if (oz) { if (price[oz[1]]) el.textContent = eur(price[oz[1]] * OZ) + ' je Unze'; return; }
      if (el.classList.contains('rate-g')) { if (price[k]) el.textContent = eur(price[k]) + '/g'; return; }
      if (k === 'ratio') { if (price.gold && price.silver) el.textContent = (price.gold / price.silver).toFixed(1).replace('.', ',') + ' : 1'; return; }
      if (k === 'silverkg') { el.textContent = eur(price.silver * 1000) + '/kg'; return; }
      if (k === 'gold') el.textContent = eur(price.gold) + '/g';
      else if (k === 'silver') el.textContent = eur(price.silver) + '/g';
      else if (k === 'stamp') el.textContent = s.txt;
    });
  }

  function val(form, name) { var el = form.elements[name]; return el ? el.value : ''; }

  // Ceramic share in % -> fraction; empty or 0 means 0; anything else invalid returns NaN.
  function ceramicShare(raw) {
    var s = String(raw || '').trim();
    if (s === '' || /^0+([.,]0*)?$/.test(s)) return 0;
    var n = C.parseNumber(s);
    return n >= 0 && n <= 90 ? n / 100 : NaN;
  }

  // Mixed lot: rows of weight + stamp (inputs w1.., selects f1..).
  function mixItems(form) {
    return $all('.mix-row', form).map(function (row) {
      var inp = $('input', row), sel = $('select', row);
      return { weight: inp.value, fineness: sel.value, input: inp, label: sel.options[sel.selectedIndex].text };
    });
  }

  // Returns the name of the invalid field, or null.
  function invalidField(form) {
    var type = form.getAttribute('data-calc');
    if (type === 'coins' || type === 'silvercoins' || type === 'bars') {
      var c = C.parseNumber(val(form, 'count'));
      return (c >= 1 && c <= C.MAX_COUNT && Math.floor(c) === c) ? null : 'count';
    }
    if (type === 'mix') {
      var items = mixItems(form), filled = 0, bad = null;
      items.forEach(function (it) {
        var raw = String(it.weight).trim(); if (!raw) return; filled++;
        var w = C.parseNumber(raw);
        if (!bad && !(w > 0 && w <= C.MAX_WEIGHT_G)) bad = it.input.name;
      });
      if (!bad && filled) {
        var sum = items.reduce(function (a, it) { var w = C.parseNumber(String(it.weight).trim()); return a + (w > 0 ? w : 0); }, 0);
        if (sum > C.MAX_WEIGHT_G) bad = 'mixtotal';
      }
      return bad || (filled ? null : 'mixempty');
    }
    if (type === 'pgm' && !(price[val(form, 'metal')] > 0)) return 'pgmprice';
    var w = C.parseNumber(val(form, 'weight'));
    if (!(w > 0 && w <= C.MAX_WEIGHT_G)) return 'weight';
    if (type === 'dental' && isNaN(ceramicShare(val(form, 'ceramic')))) return 'ceramic';
    return null;
  }

  function compute(form) {
    var type = form.getAttribute('data-calc');
    if (type === 'gold') return C.goldScrap(val(form, 'weight'), val(form, 'fineness'), price.gold);
    if (type === 'silver') return C.silverScrap(val(form, 'weight'), val(form, 'fineness'), price.silver);
    if (type === 'coins') return C.coins(val(form, 'coin'), val(form, 'count'), price.gold);
    if (type === 'bars') return C.bars(val(form, 'coin'), val(form, 'count'), price.gold);
    if (type === 'silvercoins') return C.silverCoins(val(form, 'coin'), val(form, 'count'), price.silver);
    if (type === 'pgm') return C.pgmScrap(val(form, 'weight'), val(form, 'fineness'), price[val(form, 'metal')]);
    if (type === 'mix') return C.goldMix(mixItems(form), price.gold);
    if (type === 'dental') return C.dental(val(form, 'weight'), ceramicShare(val(form, 'ceramic')), val(form, 'alloy'), price.gold);
    throw new Error('Unbekannter Rechner');
  }

  function markInvalid(form, field) {
    var names = ['weight', 'count', 'ceramic'].concat($all('.mix-row input', form).map(function (i) { return i.name; }));
    names.forEach(function (n) {
      var el = form.elements[n];
      if (!el) return;
      el.setAttribute('aria-invalid', n === field ? 'true' : 'false');
      if (n === field) el.setAttribute('aria-describedby', 'result');
      else el.removeAttribute('aria-describedby');
    });
  }

  var MESSAGES = {
    count: function () { return 'Bitte eine ganze Anzahl zwischen 1 und ' + C.MAX_COUNT.toLocaleString('de-DE') + ' eingeben.'; },
    ceramic: function () { return 'Bitte beim Keramikanteil eine Zahl zwischen 0 und 90 eingeben.'; },
    pgmprice: function () { return 'Der Kurs für dieses Metall ist gerade nicht verfügbar. Bitte versuchen Sie es später erneut.'; },
    weight: function () { return 'Bitte das Gewicht in Gramm eingeben, z. B. 12,5. Höchstens ' + C.MAX_WEIGHT_G.toLocaleString('de-DE') + ' g.'; },
    mixempty: function () { return 'Bitte bei mindestens einem Stück das Gewicht in Gramm eingeben.'; },
    mixtotal: function () { return 'Zusammen höchstens ' + C.MAX_WEIGHT_G.toLocaleString('de-DE') + ' g – bitte die Gewichte prüfen.'; }
  };

  function inputSummary(form) {
    var type = form.getAttribute('data-calc');
    var sel = function (n) { var el = form.elements[n]; return el ? el.options[el.selectedIndex].text : ''; };
    if (type === 'coins' || type === 'silvercoins' || type === 'bars') return C.parseNumber(val(form, 'count')).toLocaleString('de-DE') + ' × ' + sel('coin');
    var w = C.parseNumber(val(form, 'weight')).toLocaleString('de-DE', { maximumFractionDigits: 2 }) + ' g';
    if (type === 'pgm') return w + ' ' + sel('metal') + ', ' + sel('fineness').split(' (')[0];
    if (type === 'mix') return '';
    if (type === 'dental') return w + ' Zahngold, ' + Math.round(ceramicShare(val(form, 'ceramic')) * 100) + ' % Keramik';
    return w + ' ' + sel('fineness');
  }

  function render(form) {
    var out = $('#result');
    var sticky = $('#sticky-result');
    if (!out || !price) return;
    var type = form.getAttribute('data-calc');
    var bad = invalidField(form);
    var r = bad ? null : compute(form);
    if (!r && !bad) bad = 'weight';
    markInvalid(form, bad);
    if (!r) {
      var msg = MESSAGES[bad] ? MESSAGES[bad]() : 'Bitte bei ' + (form.elements[bad] && form.elements[bad].labels[0] ? form.elements[bad].labels[0].textContent.split(' (')[0] : 'diesem Stück') + ' ein gültiges Gewicht in Gramm eingeben, z. B. 4,5.';
      out.innerHTML = '<p class="stale" role="alert">' + msg + '</p>';
      if (sticky) sticky.hidden = true;
      return;
    }
    var s = priceStamp();
    var range = eur(r.payoutMin) + ' – ' + eur(r.payoutMax);
    var isSilver = type === 'silver' || type === 'silvercoins';
    var pgmMetal = type === 'pgm' ? val(form, 'metal') : null;
    var metal = pgmMetal ? (pgmMetal === 'palladium' ? 'Palladium' : 'Platin') : (isSilver ? 'Silber' : 'Gold');
    var unitPrice = pgmMetal ? price[pgmMetal] : (isSilver ? price.silver : price.gold);
    var summary = type === 'mix' ? r.pieces + (r.pieces === 1 ? ' Stück' : ' Stücke') + ' Altgold, zusammen ' + grams(r.items.reduce(function (a, it) { return a + it.weight; }, 0)) : inputSummary(form);
    summary = summary.replace(/(\d+) (Karat|Unzen?|oz)\b/g, '$1 $2'); // keep number and unit on one line
    var html = '<div class="label">Unverbindlicher Ankaufs-Richtwert für ' + summary.replace(/</g, '&lt;') + '</div>' +
      '<div class="big">' + range + '</div>';
    if (type === 'dental') {
      html += '<div class="row"><span>Geschätzter Feingoldanteil</span><span>' + grams(r.fineGramsMin) + ' – ' + grams(r.fineGramsMax) + '</span></div>' +
        '<div class="row"><span>Materialwert (100 %)</span><span>' + eur(r.meltValueMin) + ' – ' + eur(r.meltValueMax) + '</span></div>';
    } else if (type === 'mix') {
      var nums = mixItems(form).map(function (it, i) { return String(it.weight).trim() ? i + 1 : 0; }).filter(Boolean);
      r.items.forEach(function (it, i) {
        html += '<div class="row"><span>Stück ' + nums[i] + ': ' + grams(it.weight) + ' ' + it.fineness + (it.fineness === '999' ? 'er Feingold' : 'er Gold') + '</span><span>' + eur(it.meltValue) + '</span></div>';
      });
      html += '<div class="row"><span>Reiner Goldanteil gesamt</span><span>' + grams(r.fineGrams) + '</span></div>' +
        '<div class="row"><span>Materialwert gesamt (100 %)</span><span>' + eur(r.meltValue) + '</span></div>';
    } else {
      html += '<div class="row"><span>Reiner ' + metal + 'anteil</span><span>' + grams(r.fineGrams) + '</span></div>' +
        '<div class="row"><span>Materialwert (100 %)</span><span>' + eur(r.meltValue) + '</span></div>';
    }
    html += '<div class="row"><span>Börsenkurs Fein' + metal.toLowerCase() + '</span><span>' +
      eur(unitPrice) + '/g</span></div>' +
      '<div class="row"><span>entspricht je Feinunze (31,1 g)</span><span>' + eur(unitPrice * OZ) + '</span></div>' +
      '<p class="note"><strong>Annahme:</strong> Ankäufer zahlen ' + pct(r.payoutShare.min) + ' bis ' + pct(r.payoutShare.max) +
      ' des Materialwerts. Das ist eine Schätzung, kein belegter Marktpreis – Angebote können darunter oder darüber liegen.' +
      (type === 'dental' && val(form, 'alloy') === 'unbekannt' ? ' Wenn Sie die Legierung kennen, wird die Spanne deutlich enger.' : '') + '</p>' +
      '<p class="note">Kursstand: ' + (s.stale ? '<span class="stale">' + s.txt + (price.demo ? '' : ' (veraltet)') + '</span>' : s.txt) +
      '. Richtwert, kein Angebot.</p>';
    out.innerHTML = html;
    if (sticky) {
      sticky.innerHTML = '<span>Richtwert</span><strong>' + range + '</strong>';
      sticky.hidden = false;
    }
  }

  function renderExamples() {
    var s = priceStamp();
    $all('table[data-example]').forEach(function (t) {
      var fin = t.getAttribute('data-example');
      var metal = t.getAttribute('data-metal') || 'gold';
      var weights = (t.getAttribute('data-weights') || '1,5,10,20,50').split(',');
      var rows = weights.map(function (w) {
        var r = metal === 'silver' ? C.silverScrap(w, fin, price.silver) : C.goldScrap(w, fin, price.gold);
        var n2 = function (x) { return x.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };
        return '<tr><td>' + Number(w).toLocaleString('de-DE') + ' g</td><td class="num col-fine">' + grams(r.fineGrams) + '</td><td class="num">' +
          eur(r.meltValue) + '</td><td class="num">' + n2(r.payoutMin) + '–' + n2(r.payoutMax) + ' €</td></tr>';
      });
      $('tbody', t).innerHTML = rows.join('');
      var cap = $('caption', t);
      if (cap) cap.textContent = 'Kursstand: ' + s.txt;
    });
  }

  // Price per gram for every fineness: <table data-pricetable> rows carry data-metal / data-fine
  function renderPriceTables() {
    var s = priceStamp();
    $all('table[data-pricetable]').forEach(function (t) {
      $all('tbody tr', t).forEach(function (tr) {
        var metal = tr.getAttribute('data-metal'), fin = tr.getAttribute('data-fine');
        var r = metal === 'silver' ? C.silverScrap(1, fin, price.silver)
          : (metal === 'platinum' || metal === 'palladium') ? (price[metal] ? C.pgmScrap(1, fin, price[metal]) : null)
          : C.goldScrap(1, fin, price.gold);
        if (!r) return;
        var n2 = function (x) { return x.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };
        tr.children[1].textContent = eur(r.meltValue);
        tr.children[2].textContent = n2(r.payoutMin) + '–' + n2(r.payoutMax) + ' €';
      });
      var cap = $('caption', t);
      if (cap) cap.textContent = 'Kursstand: ' + s.txt + '. Materialwert = Börsenkurs × Feingehalt; Ankaufs-Richtwert = geschätzte Spanne für Schmuck, Besteck und Altmetall (Barren und Anlagemünzen werden meist höher angekauft).';
    });
  }

  function safeUrl(u) {
    try {
      var parsed = new URL(u);
      return parsed.protocol === 'https:' ? parsed.href : null;
    } catch (e) { return null; }
  }

  function renderPartners(type) {
    var box = $('#partners');
    if (!box) return;
    var list = (window.GOLD_PARTNERS || []).filter(function (p) { return safeUrl(p.url) && p.pages.indexOf(type) !== -1; });
    if (!list.length) return;
    var label = document.createElement('div');
    label.className = 'ad-label';
    label.textContent = 'Anzeige';
    var wrap = document.createElement('div');
    wrap.className = 'cta-list';
    list.forEach(function (p) {
      var a = document.createElement('a');
      a.className = 'cta-link';
      a.href = safeUrl(p.url);
      a.rel = 'sponsored nofollow noopener';
      a.target = '_blank';
      a.appendChild(document.createTextNode(p.text + ' '));
      var tag = document.createElement('span');
      tag.textContent = 'Anzeige ›';
      a.appendChild(tag);
      wrap.appendChild(a);
    });
    box.appendChild(label);
    box.appendChild(wrap);
    box.hidden = false;
  }

  function debounce(fn, ms) {
    var t;
    return function () { clearTimeout(t); t = setTimeout(fn, ms); };
  }

  function init() {
    var form = $('form[data-calc]');
    if (!form && !$('#price-bar') && !$('table[data-example]') && !$('table[data-pricetable]') && !$('[data-price]')) return;
    loadPrice().then(function () {
      renderPriceBar();
      renderPriceSlots();
      renderExamples();
      renderPriceTables();
      if (form) {
        var add = $('.mix-add', form), box = $('.mix', form);
        if (add && box) add.addEventListener('click', function () {
          var rows = $all('.mix-row', box), max = Number(box.getAttribute('data-max')) || 12;
          if (rows.length >= max) return;
          var n = rows.length + 1, row = rows[rows.length - 1].cloneNode(true);
          $all('[id]', row).forEach(function (el) { el.id = el.id.replace(/\d+$/, n); el.name = el.id; el.removeAttribute('aria-invalid'); el.removeAttribute('aria-describedby'); });
          $all('label', row).forEach(function (l) { l.htmlFor = l.htmlFor.replace(/\d+$/, n); l.textContent = l.textContent.replace(/^Stück \d+/, 'Stück ' + n); });
          $('input', row).value = '';
          $('select', row).setAttribute('aria-label', 'Stempel Stück ' + n);
          box.appendChild(row);
          $('input', row).focus();
          if (n >= max) add.hidden = true;
        });
        form.addEventListener('input', debounce(function () { render(form); }, 150));
        form.addEventListener('change', function () { render(form); });
        form.addEventListener('submit', function (e) { e.preventDefault(); render(form); });
        render(form);
        renderPartners(form.getAttribute('data-calc'));
        // Hide the sticky bar while the result card itself is on screen.
        var sticky = $('#sticky-result'), card = $('#result');
        if (sticky && card && 'IntersectionObserver' in window) {
          new IntersectionObserver(function (entries) {
            sticky.classList.toggle('offscreen-only', entries[0].isIntersecting);
          }).observe(card);
        }
      }
    }).catch(function () {
      var out = $('#result');
      if (out) out.innerHTML = '<p class="stale">Der aktuelle Kurs ist gerade nicht verfügbar. Bitte versuchen Sie es später erneut.</p>';
      var bar = $('#price-bar');
      if (bar) bar.textContent = 'Kurs derzeit nicht verfügbar';
      $all('table[data-example] tbody').forEach(function (tb) {
        tb.innerHTML = '<tr><td colspan="4">Kurs derzeit nicht verfügbar.</td></tr>';
      });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
