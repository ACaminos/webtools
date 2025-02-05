// React Router Dom
import { Route, Routes } from "react-router-dom";

// Styles
import './App.css'

// Components
import { Footer } from './components/Footer'
import { Header } from './components/Header'

// Pages
import { Layout } from './pages/Layout'
import { Error404 } from './pages/Error404'
import { Category } from './pages/Category';

//Speed Insights & Analitycs from Vercel
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

function App() {

  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={ <Layout/> } />
        <Route path="/category/:category" element={ <Category/> } />
        <Route path="*" element={ <Error404 /> } />
      </Routes>

      <Footer/>
      <SpeedInsights/>
      <Analytics/>
    </>
  )
}

export default App
