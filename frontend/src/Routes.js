import React from "react";
import { Routes, Route } from "react-router-dom";

// PAGES
import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import Cadastro from "./Pages/Cadastro";
import LoginForm from "./Pages/Login";
import Beneficio from "./Pages/Beneficio";
import Serviço from "./Pages/Serviço"

// PAGES DO CLIENTE
import HomeCliente from "./Pages/HomeCliente";
import Exames from "./Pages/Exames";
import Agenda from "./Pages/Agenda";

// PAGES DO MEDICO
import HomeMedico from "./Pages/HomeMedico";
import TabelaUsuarios from "./Pages/ListaUsuarios";
import Unidades from "./Pages/Unidades";
import Funcionarios from "./Pages/Funcionarios";

const Rotas = () => {
    return (
        <Routes>
            {/* Cliente sem cadastro */}
            <Route path="/" element={<Home />} />
            <Route path="/Cadastro" element={<Cadastro />} />
            <Route path="/Login" element={<LoginForm />} />
            <Route path="/Beneficio" element={<Beneficio />} />
            <Route path="/Contato" element={<Contato />} />
            <Route path="/Exames" element={<Exames />} />
            <Route path="/Serviço" element={<Serviço />} />

            {/* Cliente com cadastro */}
            <Route path="/HomeCliente" element={<HomeCliente />} />

            {/* Rotas do Medico */}
            <Route path="/HomeMedico" element={<HomeMedico />} />
            <Route path="/Agenda" element={<Agenda />} />

            {/* Rotas do Admin */}
            <Route path="/Funcionarios" element={<Funcionarios />} />
            <Route path="/TabelaUsuarios" element={<TabelaUsuarios />} />
            <Route path="/Unidades" element={<Unidades />} />
        </Routes>
    );
};

export default Rotas;
