import React from "react";
import {Routes, Route} from "react-router-dom";

// PAGES
import Home from "./Pages/Home.js";
import Contato from "./Pages/Contato.js";
import Cadastro from "./Pages/Cadastro.js";
import LoginForm from "./Pages/Login.js";
import TabelaUsuarios from "./Pages/ListaUsuarios.js";
import Unidades from "./Pages/Unidades.js";
import Beneficio from "./Pages/Beneficio.js";
import Exames from "./Pages/Exames.js"
import Agenda from "./Pages/Agenda.js";
import Funcionarios from "./Pages/Funcionarios.js";

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Agenda />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/ListaUsuarios" element={<TabelaUsuarios />} />
        <Route path="/Beneficio" element={<Beneficio />} />
        <Route path="/Unidades" element={<Unidades />} />
      </Routes>
    </>
  );
};

export default Rotas;
