import React from "react";
import Funcionario from "../Components/Funcionarios";
import NavegacaoAdm from '../Components/Navegacao-adm';
import Footer from "../Components/Footer-adm";

const  PaginaFuncionarios= () => {
    return (
        <div className="pagina-funcionarios">
            <NavegacaoAdm />
            <Funcionario />
            <Footer />
        </div>
    );
};

export default PaginaFuncionarios;
