import React from "react";
import Funcionario from "../Components/Funcionarios";
import NavegacaoAdm from '../Components/Navegacao-adm';
import FooterAdm from "../Components/Footer-adm";

const  PaginaFuncionarios= () => {
    return (
        <div className="pagina-funcionarios">
            <NavegacaoAdm />
            <Funcionario />
            <FooterAdm />
        </div>
    );
};

export default PaginaFuncionarios;
