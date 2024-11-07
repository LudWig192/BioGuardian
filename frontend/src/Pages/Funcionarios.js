import React from "react";
import Funcionario from "../Components/Funcionarios";
import NavegacaoAdm from '../Components/Navegacao-adm';
import '../Style/FuncionariosPage.css';

const PaginaFuncionarios = () => {
    return (
        <div className="pagina-funcionarios">
            <NavegacaoAdm />
            <Funcionario />
        </div>
    );
};

export default PaginaFuncionarios;
