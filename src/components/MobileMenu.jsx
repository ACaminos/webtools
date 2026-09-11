import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { getCategorySlug } from '../utils/slug'

export const MobileMenu = ({ open, onClose, groupedTools }) => (
  <Dialog open={open} onClose={onClose} className="lg:hidden">
    <div className="fixed inset-0 z-10 bg-black/20 dark:bg-black/40 backdrop-blur-sm" />
    <DialogPanel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto px-6 py-6 sm:max-w-sm bg-white dark:bg-surface/95 border-l border-gray-200/80 dark:border-white/5">
      <div className="flex items-center justify-between">
        <Link to={'/'} className="-m-1.5 p-1.5" onClick={onClose}>
          <span className="sr-only">WebTools</span>
          <picture>
            <source srcSet="/webtools-480.webp" type="image/webp" />
            <img alt="WebTools" src="/webtools-480.png" className='h-8 w-auto' width="480" height="67" decoding="async" />
          </picture>
        </Link>
        <button type="button" onClick={onClose} className="-m-2.5 rounded-md p-2.5 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-colors">
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
                          to={`/category/${getCategorySlug(tool.category)}`}
                          target='_top'
                          key={tool.category}
                          onClick={onClose}
                          className="group flex items-center gap-x-4 rounded-xl p-3 text-sm leading-6 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all duration-200"
                        >
                          <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                            <i aria-hidden="true" className={tool.icon}></i>
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
            <Link to={"/privacy-policy"} onClick={onClose} className="group flex w-full items-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-700 hover:text-brand-700 hover:bg-brand-50 dark:text-gray-200 dark:hover:text-white dark:hover:bg-brand-500/10 transition-colors">
              Privacidad
            </Link>
            <Link to={"/about"} onClick={onClose} className="group flex w-full items-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-700 hover:text-brand-700 hover:bg-brand-50 dark:text-gray-200 dark:hover:text-white dark:hover:bg-brand-500/10 transition-colors">
              Sobre mi
            </Link>
            <Link to={"/contacto"} onClick={onClose} className="group flex w-full items-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-700 hover:text-brand-700 hover:bg-brand-50 dark:text-gray-200 dark:hover:text-white dark:hover:bg-brand-500/10 transition-colors">
              Contacto
            </Link>
            <Link to={"/favoritos"} onClick={onClose} className="group flex w-full items-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-700 hover:text-brand-700 hover:bg-brand-50 dark:text-gray-200 dark:hover:text-white dark:hover:bg-brand-500/10 transition-colors">
              ☆ Favoritos
            </Link>
            <a href="https://github.com/ACaminos/webtools" target="_blank" rel="noopener noreferrer" className="group flex w-full items-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-700 hover:text-brand-700 hover:bg-brand-50 dark:text-gray-200 dark:hover:text-white dark:hover:bg-brand-500/10 transition-colors">
              <i aria-hidden="true" className="fa-brands fa-github fa-lg mr-3"></i>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
);

MobileMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  groupedTools: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    tools: PropTypes.array.isRequired,
  })).isRequired,
};
