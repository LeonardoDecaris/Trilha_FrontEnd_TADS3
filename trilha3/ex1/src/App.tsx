import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Header";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;