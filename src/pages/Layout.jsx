import { Cards } from '../components/Cards'
import { MainHero } from '../components/MainHero'
import { StatsIcons } from '../components/StatsIcons'
import { AdUnit } from '../components/AdUnit'

export const Layout = () => {
  return (
    <>
      <MainHero />
      <StatsIcons/>
      <Cards/>
      <AdUnit />
    </>
  )
}
