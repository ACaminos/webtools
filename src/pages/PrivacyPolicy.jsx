import { Helmet } from 'react-helmet-async'
import { Link } from "react-router-dom"

export const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad - WebTools</title>
        <meta name="description" content="Política de privacidad de WebTools. Información sobre cookies, Google AdSense y el uso de datos." />
        <meta property="og:title" content="Política de Privacidad - WebTools" />
        <meta property="og:url" content="https://webtools.vercel.app/privacy-policy" />
      </Helmet>
      <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors">
            &larr; Volver al inicio
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Política de Privacidad</h1>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-300">
          <p>Última actualización: 2024</p>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">1. Introducción</h2>
            <p>En WebTools, tu privacidad es muy importante para nosotros. Esta política describe cómo recopilamos, usamos y protegemos tu información cuando utilizas nuestro sitio web.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">2. Datos que recopilamos</h2>
            <p>WebTools es un directorio de recursos y herramientas para desarrolladores. No recopilamos información personal de nuestros usuarios ni requerimos registro para acceder al contenido.</p>
            <p className="mt-2">Podemos recopilar datos de uso anónimos a través de:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Google Analytics / Vercel Analytics (datos de navegación anónimos)</li>
              <li>Google AdSense (cookies para publicidad contextual)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">3. Cookies</h2>
            <p>Utilizamos cookies para mejorar tu experiencia de navegación y mostrar publicidad relevante. Puedes configurar tu navegador para rechazar todas las cookies o para indicar cuando se está enviando una cookie.</p>
            <p className="mt-2">Las cookies que utilizamos incluyen:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Cookies técnicas:</strong> necesarias para el funcionamiento del sitio</li>
              <li><strong>Cookies de personalización:</strong> recuerdan tus preferencias (tema oscuro/claro)</li>
              <li><strong>Cookies publicitarias:</strong> utilizadas por Google AdSense para mostrar anuncios relevantes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">4. Publicidad con Google AdSense</h2>
            <p>Utilizamos Google AdSense para mostrar anuncios en nuestro sitio. Google AdSense utiliza cookies para servir anuncios basados en visitas anteriores a este sitio web u otros sitios.</p>
            <p className="mt-2">Puedes obtener más información sobre las prácticas de privacidad de Google en: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300">https://policies.google.com/privacy</a></p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">5. Enlaces de terceros</h2>
            <p>Nuestro sitio contiene enlaces a herramientas y recursos externos. No somos responsables de las prácticas de privacidad de estos sitios web. Recomendamos leer las políticas de privacidad de cada sitio que visites.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">6. Cambios en esta política</h2>
            <p>Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Los cambios se publicarán en esta página con una fecha de actualización revisada.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">7. Contacto</h2>
            <p>Si tienes preguntas sobre esta política de privacidad, puedes contactarnos a través de la página de <Link to="/about" className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300">Acerca de</Link>.</p>
          </section>
        </div>
      </div>
    </div>
    </>
  )
}
