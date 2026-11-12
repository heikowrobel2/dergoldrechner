/* Motion for the start page: entrance, scroll reveals, parallax, header state, result count-up.
 * Everything is optional and switched off with prefers-reduced-motion. */
(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.remove('no-js');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.add('is-ready'); }); });

  // Scroll reveals
  var els = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(function (e) { e.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
  }

  // Background films: play only while visible (saves CPU/battery), never with reduced motion
  var films = Array.prototype.slice.call(document.querySelectorAll('video[autoplay]'));
  films.forEach(function (v) {
    // If the browser cannot decode the film, show the poster image instead of a frozen frame.
    var fail = function () { v.classList.add('is-fallback'); };
    v.addEventListener('error', fail, true);
    Array.prototype.forEach.call(v.querySelectorAll('source'), function (s) { s.addEventListener('error', function () { if (!s.nextElementSibling) fail(); }); });
  });
  if (reduce) {
    films.forEach(function (v) { v.removeAttribute('autoplay'); v.pause(); });
  } else if ('IntersectionObserver' in window) {
    var vo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var v = en.target;
        if (en.isIntersecting) { v.muted = true; var p = v.play(); if (p && p.catch) p.catch(function () {}); }
        else v.pause();
      });
    }, { threshold: 0.15 });
    films.forEach(function (v) { vo.observe(v); });
  }

  // Header border once scrolled
  var header = document.querySelector('.site-header');
  var par = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  var ticking = false, lastY = 0;
  function onScroll() {
    // header state is set immediately (never wait for a frame, so it can't stay transparent over light content)
    if (header) header.classList.toggle('scrolled', window.scrollY > 8);
    if (ticking || !par.length) return;
    ticking = true;
    requestAnimationFrame(function () {
      if (!reduce) par.forEach(function (p) {
        var r = p.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) return;
        var f = parseFloat(p.getAttribute('data-parallax')) || 0.08;
        p.style.transform = 'translate3d(0,' + ((r.top + r.height / 2 - innerHeight / 2) * -f).toFixed(1) + 'px,0)';
      });
      ticking = false;
    });
  }
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Count-up of the main result when it changes (app.js renders the final text first)
  if (reduce) return;
  var last = null;
  var fmt = new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  function parseRange(t) {
    var m = t.match(/[\d.]+,\d{2}/g);
    return m && m.length === 2 ? m.map(function (s) { return parseFloat(s.replace(/\./g, '').replace(',', '.')); }) : null;
  }
  var target = document.getElementById('result');
  if (!target || !('MutationObserver' in window)) return;
  var written = null, run = 0;
  new MutationObserver(function () {
    var big = target.querySelector('.big');
    if (!big) { last = null; return; }
    if (big.textContent === written) return; // our own animation frame
    var to = parseRange(big.textContent);
    if (!to) return;
    var from = last || [0, 0];
    last = to;
    if (from[0] === to[0] && from[1] === to[1]) return;
    var id = ++run, t0 = performance.now(), dur = from[0] === 0 ? 900 : 450;
    target.classList.remove('flash'); void target.offsetWidth; target.classList.add('flash');
    (function step(now) {
      if (id !== run || !big.isConnected) return;
      var k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 4);
      written = fmt.format(from[0] + (to[0] - from[0]) * e) + ' € – ' + fmt.format(from[1] + (to[1] - from[1]) * e) + ' €';
      big.textContent = written;
      if (k < 1) requestAnimationFrame(step);
    })(t0);
  }).observe(target, { childList: true, subtree: true, characterData: true });
})();
