import { Helmet } from 'react-helmet-async'
import { Link } from "react-router-dom"
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '../utils/seo'

export const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Términos y Condiciones - WebTools</title>
        <meta name="description" content="Términos y condiciones de uso de WebTools: uso del directorio, enlaces externos y propiedad intelectual." />
        <link rel="canonical" href={`${SITE_URL}/terminos`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="Términos y Condiciones - WebTools" />
        <meta property="og:description" content="Condiciones de uso de WebTools." />
        <meta property="og:url" content={`${SITE_URL}/terminos`} />
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

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Términos y Condiciones</h1>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-300">
          <p>Última actualización: septiembre de 2026</p>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">1. Qué es WebTools</h2>
            <p>WebTools es un directorio curado de herramientas y recursos gratuitos para desarrolladores frontend. El acceso al contenido es libre y no requiere registro.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">2. Enlaces externos</h2>
            <p>Las fichas enlazan a sitios de terceros. No controlamos su contenido, disponibilidad ni sus políticas de privacidad. El uso de esas herramientas se rige por los términos de cada proveedor.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">3. Propiedad intelectual</h2>
            <p>Los nombres, marcas e imágenes de vista previa pertenecen a sus respectivos dueños y se muestran con fines descriptivos. Si eres titular de un recurso y quieres modificar o retirar su ficha, escríbenos desde la página de <Link to="/contacto" className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300">Contacto</Link>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">4. Uso aceptable</h2>
            <p>No está permitido utilizar el sitio para actividades ilícitas, intentar vulnerar su seguridad o hacer un uso automatizado abusivo que degrade el servicio.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">5. Cambios</h2>
            <p>Podemos actualizar estos términos en cualquier momento. Los cambios se publicarán en esta página con su fecha de revisión.</p>
          </section>
        </div>
      </div>
    </div>
    </>
  )
}
