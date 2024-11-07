import React from "react";

// IMPORT OS COMPONENTES AQ
import TabelaCadastro from "../Components/CadastroTabela";
import TabelaLogin from "../Components/LoginTabela";
import NavegacaoAdm from '../Components/Navegacao-adm'

// IMPORT ESTILIZACAO
import '../Style/Cliente.css'

const ListaClientes = () => {
  return (
    <>
      <div className="LC">
        <NavegacaoAdm />
        <h1>Lista de Usuários</h1>
        <h2>Cadastro</h2>
        <TabelaCadastro />
        <h2>Login</h2>
        <TabelaLogin />
      </div>
    </>
  );
};

export default ListaClientes;