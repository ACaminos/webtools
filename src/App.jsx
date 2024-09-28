// React Router Dom
import { Route, Routes } from "react-router-dom";

// Styles
import './App.css'

// Components
import { Footer } from './components/Footer'
import { Header } from './components/Header'

// Pages
import { Error404 } from './pages/Error404'
import { Layout } from './pages/Layout'

function App() {

  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={ <Layout/> }/>
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
