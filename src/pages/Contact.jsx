import { Helmet } from 'react-helmet-async'
import { Link } from "react-router-dom"
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '../utils/seo'

export const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contacto - WebTools</title>
        <meta name="description" content="Contacta con WebTools: sugiere herramientas, reporta enlaces rotos o consulta sobre privacidad." />
        <link rel="canonical" href={`${SITE_URL}/contacto`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="Contacto - WebTools" />
        <meta property="og:description" content="Sugiere herramientas, reporta enlaces rotos o consulta sobre privacidad." />
        <meta property="og:url" content={`${SITE_URL}/contacto`} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors">
            &larr; Volver al inicio
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Contacto</h1>

        <div className="space-y-8 text-gray-600 dark:text-gray-300">
          <section className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">¿Sobre qué quieres escribir?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Sugerir una herramienta:</strong> nombre, URL y por qué debería estar en el directorio.</li>
              <li><strong>Reportar un enlace roto:</strong> indica la categoría y la herramienta afectada.</li>
              <li><strong>Privacidad o contenido:</strong> consultas sobre datos, cookies o una ficha publicada.</li>
            </ul>
          </section>

          <section className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Cómo contactarnos</h2>
            <p>La vía oficial de contacto es GitHub. Reviso los mensajes personalmente y suelo responder en 48-72 horas hábiles.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://github.com/ACaminos/webtools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl glass glass-hover text-gray-700 dark:text-gray-200 transition-all duration-300"
              >
                <i aria-hidden="true" className="fa-brands fa-github fa-lg"></i>
                Ver código fuente
              </a>
              <a
                href="https://github.com/ACaminos/webtools/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl bg-brand-600 text-white hover:bg-brand-500 transition-all duration-300"
              >
                Abrir un issue
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
    </>
  )
}
