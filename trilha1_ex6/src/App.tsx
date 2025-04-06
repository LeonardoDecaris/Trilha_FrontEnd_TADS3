import './App.css'
import Gallery from './components/Gallery'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
