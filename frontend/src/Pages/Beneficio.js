import React from 'react';
import Banner from "../Components/BannerBaneficio"
import CardTabela from "../Components/CardTabelaBeneficio";
import Comentario from "../Components/ComentarioBeneficio"
import Exame from "../Components/ExameBeneficio"
import Icons from "../Components/IconsBeneficio"
import Plano from "../Components/PlanoBeneficio";
import Unidade from "../Components/UnidadeBeneficio"
import Duvida from "../Components/DuvidaBeneficio"
import Maps from "../Components/MapsBeneficio";


const Beneficio  = () => {
  return (
    <>
  <Banner />
    <CardTabela />
    <Exame />
    <Icons />
    <Plano />
  <Unidade />
  <Comentario />
  <Duvida />
  <Maps />

    </>
  );
}

export default Beneficio;