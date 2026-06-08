import { Route, Routes } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { Layout } from './pages/Layout'
import { Error404 } from './pages/Error404'
import { Category } from './pages/Category';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { About } from './pages/About';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header/>
      <main className="flex-1 pt-16">
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer/>
      <SpeedInsights/>
      <Analytics/>
    </div>
  )
}

export default App
