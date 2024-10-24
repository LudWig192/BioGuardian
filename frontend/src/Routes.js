import React from "react";
import { Routes, Route } from "react-router-dom";

// Paginas do Cliente sem cadastro
import Home from "./Pages/Home";
import Serviço from "./Pages/Serviço"
import Beneficio from "./Pages/Beneficio";
import Cadastro from "./Pages/Cadastro";
import LoginForm from "./Pages/Login";

// Paginas do cliente com cadastro
import HomeCliente from "./Pages/HomeCliente";
import Exames from "./Pages/Exames";
import Contato from "./Pages/Contato";
import Unidades from "./Pages/Unidades";

//paginas do medico
import HomeMedico from "./Pages/HomeMedico";
import Agenda from "./Pages/Agenda";

//paginas do adm
import Funcionarios from "./Pages/Funcionarios";
import TabelaUsuarios from "./Pages/ListaUsuarios";

//Navegaçôes
import NavegacaoCSC from './Components/Navegacao'
import NavegacaoCCC from './Components/Navegacao-CCC'
import NavegacaoAdm from './Components/Navegacao-adm'
import NavegacaoMedico from './Components/Navegacao-medico'

const Rotas = () => {
    return (
        <Routes>
            
            {/* Cliente sem cadastro */}
            <Route path="/" element={<Home />} />
            <Route path="/Serviço" element={<Serviço />} />
            <Route path="/Beneficio" element={<Beneficio />} />
            <Route path="/Login" element={<LoginForm />} />
            <Route path="/Cadastro" element={<Cadastro />} />
            

            {/* Cliente com cadastro */}
            <Route path="/HomeCliente" element={<HomeCliente />} />
            <Route path="/Exames" element={<Exames />} />
            <Route path="/Contato" element={<Contato />} />
            <Route path="/Unidades" element={<Unidades />} />
            
            
            {/* Rotas do Medico */}
            <Route path="/HomeMedico" element={<HomeMedico />} />
            <Route path="/Agenda" element={<Agenda />} />


            {/* Rotas do Admin */}
            <Route path="/Funcionarios" element={<Funcionarios />} />
            <Route path="/TabelaUsuarios" element={<TabelaUsuarios />} />


            {/* Navegaçôes */}
            <Route path="/CSC" element={<NavegacaoCSC />} />
            <Route path="/CCC" element={<NavegacaoCCC/>} />
            <Route path="/NavAdm" element={<NavegacaoAdm />} />
            <Route path="/NavMedico" element={<NavegacaoMedico />} />
            
        </Routes>
    );
};

export default Rotas;
