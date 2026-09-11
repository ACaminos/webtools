import { Suspense, lazy, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/24/outline'
import categories from '../resources/categories'

const DesktopMenu = lazy(() => import('./DesktopMenu').then(m => ({ default: m.DesktopMenu })));
const MobileMenu = lazy(() => import('./MobileMenu').then(m => ({ default: m.MobileMenu })));

const categoryGroups = [
  {
    label: 'Recursos Gráficos',
    items: ['iconos', 'Banco de Imagenes', 'Animaciones', 'Spinners'],
  },
  {
    label: 'Desarrollo',
    items: ['Apis', 'DataTables', 'Json', 'Frameworks', 'Librerias', 'Componentes UI'],
  },
  {
    label: 'Utilidades',
    items: ['GitHub', 'Skeleton', 'Divisores secciones web', 'Dashboards', 'Deployment & Hosting', "Generadores de UI´s basados en AI", 'IA', 'Herramientas'],
  },
  {
    label: 'Otros',
    items: ['Recursos Varios', 'OpenSource'],
  },
]

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    try { localStorage.setItem('wt-theme', dark ? 'dark' : 'light'); } catch { void 0; }
  }, [dark]);

  const groupedTools = useMemo(() => {
    return categoryGroups.map((group) => ({
      ...group,
      tools: group.items
        .map((name) => categories.find((t) => t.category === name))
        .filter(Boolean),
    }))
  }, [])

  return (
    <header className="relative z-50">
      <div className="fixed inset-x-0 top-0 glass border-b border-gray-200/80 dark:border-white/5">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between py-4 px-6 xl:px-0">
          <div className="flex lg:flex-1">
            <Link to={'/'} className="-m-1.5 p-1.5 transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded">
              <span className="sr-only">WebTools</span>
              <picture>
                <source srcSet="/webtools-480.webp" type="image/webp" />
                <img alt="WebTools" src="/webtools-480.png" className="h-7 w-auto" width="480" height="67" fetchPriority="high" decoding="async" />
              </picture>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button type="button" onClick={() => setMobileMenuOpen(true)} aria-expanded={mobileMenuOpen} aria-controls="mobile-menu" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-colors">
              <span className="sr-only">Abrir menú</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <Suspense fallback={null}>
            <DesktopMenu groupedTools={groupedTools} />
          </Suspense>

          <div className="hidden lg:flex lg:items-center lg:gap-x-5">
            <Link to={"/favoritos"} aria-label="Mis favoritos" className="text-sm font-medium leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              <span aria-hidden="true">☆</span>
            </Link>

            <button type="button" onClick={() => setDark((d) => !d)} aria-pressed={dark} aria-label={dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'} className="text-sm font-medium leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              <span aria-hidden="true">{dark ? '☀' : '☾'}</span>
            </button>

            <a href="https://github.com/ACaminos/webtools" target="_blank" rel="noopener noreferrer" aria-label="GitHub de WebTools" className="text-sm font-medium leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              <i aria-hidden="true" className="fa-brands fa-github fa-lg"></i>
            </a>
          </div>
        </nav>
      </div>

      {mobileMenuOpen && (
        <Suspense fallback={null}>
          <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} groupedTools={groupedTools} />
        </Suspense>
      )}
    </header>
  )
}
