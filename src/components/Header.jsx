import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import tools from '../resources/tools'

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
    items: ['GitHub', 'Skeleton', 'Divisores secciones web', 'Dashboards', 'Deployment & Hosting', "Generadores de UI\u00b4s basados en AI", 'IA', 'Herramientas'],
  },
  {
    label: 'Otros',
    items: ['Recursos Varios'],
  },
]

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const groupedTools = useMemo(() => {
    return categoryGroups.map((group) => ({
      ...group,
      tools: group.items
        .map((name) => tools.find((t) => t.category === name))
        .filter(Boolean),
    }))
  }, [])

  return (
    <header className="relative z-50">
      <div className="fixed inset-x-0 top-0 glass border-b border-gray-200/80 dark:border-white/5">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between py-4 px-6 xl:px-0">
          <div className="flex lg:flex-1">
            <Link to={'/'} className="-m-1.5 p-1.5 transition-opacity hover:opacity-80">
              <span className="sr-only">WebTools</span>
              <img alt="WebTools" src="/webtools.png" className='h-7 pt-1'/>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-colors">
              <span className="sr-only">Abrir menú</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <PopoverGroup className="hidden lg:flex lg:gap-x-8 lg:items-center">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm font-medium leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                Categorías
                <ChevronDownIcon aria-hidden="true" className="h-4 w-4 flex-none text-gray-400 dark:text-gray-500 transition-colors" />
              </PopoverButton>

              <PopoverPanel transition className="absolute left-1/2 -translate-x-1/2 top-full z-10 mt-3 w-[90vw] max-w-[50rem] lg:max-w-[42rem] xl:max-w-[50rem] overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 dark:shadow-2xl dark:ring-1 dark:ring-white/10 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in bg-white dark:bg-surface-light/95 border border-gray-200/80 dark:border-white/5">
                <div className="grid grid-cols-2 xl:grid-cols-3 gap-px bg-gray-100 dark:bg-white/5">
                  {groupedTools.map((group) => (
                    <div key={group.label} className="bg-white dark:bg-surface-light/95 p-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2 px-3">
                        {group.label}
                      </p>
                      <div className="space-y-0.5">
                        {group.tools.map((tool) => (
                          <Link
                            to={`/category/${tool.category}`}
                            key={tool.category}
                            className="group flex items-center gap-x-3 rounded-xl px-3 py-2 text-sm leading-5 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all duration-200"
                          >
                            <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-brand-50 text-brand-600 group-hover:bg-brand-100 group-hover:text-brand-700 dark:bg-brand-500/10 dark:text-brand-400 dark:group-hover:bg-brand-500/20 dark:group-hover:text-brand-300 transition-all duration-200">
                              <i className={`${tool.icon} text-xs`}></i>
                            </div>
                            <span className="font-medium text-gray-700 group-hover:text-brand-700 dark:text-gray-200 dark:group-hover:text-white transition-colors">
                              {tool.category}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <Link to={"/privacy-policy"} className="text-sm font-medium leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Privacidad
            </Link>

            <Link to={"/about"} className="text-sm font-medium leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Sobre mi
            </Link>

            <a href="https://github.com/ACaminos/webtools" target="_blank" rel="noopener noreferrer" className="text-sm font-medium leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              <i className="fa-brands fa-github fa-lg"></i>
            </a>

          </PopoverGroup>
        </nav>
      </div>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10 bg-black/20 dark:bg-black/40 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto px-6 py-6 sm:max-w-sm bg-white dark:bg-surface/95 border-l border-gray-200/80 dark:border-white/5">
          <div className="flex items-center justify-between">
            <Link to={'/'} className="-m-1.5 p-1.5">
              <span className="sr-only">WebTools</span>
              <img alt="WebTools" src="/webtools.png" className='h-8'/>
            </Link>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-colors">
              <span className="sr-only">Cerrar menú</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200 dark:divide-white/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-700 hover:text-brand-700 hover:bg-brand-50 dark:text-gray-200 dark:hover:text-white dark:hover:bg-brand-500/10 transition-colors">
                    Categorías
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400 dark:text-gray-500 group-data-[open]:rotate-180 transition-transform" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-4 space-y-4">
                    {groupedTools.map((group) => (
                      <div key={group.label}>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 px-3 mb-1">
                          {group.label}
                        </p>
                        <div className="space-y-0.5">
                          {group.tools.map((tool) => (
                            <Link
                              to={`/category/${tool.category}`}
                              target='_top'
                              key={tool.category}
                              className="group flex items-center gap-x-4 rounded-xl p-3 text-sm leading-6 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all duration-200"
                            >
                              <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                                <i className={tool.icon}></i>
                              </div>
                              <div className="flex-auto">
                                <span className="block font-medium text-gray-700 group-hover:text-brand-700 dark:text-gray-300 dark:group-hover:text-white transition-colors">{tool.category}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link to={"/privacy-policy"} className="group flex w-full items-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-700 hover:text-brand-700 hover:bg-brand-50 dark:text-gray-200 dark:hover:text-white dark:hover:bg-brand-500/10 transition-colors">
                  Privacidad
                </Link>
                <Link to={"/about"} className="group flex w-full items-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-700 hover:text-brand-700 hover:bg-brand-50 dark:text-gray-200 dark:hover:text-white dark:hover:bg-brand-500/10 transition-colors">
                  Sobre mi
                </Link>
                <a href="https://github.com/ACaminos/webtools" target="_blank" rel="noopener noreferrer" className="group flex w-full items-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-700 hover:text-brand-700 hover:bg-brand-50 dark:text-gray-200 dark:hover:text-white dark:hover:bg-brand-500/10 transition-colors">
                  <i className="fa-brands fa-github fa-lg mr-3"></i>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
