import fs from 'fs';
import path from 'path';
const hits = [];
const walk = (d) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) { if (!['node_modules', 'dist', '.git'].includes(e.name)) walk(p); }
    else if (/\.(jsx|js|html|css)$/.test(e.name)) {
      const s = fs.readFileSync(p, 'utf8');
      if (s.includes('pageHero')) hits.push(p);
    }
  }
};
walk('src');
console.log(fs.readFileSync('index.html', 'utf8').includes('pageHero') ? 'index.html' : 'index sin pageHero');
console.log(hits.length ? hits.join('\n') : 'pageHero sin usos');
