import React from 'react';
import '../Style/MiniBannerServiço.css';
import { FaHeartbeat, FaClock, FaStethoscope, FaCommentMedical } from 'react-icons/fa'; // Usando ícones relacionados à saúde
import MiniBanner from "../Imagens/MiniBanner.png"; // Importando a imagem

const Achievements = () => {
  return (
    <div className="achievements-container ServiçoQualidade">
      <div className="overlay" /> {/* Div para a cor de fundo */}
      <div className="image-achievements"> 
        <img src={MiniBanner} alt="Doctors with X-ray" />
      </div>
      <div className="achievements-section">
        <div className="achievements-title">Benefícios do Nosso Aparelho</div>
        <div className="achievement-list">
          <div className="achievement-item">
            <FaHeartbeat className="achievement-icon" />
            <div className="achievement-description">
              <div className="description-title">Identificação Rápida</div>
              <div className="description-text">Anomalias no corpo são detectadas com rapidez.</div>
            </div>
          </div>
          <div className="achievement-item">
            <FaClock className="achievement-icon" />
            <div className="achievement-description">
              <div className="description-title">Atendimento 24 Horas</div>
              <div className="description-text">Estamos disponíveis para você a qualquer momento.</div>
            </div>
          </div>
          <div className="achievement-item">
            <FaStethoscope className="achievement-icon" />
            <div className="achievement-description">
              <div className="description-title">Orientação Médica</div>
              <div className="description-text">Receba recomendações sobre exames e tratamentos.</div>
            </div>
          </div>
          <div className="achievement-item">
            <FaCommentMedical className="achievement-icon" />
            <div className="achievement-description">
              <div className="description-title">Comunicação Direta</div>
              <div className="description-text">Converse com médicos sobre medicamentos e recomendações.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
