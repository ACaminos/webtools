import { Helmet } from 'react-helmet-async'
import { Link } from "react-router-dom"

export const Error404 = () => {
  return (
    <>
      <Helmet>
        <title>404 - Página no encontrada | WebTools</title>
        <meta name="description" content="La página que buscas no existe o ha sido movida." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="relative flex items-center min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 dark:opacity-20" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-brand-500/10 dark:bg-brand-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[100px]" />

      <div className="relative container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <div className="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <h2 className="mb-4 font-extrabold text-8xl md:text-9xl text-gradient">
            404
          </h2>
          <p className="text-gray-900 dark:text-white text-xl md:text-2xl font-semibold">Página no encontrada</p>
          <p className="mt-3 mb-8 text-gray-500 dark:text-gray-400">La página que buscas no existe o ha sido movida.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-xl bg-brand-600 text-white hover:bg-brand-500 transition-all duration-300 shadow-lg shadow-brand-600/25 hover:shadow-brand-500/40 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}
