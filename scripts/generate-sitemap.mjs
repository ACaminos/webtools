import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

const tools = (await import('../src/resources/tools.js')).default

const SITE_URL = 'https://webtools.vercel.app'

const staticRoutes = [
  { loc: '', priority: '1.0', changefreq: 'weekly' },
  { loc: '/about', priority: '0.7', changefreq: 'monthly' },
  { loc: '/privacy-policy', priority: '0.5', changefreq: 'monthly' },
]

const categoryRoutes = tools.map(t => ({
  loc: `/category/${encodeURIComponent(t.category.toLowerCase())}`,
  priority: '0.8',
  changefreq: 'weekly',
}))

const allRoutes = [...staticRoutes, ...categoryRoutes]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(r => `  <url>
    <loc>${SITE_URL}${r.loc}</loc>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`

fs.writeFileSync(path.join(root, 'public', 'sitemap.xml'), sitemap, 'utf-8')
console.log(`✓ sitemap.xml generado con ${allRoutes.length} rutas`)
