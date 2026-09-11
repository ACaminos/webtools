import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'

const Layout = lazy(() => import('./pages/Layout').then(m => ({ default: m.Layout })));
const Category = lazy(() => import('./pages/Category').then(m => ({ default: m.Category })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Terms = lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })));
const Favorites = lazy(() => import('./pages/Favorites').then(m => ({ default: m.Favorites })));
const Error404 = lazy(() => import('./pages/Error404').then(m => ({ default: m.Error404 })));
const VercelMetrics = lazy(() => import('./components/VercelMetrics').then(m => ({ default: m.VercelMetrics })));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[50vh]" role="status" aria-live="polite" aria-label="Cargando página">
    <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [metricsReady, setMetricsReady] = useState(false);
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(() => setMetricsReady(true), { timeout: 3000 });
      return () => cancelIdleCallback(id);
    }
    const t = setTimeout(() => setMetricsReady(true), 3000);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header/>
      <main className="flex-1 pt-16">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path='/' element={<Layout />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/favoritos" element={<Favorites />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/terminos" element={<Terms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>
      </main>
      <Footer/>
      {metricsReady && (
        <Suspense fallback={null}>
          <VercelMetrics />
        </Suspense>
      )}
    </div>
  )
}

export default App
