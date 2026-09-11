# WebTools

Directorio curado de herramientas gratuitas para desarrolladores frontend, con **React 18, Vite, React Router, Tailwind CSS y Font Awesome**. Incluye buscador, favoritos, modo oscuro y páginas optimizadas para SEO.

## 🚀 Tecnologías

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) (rutas `/`, `/category/:slug`, `/contacto`, `/terminos`, `/favoritos`)
- [Tailwind CSS](https://tailwindcss.com/), [Headless UI](https://headlessui.com/), [Heroicons](https://heroicons.com/)
- [Font Awesome](https://fontawesome.com/) (subset solid/regular/brands)
- [react-helmet-async](https://github.com/staylor/react-helmet-async) (SEO por página)
- [Vercel Analytics](https://vercel.com/analytics) + Speed Insights

## 📌 Funcionalidades

- 20 categorías con URLs limpias (`/category/banco-de-imagenes`) y redirect legacy
- Buscador global (`?q=`) + orden (`?sort=`) + paginación (`?page=`) compartibles
- Favoritos en `localStorage` + página `/favoritos`
- Guías editoriales con FAQ e `ItemList` JSON-LD por categoría
- Modo oscuro con memoria, sitemap con `lastmod`, `ads.txt`, `robots.txt`

## 📂 Instalación y ejecución

```bash
git clone https://github.com/ACaminos/webtools.git
cd webtools
npm install
npm run dev
```

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Genera `sitemap.xml` (`prebuild`) y compila |
| `npm run lint` | ESLint (incluye `scripts/` y `tests/`, `no-eval`) |
| `npm run test` | Tests `node:test` (`slug`, `tools-lib`) |
| `npm run preview` | Vista previa del build |
| `npm run new` / `edit` / `delete` | Alta, edición y baja de recursos en `src/resources/tools.js` |

## 🛠️ Gestión de recursos

Los scripts usan `scripts/tools-lib.js`: carga segura sin `eval`, validación de URLs, detección de duplicados, backup `.bak` y escritura atómica. El esquema está en `src/resources/tools.schema.json`.

- `src/resources/tools.js`: fuente de verdad (categorías + productos)
- `src/resources/categories.js`: metadata liviana para el home y el menú
- `src/resources/editorial.js`: intros y FAQs por categoría
- `src/utils/slug.js` / `src/utils/seo.js`: slugs y constantes SEO (`SITE_URL`)

## 💰 AdSense

- `public/ads.txt` con el ID `pub-1247847789104095` (se publica en `/ads.txt`)
- Páginas `/about`, `/contacto`, `/terminos` y `/privacy-policy` (con opt-out de anuncios)
- Pendiente: banner de consentimiento de cookies (CMP) antes de activar anuncios en UE
