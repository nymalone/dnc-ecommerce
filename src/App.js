//TODO: explicar arquitetura de páginas - criar folders  - notion
//TODO: fazer o app.js
//TODO: explicar Router - notion
//TODO: criar as rotas e as páginas básicas.
//TODO: começar pela navbar SIMPLES e colocar no app.js...é um componente reutilizavel entre todas as pag.

//TODO: após criar o mockup - notion

//TODO: voltar pra navbar e fazer a navbar
//TODO: criar product card
//TODO: criar product list
//TODO: voltar com ele pra home

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
