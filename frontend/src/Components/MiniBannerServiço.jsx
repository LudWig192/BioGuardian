import React from 'react';
import '../Style/MiniBannerServiço.css';
import { FaHeartbeat, FaClock, FaStethoscope, FaCommentMedical } from 'react-icons/fa'; // Usando ícones relacionados à saúde
import MiniBanner from "../Imagens/MiniBanner.png"; // Importando a imagem

const Achievements = () => {
  return (
    <div className="miniBanner-achievements-container miniBanner-ServiçoQualidade">
      <div className="miniBanner-overlay" /> {/* Div para a cor de fundo */}
      <div className="miniBanner-image-achievements"> 
        <img src={MiniBanner} alt="Doctors with X-ray" />
      </div>
      <div className="miniBanner-achievements-section">
        <div className="miniBanner-achievements-title">Benefícios do Nosso Aparelho</div>
        <div className="miniBanner-achievement-list">
          <div className="miniBanner-achievement-item">
            <FaHeartbeat className="miniBanner-achievement-icon" />
            <div className="miniBanner-achievement-description">
              <div className="miniBanner-description-title">Identificação Rápida</div>
              <div className="miniBanner-description-text">Anomalias no corpo são detectadas com rapidez.</div>
            </div>
          </div>
          <div className="miniBanner-achievement-item">
            <FaClock className="miniBanner-achievement-icon" />
            <div className="miniBanner-achievement-description">
              <div className="miniBanner-description-title">Atendimento 24 Horas</div>
              <div className="miniBanner-description-text">Estamos disponíveis para você a qualquer momento.</div>
            </div>
          </div>
          <div className="miniBanner-achievement-item">
            <FaStethoscope className="miniBanner-achievement-icon" />
            <div className="miniBanner-achievement-description">
              <div className="miniBanner-description-title">Orientação Médica</div>
              <div className="miniBanner-description-text">Receba recomendações sobre exames e tratamentos.</div>
            </div>
          </div>
          <div className="miniBanner-achievement-item">
            <FaCommentMedical className="miniBanner-achievement-icon" />
            <div className="miniBanner-achievement-description">
              <div className="miniBanner-description-title">Comunicação Direta</div>
              <div className="miniBanner-description-text">Converse com médicos sobre medicamentos e recomendações.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
