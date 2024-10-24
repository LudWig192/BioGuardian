import React from 'react';
import { FaUserMd, FaProcedures, FaLaptopMedical, FaAmbulance } from 'react-icons/fa';
import '../Style/ServiçoHome.css';
import Serviço from '../Imagens/ServiçoHome.png';

const Expertise = () => {
  return (
    <div className="expertise-section">
      <div className="expertise-content">
        <div className="expertise-title">Nossa Especialização</div>
        <div className="expertise-items">
          <div className="expertise-item">
            <div className="expertise-icon"><FaUserMd /></div>
            <div className="expertise-service-title">Médicos Certificados</div>
            <div className="expertise-service-description">
              Nossa equipe de médicos é altamente qualificada e comprometida com a excelência no atendimento.
            </div>
          </div>
          <div className="expertise-item">
            <div className="expertise-icon"><FaProcedures /></div>
            <div className="expertise-service-title">Atendimento de Emergência</div>
            <div className="expertise-service-description">
              Oferecemos serviços de emergência com resposta rápida e cuidados críticos para salvar vidas.
            </div>
          </div>
          <div className="expertise-item">
            <div className="expertise-icon"><FaLaptopMedical /></div>
            <div className="expertise-service-title">Tecnologia Avançada</div>
            <div className="expertise-service-description">
              Utilizamos tecnologia de ponta para garantir diagnósticos precisos e tratamentos eficazes.
            </div>
          </div>
          <div className="expertise-item">
            <div className="expertise-icon"><FaAmbulance /></div>
            <div className="expertise-service-title">Serviço de Ambulância</div>
            <div className="expertise-service-description">
              Nossa frota de ambulâncias é equipada para proporcionar transporte seguro e eficiente aos pacientes.
            </div>
          </div>
        </div>
      </div>
      <div className="expertise-image">
        <img src={Serviço} alt="Médico" />
      </div>
    </div>
  );
};

export default Expertise;
