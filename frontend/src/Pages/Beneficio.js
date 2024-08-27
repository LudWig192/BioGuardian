import React from 'react';
import TabelaBeneficio from "../Components/TabelaBeneficio.jsx";
import PlanoBeneficio from "../Components/PlanoBeneficio.jsx";
import UnidadeBeneficio from "../Components/UnidadeBeneficio.jsx";
import DuvidaBeneficio from "../Components/DuvidaBeneficio.jsx";


const Beneficio  = () => {
  return (
    <>
    <TabelaBeneficio />
    <PlanoBeneficio />
    <h2 className='Uni'>Um pouco das nossas unidades <span>Hospitares</span></h2>
    <UnidadeBeneficio />
    <DuvidaBeneficio />
    </>
  );
}

export default Beneficio;