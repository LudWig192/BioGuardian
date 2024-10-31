import React from "react";
import { Routes, Route } from "react-router-dom";

// Pagina de Cliente sem cadastro
import Home from "./Pages/Home.js";
import Cadastro from "./Pages/Cadastro.js";

import LoginForm from "./Pages/Login.js";
import Beneficio from "./Pages/Beneficio.js";
import Servicos from './Pages/Serviço.js'

// Paginas de Cliente com cadastro
import HomeCliente from "./Pages/HomeCliente.js";
import Exames from "./Pages/Exames.js"
import Contato from "./Pages/Contato.js";
import Unidades from './Pages/Unidades.js'
import Agendamento from './Pages/Agendamento.js';

// Paginas do Medico
import HomeMedico from '../src/Pages/HomeMedico.js';
import Resultados from './Pages/Resultados.js'
import Agenda from "./Pages/Agenda.js";

// Paginas do Adm
import Salario from './Pages/Salario.js';
import Funcionarios from "./Pages/Funcionarios.js";
import Registros from './Pages/RegistroExames.js';
import Administrador from './Pages/Administrador.js';
import Clientes from "./Pages/ListaClientes.js";
import PerfilAdm from './Pages/PerfilAdm.js';

// Navegações
import NavegacaoCCC from './Components/Navegacao-CCC.jsx';
import NavegacaoCSC from './Components/Navegacao.jsx';
import NavegacaoMedico from './Components/Navegacao-medico.jsx';
import NavegacaoAdm from './Components/Navegacao-adm.jsx';

const Rotas = () => {
        return (
                <>
                        <Routes>
                                {/* Cliente sem cadastro */}
                                <Route path="/" exact element={<Home />} />
                                <Route path="/Beneficio" element={<Beneficio />} />
                                <Route path="/Servico" element={<Servicos />} />
                                <Route path="/Login" element={<LoginForm />} />
                                <Route path="/Cadastro" exact element={<Cadastro />} />
                                <Route path="/Exames" element={<Exames />} />
                                
                                {/* Cliente com cadastro */}
                                <Route path="/HomeCliente" element={<HomeCliente />} />
                                <Route path="/Exames" element={<Exames />} />
                                <Route path="/Contato" element={<Contato />} />
                                <Route path="/Unidades" element={<Unidades />} />
                                <Route path="/Agendamento" element={<Agendamento />} />
                                <Route path="/Resultados" element={<Resultados />} />

                                {/* Rotas do medico */}
                                <Route path="/HomeMedico" element={<HomeMedico />} />
                                <Route path="/Agenda" element={<Agenda />} />
                               
                                {/* Rotas do Adm*/}
                                <Route path="/Salario" element={<Salario />} />
                                <Route path="/Funcionarios" element={<Funcionarios />} />
                                <Route path="/Clientes" element={<Clientes/>} />
                                <Route path="/PerfilAdm" element={<PerfilAdm />} />
                                <Route path="/Registros" element={<Registros />} />
                                <Route path="/Administrador" element={<Administrador />} />

                                {/* Navegações*/}
                                <Route path="/NaveCSC" element={<NavegacaoCSC />} />
                                <Route path="/NaveCCC" element={<NavegacaoCCC />} />
                                <Route path="/NaveMedico" element={<NavegacaoMedico />} />
                                <Route path="/NaveAdm" element={<NavegacaoAdm />} />
                
                        </Routes>
                </>
        );
};

export default Rotas;
