import fs from 'fs';
for (const f of ['public/webtools.png', 'public/webtools-480.webp', 'public/webtools-480.png', 'public/favicon-32x32.png', 'public/apple-touch-icon.png']) {
  try {
    const b = fs.readFileSync(f);
    const isWebp = f.endsWith('.webp');
    const dim = isWebp ? 'webp' : b.readUInt32BE(16) + 'x' + b.readUInt32BE(20);
    console.log(f, dim, Math.round(b.length / 1024) + 'KB');
  } catch (e) { console.log(f, 'falta'); }
}
try { (await import('sharp')).default; console.log('sharp OK'); } catch { console.log('no sharp'); }
