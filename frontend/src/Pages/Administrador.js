import React from 'react';
import DashboardCards from '../Components/PainelCardAdm';
import '../Style/AdministradorPage.css';
import Graficos from '../Components/GraficoAdmPage';
import Funcionarios from '../Components/FuncionariosAdm';
import Caixa from '../Components/CaixaEntradaAdm';
import Estastiticas from '../Components/EstatiticasCardsAdm';
import NavegacaoAdm from '../Components/Navegacao-adm';
import Footer from "../Components/Footer-adm";


const Administrador = () => {
    return (
        <div className="administrador-page">
            <h1>Administrador</h1>
            <DashboardCards />
            <Graficos />
            <Funcionarios />
            <div className="dashboard">
                <Caixa />
                <Estastiticas />
            </div>
            <NavegacaoAdm />
            <Footer />
        </div>
    );
};

export default Administrador;
