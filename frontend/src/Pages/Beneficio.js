import React from 'react';
import Banner from "../Components/BannerBaneficio";
import Pontos from "../Components/PontosBeneficio"
import Exame from "../Components/ExameBeneficio";
import Icons from "../Components/IconsBeneficio";
import Plano from "../Components/PlanoBeneficio";
import Unidade from "../Components/UnidadeBeneficio";
import Cirugia from "../Components/CirugiaBeneficio";
import Duvida from "../Components/DuvidaBeneficio";
import "../Style/BeneficioPage.css"


const Beneficio  = () => {
  return (
    <>
  <Banner />
  <Pontos />
    <Exame />
    <Cirugia />
    <Plano />
      <Unidade />
    <Icons />
  <Duvida />
    </>
  );
}

export default Beneficio;