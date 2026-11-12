// Inline SVG illustrations and icons (own drawings, no external assets).
const G = (id) => `<defs>
<linearGradient id="${id}g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbe6a6"/><stop offset=".45" stop-color="#d9a940"/><stop offset="1" stop-color="#8a6418"/></linearGradient>
<linearGradient id="${id}t" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff3c8"/><stop offset="1" stop-color="#e2b453"/></linearGradient>
<linearGradient id="${id}s" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".5" stop-color="#c9ccd1"/><stop offset="1" stop-color="#8c9097"/></linearGradient>
</defs>`;

// Gold bar in isometric-ish view at (x,y), width w
const bar = (id, x, y, w = 150) => {
  const h = w * 0.28, d = w * 0.18;
  return `<g transform="translate(${x} ${y})">
<polygon points="${d},0 ${w - d},0 ${w},${h} 0,${h}" fill="url(#${id}t)"/>
<polygon points="0,${h} ${w},${h} ${w},${h + w * 0.16} 0,${h + w * 0.16}" fill="url(#${id}g)"/>
<polygon points="${d + 8},6 ${w - d - 8},6 ${w - 10},${h - 6} 10,${h - 6}" fill="none" stroke="#b8892b" stroke-opacity=".5" stroke-width="2"/>
<text x="${w / 2}" y="${h * 0.66}" text-anchor="middle" font-family="Georgia,serif" font-size="${w * 0.1}" font-weight="700" fill="#8a6418" fill-opacity=".75">999,9</text>
</g>`;
};

const coin = (id, cx, cy, r) => `<g>
<circle cx="${cx}" cy="${cy + r * 0.12}" r="${r}" fill="#7d5a14"/>
<circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${id}g)"/>
<circle cx="${cx}" cy="${cy}" r="${r * 0.82}" fill="none" stroke="#fff3c8" stroke-opacity=".7" stroke-width="${r * 0.05}"/>
<text x="${cx}" y="${cy + r * 0.2}" text-anchor="middle" font-family="Georgia,serif" font-size="${r * 0.55}" font-weight="700" fill="#7d5a14" fill-opacity=".7">Au</text>
</g>`;

const ring = (id, cx, cy, r) => `<g>
<ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${r * 0.42}" fill="none" stroke="url(#${id}g)" stroke-width="${r * 0.22}"/>
<path d="M${cx - r * 0.18} ${cy - r * 0.48} l${r * 0.18} ${-r * 0.26} l${r * 0.18} ${r * 0.26} l${-r * 0.18} ${r * 0.2} z" fill="#e8f3ff" stroke="#9fc3e6" stroke-width="2"/>
</g>`;

// Hero still life: bars, coins, ring
const heroArt = (id = 'h') => `<svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Goldbarren, Goldmünzen und ein Goldring">${G(id)}
<ellipse cx="250" cy="318" rx="210" ry="22" fill="#000" fill-opacity=".08"/>
${bar(id, 110, 200, 200)}
${bar(id, 150, 140, 170)}
${coin(id, 380, 262, 52)}
${coin(id, 430, 300, 34)}
${ring(id, 92, 286, 52)}
</svg>`;

// Category icons (stroke style, inherit gold)
const icon = {
  schmuck: `<svg class="ico" viewBox="0 0 40 40"><ellipse cx="20" cy="25" rx="12" ry="6" fill="none" stroke="#b8892b" stroke-width="3.2"/><path d="M16 15l4-5 4 5-4 4z" fill="#f4ead2" stroke="#b8892b" stroke-width="2"/></svg>`,
  zahngold: `<svg class="ico" viewBox="0 0 40 40"><path d="M12 9c3-2 5 0 8 0s5-2 8 0c3 3 1 9 0 12-1 4-1 10-4 10-2 0-2-7-4-7s-2 7-4 7c-3 0-3-6-4-10-1-3-3-9 0-12z" fill="#f4ead2" stroke="#b8892b" stroke-width="2.4" stroke-linejoin="round"/><path d="M14 12c2-1 3 0 6 0" stroke="#d9a940" stroke-width="3" stroke-linecap="round"/></svg>`,
  muenzen: `<svg class="ico" viewBox="0 0 40 40"><circle cx="17" cy="21" r="11" fill="#f4ead2" stroke="#b8892b" stroke-width="2.6"/><circle cx="25" cy="17" r="11" fill="#f4ead2" stroke="#b8892b" stroke-width="2.6"/><circle cx="25" cy="17" r="7" fill="none" stroke="#d9a940" stroke-width="1.6"/></svg>`,
  barren: `<svg class="ico" viewBox="0 0 40 40"><path d="M10 14h20l5 10H5z" fill="#f4ead2" stroke="#b8892b" stroke-width="2.6" stroke-linejoin="round"/><path d="M5 24h30v5H5z" fill="#e2b453" stroke="#b8892b" stroke-width="2.6" stroke-linejoin="round"/></svg>`,
  silber: `<svg class="ico" viewBox="0 0 40 40"><path d="M14 6v10M18 6v10M22 6v10M14 16c0 3 8 3 8 0M18 18v16" fill="none" stroke="#8c9097" stroke-width="2.6" stroke-linecap="round"/><path d="M28 6c-4 3-4 11 0 12v16" fill="none" stroke="#8c9097" stroke-width="2.6" stroke-linecap="round"/></svg>`,
  frei: `<svg class="ico" viewBox="0 0 40 40"><circle cx="20" cy="20" r="14" fill="none" stroke="#b8892b" stroke-width="2.6"/><path d="M13 20.5l5 4.5 9-10" fill="none" stroke="#b8892b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  kurs: `<svg class="ico" viewBox="0 0 40 40"><path d="M6 30l9-9 6 5 13-14" fill="none" stroke="#b8892b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M27 12h7v7" fill="none" stroke="#b8892b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  schloss: `<svg class="ico" viewBox="0 0 40 40"><rect x="9" y="18" width="22" height="16" rx="3" fill="none" stroke="#b8892b" stroke-width="2.6"/><path d="M14 18v-5a6 6 0 0 1 12 0v5" fill="none" stroke="#b8892b" stroke-width="2.6"/></svg>`,
  waage: `<svg class="ico" viewBox="0 0 40 40"><path d="M20 7v26M10 33h20M8 13h24M8 13l-5 11h10zM32 13l-5 11h10z" fill="none" stroke="#b8892b" stroke-width="2.4" stroke-linejoin="round"/></svg>`
};

module.exports = { heroArt, icon };
