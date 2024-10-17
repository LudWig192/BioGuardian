import React from "react";
import { Routes, Route } from "react-router-dom";

// PAGES
import Home from "./Pages/Home.js";
import Contato from "./Pages/Contato.js";
import Cadastro from "./Pages/Cadastro.js";

import LoginForm from "./Pages/Login.js";
import Beneficio from "./Pages/Beneficio.js";

//PAGES DO CLIENTE
import HomeCliente from "./Pages/HomeCliente.js";
import Exames from "./Pages/Exames.js"
import Agenda from "./Pages/Agenda.js";

import HomeMedico from '../src/Pages/HomeMedico.js';
import TabelaUsuarios from "./Pages/ListaUsuarios.js";
import Unidades from "./Pages/Unidades.js";
import Funcionarios from "./Pages/Funcionarios.js";


const Rotas = () => {
        return (
                <>
                        <Routes>
                                {/* Cliente sem cadastro */}
                                <Route path="/" exact element={<HomeMedico/>} />
                                <Route path="/Cadastro" exact element={<Cadastro />} />
                                <Route path="/HomeCliente" exact element={<HomeCliente />} />
                                <Route path="/TabelaUsuarios" exact element={<TabelaUsuarios />} />
                                <Route path="/Contato" element={<Contato />} />
                                <Route path="/HomeMedico" element={<HomeMedico />} />
                                <Route path="/Exames" element={<Exames />} />

                                <Route path="/Login" element={<LoginForm />} />
                                <Route path="/Cadastro" element={<Cadastro />} />
                                <Route path="/Beneficio" element={<Beneficio />} />
                                <Route path="/Unidades" element={<Funcionarios />} />
                                <Route path="Unidades" exact element={<Unidades />} />

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