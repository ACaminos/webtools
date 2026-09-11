import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { getCategorySlug } from '../utils/slug'

export const DesktopMenu = ({ groupedTools }) => (
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
                    to={`/category/${getCategorySlug(tool.category)}`}
                    key={tool.category}
                    className="group flex items-center gap-x-3 rounded-xl px-3 py-2 text-sm leading-5 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all duration-200"
                  >
                    <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-brand-50 text-brand-600 group-hover:bg-brand-100 group-hover:text-brand-700 dark:bg-brand-500/10 dark:text-brand-400 dark:group-hover:bg-brand-500/20 dark:group-hover:text-brand-300 transition-all duration-200">
                      <i aria-hidden="true" className={`${tool.icon} text-xs`}></i>
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

    <Link to={"/contacto"} className="text-sm font-medium leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
      Contacto
    </Link>
  </PopoverGroup>
);

DesktopMenu.propTypes = {
  groupedTools: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    tools: PropTypes.array.isRequired,
  })).isRequired,
};
