export const MainHero = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20">
      <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-40" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-500/10 dark:bg-brand-600/20 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />

      <div className="relative container mx-auto flex flex-col items-center px-4 text-center md:px-10 lg:px-32 xl:max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-brand-600 dark:text-brand-300 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse-glow" />
          Tu colección de herramientas para desarrolladores
        </div>

        <h1 className="text-gray-900 dark:text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight animate-slide-up">
          Build Faster with&nbsp;
          <span className="text-gradient">WebTools</span>
        </h1>

        <p className="text-gray-500 dark:text-gray-400 px-8 mt-6 mb-10 text-lg md:text-xl max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Acelerá tus proyectos con una colección de herramientas de desarrollo web, recursos gratuitos y utilidades para programadores frontend
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <a href="#categories" className="px-8 py-3 text-lg font-semibold rounded-xl bg-brand-600 text-white hover:bg-brand-500 transition-all duration-300 shadow-lg shadow-brand-600/25 hover:shadow-brand-500/40 hover:-translate-y-0.5">
            Explorar herramientas
          </a>
          <a href="https://github.com/ACaminos/webtools" className="px-8 py-3 text-lg font-semibold rounded-xl glass glass-hover text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
