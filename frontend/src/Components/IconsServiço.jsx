import React from 'react';
import { FaStethoscope, FaBriefcaseMedical, FaAmbulance } from "react-icons/fa"; // Importando ícones
import "../Style/IconsServiço.css"; // Certifique-se de que o caminho está correto

const WhatMakesUsDifferent = () => {
  return (
    <section className="section-servicoicons"> 
      <div className="container-servicoicons"> 
        <div className="titulo-servicoicons">O que nos torna diferentes</div> 
        <div className="row-servicoicons justify-content-center"> {/* Usando a classe row-serviço */} 
          {/* Especialistas Qualificados */}
          <div className="col-md-4-servicoicons"> 
            <div className="icon-servicoicons"> 
              <FaStethoscope className="icon-xlg-servicoicons" /> 
            </div>
            <div className="font-servicoicons">Especialistas Qualificados</div> 
            <div className="descricao-servicoicons"> 
              Contratamos os melhores especialistas para oferecer serviços de diagnóstico de alta qualidade.
            </div>
          </div>

          {/* Equipamento Moderno */}
          <div className="col-md-4-servicoicons"> 
            <div className="icon-servicoicons"> 
              <FaBriefcaseMedical className="icon-xlg-servicoicons" /> 
            </div>
            <div className="font-servicoicons">Equipamento Moderno</div> 
            <div className="descricao-servicoicons"> 
              Usamos equipamentos médicos de primeira linha para diagnósticos rápidos e precisos.
            </div>
          </div>

          {/* Diagnósticos de Emergência */}
          <div className="col-md-4-servicoicons"> 
            <div className="icon-servicoicons"> 
              <FaAmbulance className="icon-xlg-servicoicons" /> 
            </div>
            <div className="font-servicoicons">Diagnósticos de Emergência</div> 
            <div className="descricao-servicoicons"> 
              Nossos serviços de diagnóstico de emergência garantem resultados rápidos e precisos.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
