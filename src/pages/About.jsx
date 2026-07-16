import { Helmet } from 'react-helmet-async'
import { Link } from "react-router-dom"

export const About = () => {
  return (
    <>
      <Helmet>
        <title>Acerca de - WebTools | Herramientas para desarrolladores</title>
        <meta name="description" content="WebTools es una colección curada de más de 100 herramientas gratuitas para desarrolladores frontend." />
        <meta property="og:title" content="Acerca de WebTools" />
        <meta property="og:description" content="Conoce WebTools, la plataforma con herramientas gratuitas para desarrolladores frontend." />
        <meta property="og:url" content="https://webtools.vercel.app/about" />
        <meta property="og:image" content="https://webtools.vercel.app/webtools.png" />
      </Helmet>
      <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors">
            &larr; Volver al inicio
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Acerca de WebTools</h1>

        <div className="space-y-8 text-gray-600 dark:text-gray-300">
          <section className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">¿Qué es WebTools?</h2>
            <p>WebTools es una colección curada de herramientas y recursos gratuitos para desarrolladores frontend. El objetivo es proporcionar un punto de partida rápido para encontrar iconos, APIs, frameworks, librerías, generadores de UI y mucho más.</p>
          </section>

          <section className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Categorías</h2>
            <p>WebTools cuenta actualmente con más de 100 herramientas organizadas en 19 categorías:</p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
              {["Iconos", "Banco de Imágenes", "Spinners", "GitHub", "APIs", "DataTables", "Dashboards", "Skeleton", "Divisores", "JSON", "Animaciones", "Librerías", "IA", "Frameworks", "Deployment", "Generadores UI", "Componentes UI", "Herramientas", "Recursos Varios"].map((cat) => (
                <li key={cat} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                  {cat}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contacto</h2>
            <p>Si tienes sugerencias, encuentras un enlace roto o quieres recomendar una herramienta, puedes abrir un issue en GitHub:</p>
            <div className="mt-4">
              <a
                href="https://github.com/ACaminos/webtools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl bg-brand-600 text-white hover:bg-brand-500 transition-all duration-300"
              >
                <i className="fa-brands fa-github fa-lg"></i>
                GitHub
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
    </>
  )
}
