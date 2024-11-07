import React from 'react';
import Introducao from '../Components/IntroducaoSalario'
import SalarioGrafico from '../Components/Salario';
import Tabela from '../Components/TabelaSalario';
import Suporte from '../Components/SuporteSalario'
import Testemunhos from '../Components/Testemunho';
import Comparativo from '../Components/Comparativo';
import NavegacaoAdm from '../Components/Navegacao-adm';
import Footer from "../Components/Footer-adm";


const PaginaSalario = () => {
    return (
        <>
            <NavegacaoAdm />
            <div className="pagina-container">
                <header className="pagina-header">
                </header>

                <main>
                    <Introducao />
                    <SalarioGrafico />
                    <Tabela />
                    <Suporte />
                    <Testemunhos />
                    <Comparativo />
                    <Footer />
                </main>
            </div>
        </>
    );
};

export default PaginaSalario;
