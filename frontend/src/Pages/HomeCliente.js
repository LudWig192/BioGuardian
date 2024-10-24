//Lista de Usuarios
import React from "react";
import Banner from "../Components/BannerCliente";
import Dicas from "../Components/DicasCliente"
import Ideia from "../Components/IdeiasCliente"
import Icons from "../Components/IconsCliente";
import Exame from "../Components/ExameCliente"
import ExameResultado from "../Components/ResultadoExameCliente"
import Tabela from "../Components/TabelaCliente"
import NavbarCCC from '../Components/Navegacao-CCC'

const HomeCliente = () => {
  return (
    <>
      <NavbarCCC />
      <Banner />
      <Dicas />
      <Ideia />
      <Icons />
      <Exame />
     <ExameResultado />
     <Tabela />
    </>
  );
};

export default HomeCliente;