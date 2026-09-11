import fs from 'fs';
import path from 'path';
const dir = 'dist/assets';
let total = 0;
for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.js')) continue;
  const s = fs.readFileSync(path.join(dir, f), 'utf8');
  if (s.includes('headlessui') || s.includes('PopoverPanel') || s.includes('Disclosure')) {
    const kb = Math.round(fs.statSync(path.join(dir, f)).size / 1024);
    total += kb;
    console.log(f, kb + 'KB');
  }
}
console.log('headlessui total JS:', total + 'KB');
