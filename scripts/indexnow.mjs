// Notify Bing and other IndexNow engines (used by ChatGPT/Copilot search via Bing) about the sitemap URLs.
// Runs after the deploy. Key file: site/<32 hex>.txt containing the key itself (served at https://dergoldrechner.de/<key>.txt).
import { readFile, readdir } from 'node:fs/promises';

const HOST = 'dergoldrechner.de';
const keyFile = (await readdir('site')).find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) { console.log('Kein IndexNow-Schlüssel, übersprungen'); process.exit(0); }
const key = keyFile.replace('.txt', '');
const xml = await readFile('site/sitemap.xml', 'utf8');
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
try {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${keyFile}`, urlList: urls })
  });
  console.log(`IndexNow: ${urls.length} URLs gemeldet, HTTP ${res.status}`);
} catch (e) {
  console.log(`::warning::IndexNow nicht erreichbar: ${e.message}`); // never fail the deploy for this
}
