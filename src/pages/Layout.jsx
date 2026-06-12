import { Helmet } from 'react-helmet-async'
import { Cards } from '../components/Cards'
import { MainHero } from '../components/MainHero'
import { StatsIcons } from '../components/StatsIcons'
import { AdUnit } from '../components/AdUnit'

export const Layout = () => {
  return (
    <>
      <Helmet>
        <title>WebTools - Herramientas gratuitas para desarrolladores frontend</title>
        <meta name="description" content="WebTools es una plataforma con más de 100 herramientas gratuitas para desarrolladores frontend: iconos, APIs, frameworks, animaciones, generadores UI, dashboards y mucho más." />
        <meta property="og:title" content="WebTools - Herramientas para desarrolladores frontend" />
        <meta property="og:description" content="Más de 100 herramientas gratuitas para acelerar tu desarrollo web." />
        <meta property="og:url" content="https://webtools.vercel.app" />
        <meta property="og:image" content="https://webtools.vercel.app/webtools.png" />
      </Helmet>
      <MainHero />
      <StatsIcons/>
      <Cards/>
      <AdUnit />
    </>
  )
}
