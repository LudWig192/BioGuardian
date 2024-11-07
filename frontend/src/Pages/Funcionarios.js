import React from "react";
import Funcionario from "../Components/Funcionarios";
import NavegacaoAdm from '../Components/Navegacao-adm';
import Footer from "../Components/Footer-adm";

const Funcionarios = () => {
    return (
        <>
            <NavegacaoAdm />
            <Funcionario />
            <Footer />
        </>
    );
};

export default Funcionarios;
