import React from "react";
import { FaHeartbeat, FaShieldAlt, FaUserMd, FaAmbulance } from "react-icons/fa";
import "../Style/TecnologiaServiço.css";
import Tecnologia from "../Imagens/Tecnologia (2).png";

const MedicoServices = () => {
  return (
    <div className="tecnologia"> 
      <div className="left-tecnologia"> 
        <img src={Tecnologia} alt="Medical-tecnologia" /> 
      </div>
      <div className="right-tecnologia"> 
        <div className="service-card-tecnologia"> 
          <FaHeartbeat className="service-icon-tecnologia" /> 
          <div className="tecnologia-title">Monitoramento Contínuo</div>
          <div className="tecnologia-description">
            A pulseira monitora em tempo real os sinais vitais, detectando anomalias
            rapidamente e enviando alertas para os profissionais de saúde.
          </div>
        </div>
        <div className="service-card-tecnologia"> 
          <FaShieldAlt className="service-icon-tecnologia" /> 
          <div className="tecnologia-title">Inteligência Artificial</div>
          <div className="tecnologia-description">
            O aparelho utiliza IA para comparar os sintomas com o histórico médico
            da família, identificando possíveis condições e recomendando ações.
          </div>
        </div>
        <div className="service-card-tecnologia"> 
          <FaUserMd className="service-icon-tecnologia" /> 
          <div className="tecnologia-title">Assistência Médica 24h</div>
          <div className="tecnologia-description">
            Profissionais de saúde estão disponíveis 24 horas para fornecer suporte
            médico e, em emergências, um médico será enviado ao local.
          </div>
        </div>
        <div className="service-card-tecnologia"> 
          <FaAmbulance className="service-icon-tecnologia" /> 
          <div className="tecnologia-title">Atendimento de Emergência</div>
          <div className="tecnologia-description">
            Em casos críticos, uma equipe de emergência será acionada para
            realizar atendimentos médicos diretamente em sua residência.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicoServices;
