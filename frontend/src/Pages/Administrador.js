import React from 'react';
import DashboardCards from '../Components/PainelCardAdm';
import '../Style/AdministradorPage.css';
import Graficos from '../Components/GraficoAdmPage';
import Funcionarios from '../Components/FuncionariosAdm';
import Caixa from '../Components/CaixaEntradaAdm';
import Estastiticas from '../Components/EstatiticasCardsAdm';

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
        </div>
    );
};

export default Administrador;
