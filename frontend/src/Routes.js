import React from "react";
import { Routes, Route } from "react-router-dom";

// PAGES
import Home from "./Pages/Home.js";
import HomeCliente from "./Pages/HomeCliente.js";
import Contato from "./Pages/Contato.js";
import Cadastro from "./Pages/Cadastro.js";
import LoginForm from "./Pages/Login.js";
import TabelaUsuarios from "./Pages/ListaUsuarios.js";
import Unidades from "./Pages/Unidades.js";
import Beneficio from "./Pages/Beneficio.js";
import Exames from "./Pages/Exames.js"
import Agenda from "./Pages/Agenda.js";
import Funcionarios from "./Pages/Funcionarios.js";
import HomeMedico from '../src/Pages/HomeMedico.js';
const Rotas = () => {
  return (
    <>
      <Routes>
        {/* Cliente sem cadastro */}
        <Route path="/" exact element={<Home />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Beneficio" element={<Beneficio />} />
        
        {/* Cliente com cadastro */}
        <Route path="/HomeCliente" element={<HomeCliente />} />
        <Route path="/Exames" element={<Exames />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Unidades" element={<Unidades />} />
      
        
        {/* Rotas do medico */}
        <Route path="/HomeMedico" element={<HomeMedico />} />
        <Route path="/Agenda" element={<Agenda />} />

        
        {/* Rotas do Adm*/}
        <Route path="/Funcionarios" element={<Funcionarios />} />
        <Route path="/TabelaUsuarios" element={<TabelaUsuarios />} />

      </Routes>
    </>
  );
};

export default Rotas;