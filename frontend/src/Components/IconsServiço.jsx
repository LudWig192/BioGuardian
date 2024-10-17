import React from 'react';
import { FaStethoscope, FaBriefcaseMedical, FaAmbulance } from "react-icons/fa"; // Importando ícones
import "../Style/IconsServiço.css"; // Certifique-se de que o caminho está correto

const WhatMakesUsDifferent = () => {
  return (
    <section className="section-serviço">
      <div className="container-serviço">
        <h3>O que nos torna diferentes</h3>
        <div className="row-serviço justify-content-center"> {/* Usando a classe row-serviço */}
          {/* Especialistas Qualificados */}
          <div className="col-md-4">
            <div className="icon-serviço">
              <FaStethoscope className="icon-xlg-serviço" />
            </div>
            <h5 className="font-serviço">Especialistas Qualificados</h5>
            <div className="descricao-serviço">
              Contratamos os melhores especialistas para oferecer serviços de diagnóstico de alta qualidade.
            </div>
          </div>

          {/* Equipamento Moderno */}
          <div className="col-md-4">
            <div className="icon-serviço">
              <FaBriefcaseMedical className="icon-xlg-serviço" />
            </div>
            <h5 className="font-serviço">Equipamento Moderno</h5>
            <div className="descricao-serviço">
              Usamos equipamentos médicos de primeira linha para diagnósticos rápidos e precisos.
            </div>
          </div>

          {/* Diagnósticos de Emergência */}
          <div className="col-md-4">
            <div className="icon-serviço">
              <FaAmbulance className="icon-xlg-serviço" />
            </div>
            <h5 className="font-serviço">Diagnósticos de Emergência</h5>
            <div className="descricao-serviço">
              Nossos serviços de diagnóstico de emergência garantem resultados rápidos e precisos.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
