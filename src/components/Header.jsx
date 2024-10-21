import { useState } from 'react'

//React Router Dom
import { Link } from 'react-router-dom'

//Icons
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { ToogleTheme } from '../components/ToogleTheme'

// Components
import tools from '../resources/tools'

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between py-6 px-6 xl:px-0">
        <div className="flex lg:flex-1">
          <Link to={'/'} className="-m-1.5 p-1.5">
            <span className="sr-only text-white">WebTools</span>
            <img alt="" src="/webtools.png" className='h-8'/>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button type="button" onClick={ () => setMobileMenuOpen( true ) } className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Categorias
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel transition className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in" style={ { backgroundColor: '#1f1f1f', border:'1px solid rgb(20, 48, 63)'} }>
              <div className="p-4">
                { tools.map( ( tool, index ) => (
                  <Link to={ `/category/${tool.category}` } key={ index } className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-cyan-950">
                    <div className="flex h-10 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <i className={tool.icon}></i>
                    </div>
                    <div className="flex-auto">
                      <span className="block font-semibold text-gray-100">{ tool.category }<span className="absolute inset-0" /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link to={"https://github.com/ACaminos/webtools"} className="text-sm font-semibold leading-6 text-white"><i className="fa-brands fa-github fa-lg"></i></Link>

        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" style={ { backgroundColor: '#1f1f1f'} }>
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto"/>
            </a>
            <button type="button" onClick={ () => setMobileMenuOpen( false ) } className="-m-2.5 rounded-md p-2.5 text-gray-100">
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-100 hover:bg-cyan-950">
                    Categorias
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    { tools.map( ( tool, index ) => (
                    <Link to={ `/category/${tool.category}` } target='_top' key={ index } className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-cyan-950">
                        <div className="flex h-10 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <i className={tool.icon}></i>
                        </div>
                        <div className="flex-auto">
                          <span className="block font-semibold text-gray-100">{ tool.category }<span className="absolute inset-0" /></span>
                        </div>
                    </Link>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-100 hover:bg-cyan-950">
                    <span>Documentación <Link to={"https://github.com/ACaminos/webtools"} className="text-sm font-semibold leading-6"><i class="ml-5 fa-brands fa-github fa-lg"></i></Link></span>
                  </DisclosureButton>
                </Disclosure>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}