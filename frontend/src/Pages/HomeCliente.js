//Lista de Usuarios
import React from "react";
import Banner from "../Components/BannerCliente";
import Dicas from "../Components/DicasCliente"
import Icons from "../Components/IconsCliente";
import Exame from "../Components/ExameCliente"
import ExameResultado from "../Components/ResultadoExameCliente";
import Marcar from "../Components/MarcarConsultaCliente"
import Cirugia from "../Components/CirugiaCliente"
import Tabela from "../Components/TabelaCliente";
import "../Style/HomeClientePage.css";
import NavbarCCC from '../Components/Navegacao-CCC';
import FooterCCC from "../Components/Footer-CCC"

const HomeCliente = () => {
  return (
    <>
      <NavbarCCC />
      <Banner />
      <Dicas />     
       <Cirugia />
       <Exame />
       <ExameResultado />
      <Marcar /> 
     <Icons />
     <Tabela />
     <FooterCCC />
    </>
  );
};

export default HomeCliente;