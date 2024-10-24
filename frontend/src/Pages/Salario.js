import React from 'react';
import Introducao from '../Components/IntroducaoSalario'
import SalarioGrafico from '../Components/Salario';
import Tabela from '../Components/TabelaSalario';
import Suporte from '../Components/SuporteSalario'
import Testemunhos from '../Components/Testemunho';
import Comparativo from '../Components/Comparativo';

const PaginaSalario = () => {
    return (
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
            </main>
        </div>
    );
};

export default PaginaSalario;
