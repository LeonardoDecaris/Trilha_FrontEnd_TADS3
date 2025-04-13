import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Animal from "./pages/Animal";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animal/:name" element={<Animal />} />
      </Routes>
    </Router>
  );
}

export default App;
