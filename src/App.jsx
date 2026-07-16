import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'

const Layout = lazy(() => import('./pages/Layout').then(m => ({ default: m.Layout })));
const Category = lazy(() => import('./pages/Category').then(m => ({ default: m.Category })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Error404 = lazy(() => import('./pages/Error404').then(m => ({ default: m.Error404 })));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header/>
      <main className="flex-1 pt-16">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path='/' element={<Layout />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>
      </main>
      <Footer/>
      <SpeedInsights/>
      <Analytics/>
    </div>
  )
}

export default App
