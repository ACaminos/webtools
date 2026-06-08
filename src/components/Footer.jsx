export const Footer = () => {
  return (
    <footer className="relative border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-surface-dark/50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img alt="WebTools" src="/webtools.png" className='h-7'/>
            <span className="text-sm text-gray-400 dark:text-gray-500">WebTools</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400 dark:text-gray-500">
            <a href="/privacy-policy" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Privacidad</a>
            <a href="/about" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Sobre mí</a>
          </div>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} WebTools. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/ACaminos/webtools" className="text-gray-400 hover:text-brand-600 dark:text-gray-500 dark:hover:text-brand-400 transition-colors" aria-label="GitHub">
              <i className="fa-brands fa-github fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
