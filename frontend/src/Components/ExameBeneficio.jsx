import React from 'react';
import '../Style/ExameBeneficio.css';
import REABILITAÇÃO from "../Imagens/Teste (2).png";
import SANGUE from "../Imagens/ExameSangue.png";
import COLESTEROL from "../Imagens/COLESTEROL.png";
import GLICOSE from "../Imagens/GLICOSE.png";

const ServicesSection = () => {
  return (
    <div className="examebeneficio-services-section-container">
      <div className="examebeneficio-services-section-title">Exames e Avaliações de Saúde</div>
      <div className="examebeneficio-services-section-subtitle">
        O BioGuardian monitora a saúde de famílias e indivíduos usando inteligência artificial para detectar anomalias. 
        Nosso médico 24 horas propõe exames para os pacientes e oferece assistência médica em emergências com profissionais 
        disponíveis para atendimento domiciliar.
      </div>

      <div className="examebeneficio-services-section-grid">
        <div className="examebeneficio-services-section-card">
          <img src={REABILITAÇÃO} alt="Centro de Reabilitação" />
          <div className="examebeneficio-services-section-card-title">CENTRO DE REABILITAÇÃO</div>
        </div>
        <div className="examebeneficio-services-section-card">
          <img src={SANGUE} alt="Exame de Sangue" />
          <div className="examebeneficio-services-section-card-title">EXAME DE SANGUE</div>
        </div>
        <div className="examebeneficio-services-section-card">
          <img src={COLESTEROL} alt="Exame de Colesterol" />
          <div className="examebeneficio-services-section-card-title">EXAME DE COLESTEROL</div>
        </div>
        <div className="examebeneficio-services-section-card">
          <img src={GLICOSE} alt="Exame de Glicose" />
          <div className="examebeneficio-services-section-card-title">EXAME DE GLICOSE</div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
