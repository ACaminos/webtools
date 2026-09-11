import { Helmet } from 'react-helmet-async'
import { Cards } from '../components/Cards'
import { MainHero } from '../components/MainHero'
import { StatsIcons } from '../components/StatsIcons'
import { AdUnit } from '../components/AdUnit'
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '../utils/seo'

export const Layout = () => {
  return (
    <>
      <Helmet>
        <title>WebTools - Herramientas gratuitas para desarrolladores frontend</title>
        <meta name="description" content="WebTools es una plataforma con más de 100 herramientas gratuitas para desarrolladores frontend: iconos, APIs, frameworks, animaciones, generadores UI, dashboards y mucho más." />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="WebTools - Herramientas para desarrolladores frontend" />
        <meta property="og:description" content="Más de 100 herramientas gratuitas para acelerar tu desarrollo web." />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WebTools - Herramientas para desarrolladores frontend" />
        <meta name="twitter:description" content="Más de 100 herramientas gratuitas para acelerar tu desarrollo web." />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebSite', name: SITE_NAME, url: SITE_URL })}</script>
      </Helmet>
      <MainHero />
      <StatsIcons/>
      <Cards/>
      <AdUnit />
    </>
  )
}
