import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Novidades from "./pages/Novidades";
import Feminino from "./pages/Feminino";
import Masculino from "./pages/Masculino";
import Atendimento from "./pages/Atendimento";
import Navbar from "../src/components/NavBar";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novidades" element={<Novidades />} />
          <Route path="/feminino" element={<Feminino />} />
          <Route path="/masculino" element={<Masculino />} />
          <Route path="/atendimento" element={<Atendimento />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
