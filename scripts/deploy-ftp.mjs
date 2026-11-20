// Upload site/ to ChemiCloud over FTPS (explicit TLS, certificate verified). Same approach as wohin-mit.de.
// Mirrors the build to the FTP root: uploads new/changed files (hash manifest), deletes remote files that no
// longer exist locally, and never touches the protected paths below – above all the live price cache that
// api/price.php writes on the server. Env: FTP_HOST, FTP_USER, FTP_PASSWORD.
import { readdirSync, statSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { Writable, Readable } from 'node:stream';
import { join, posix } from 'node:path';

export const SRC = 'site';
export const MANIFEST = '.deploy-manifest.json';
// Server-side files: written by PHP or created by the host. Never uploaded, never deleted.
export const SERVER_ONLY = [
  /^data\/price\.json$/, /^data\/price-state\.json$/, /^data\/price-history\.json$/, /^data\/price\.lock$/, /^data\/.*\.tmp$/,
  /^\.well-known(\/|$)/, /^cgi-bin(\/|$)/, /^\.ftpquota$/, /^\.deploy-manifest\.json$/, /^error_log$/, /(^|\/)error_log$/
];
// The key file may be uploaded (written by CI from a secret), but is never deleted when absent locally.
export const KEEP = [/^api\/config\.php$/];
const match = (list, rel) => list.some((re) => re.test(rel));
export const isServerOnly = (rel) => match(SERVER_ONLY, rel);

export function toDelete(remoteFiles, localFiles) {
  const local = new Set(localFiles);
  return remoteFiles.filter((f) => !local.has(f) && !isServerOnly(f) && !match(KEEP, f));
}

export function toUpload(hashes, manifest) {
  return Object.keys(hashes).filter((f) => !isServerOnly(f) && (!manifest || manifest[f] !== hashes[f]));
}

export function localFiles(dir, base = '') {
  const out = [];
  for (const name of readdirSync(dir)) {
    const abs = join(dir, name), rel = base ? `${base}/${name}` : name;
    if (statSync(abs).isDirectory()) out.push(...localFiles(abs, rel)); else out.push(rel);
  }
  return out;
}

const sha1 = (p) => createHash('sha1').update(readFileSync(p)).digest('hex');

async function remoteFiles(client, dir = '') {
  const out = [];
  for (const e of await client.list(dir || '.')) {
    if (e.name === '.' || e.name === '..') continue;
    const rel = dir ? `${dir}/${e.name}` : e.name;
    if (isServerOnly(rel)) continue;
    if (e.isDirectory) out.push(...await remoteFiles(client, rel)); else out.push(rel);
  }
  return out;
}

async function deploy() {
  const { Client } = await import('basic-ftp');
  const { FTP_HOST, FTP_USER, FTP_PASSWORD } = process.env;
  if (!FTP_HOST || !FTP_USER || !FTP_PASSWORD) throw new Error('FTP_HOST/FTP_USER/FTP_PASSWORD fehlen');
  const client = new Client(60000);
  try {
    await client.access({ host: FTP_HOST, user: FTP_USER, password: FTP_PASSWORD, secure: true });
    const files = localFiles(SRC).filter((f) => !isServerOnly(f));
    const dirs = [...new Set(files.map((f) => posix.dirname(f)).filter((d) => d !== '.'))].sort();
    for (const d of dirs) { await client.cd('/'); await client.ensureDir(d); }
    await client.cd('/');
    const hashes = Object.fromEntries(files.map((f) => [f, sha1(join(SRC, f))]));
    let manifest = null;
    try {
      const chunks = [];
      await client.downloadTo(new Writable({ write(c, _e, cb) { chunks.push(c); cb(); } }), MANIFEST);
      manifest = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    } catch { console.log('Keine Prüfsummenliste auf dem Server: alles hochladen'); }
    const todo = toUpload(hashes, manifest);
    for (const f of todo) await client.uploadFrom(join(SRC, f), f);
    console.log(`${todo.length} von ${files.length} Dateien hochgeladen (geändert oder neu)`);
    const del = toDelete(await remoteFiles(client), files);
    for (const f of del) await client.remove(f);
    console.log(`${del.length} veraltete Dateien gelöscht`);
    await client.uploadFrom(Readable.from([JSON.stringify(hashes)]), MANIFEST);
  } finally {
    client.close();
  }
}

if (process.argv[1]?.endsWith('deploy-ftp.mjs')) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try { await deploy(); process.exit(0); } catch (e) {
      console.log(`::warning::FTP-Upload Versuch ${attempt} fehlgeschlagen: ${e.message}`);
      if (attempt < 3) await new Promise((r) => setTimeout(r, 60000));
    }
  }
  console.log('::error::FTP-Upload nach 3 Versuchen fehlgeschlagen');
  process.exit(1);
}
