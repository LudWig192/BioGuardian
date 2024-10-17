import React from 'react';
import { FaHospital, FaUserMd, FaUsers, FaCalendarAlt, FaHeartbeat, FaAmbulance } from 'react-icons/fa';
import '../Style/BannerHome.css'; // Ajuste o nome do arquivo conforme necessário

const YourComponentSpecific = () => {
  return (
    <div className="banner-container-specific">
      <div className="banner-content-specific">
        <div className="banner-title-large">Cuidado de Saúde Completo e Inovador</div> 
        <div className="banner-description-custom">
          Nosso plano de saúde oferece mais do que o essencial. Com um dispositivo avançado que monitora continuamente o corpo, você recebe alertas imediatos sobre anomalias, garantindo um atendimento rápido e eficiente. Além disso, nossos médicos estão disponíveis 24 horas para orientá-lo nos casos de emergência, como desmaios ou outros problemas graves.
        </div>
        <div className="banner-buttons-specific">
          <button className="appointment-btn-specific">Saiba Mais</button>
        </div>
      </div>

      <div className="stats-section-specific">
        <div className="stat-box-specific">
          <div className="stat-icon-container">
            <FaHeartbeat className="stat-icon-specific" />
          </div>
          <div className="stat-number-custom">Monitoramento Contínuo</div> 
          <div className="stat-description-specific">Seu bem-estar, 24h por dia</div>
        </div>
        <div className="stat-box-specific">
          <div className="stat-icon-container">
            <FaAmbulance className="stat-icon-specific" />
          </div>
          <div className="stat-number-custom">Emergência Imediata</div> 
          <div className="stat-description-specific">Alerta de desmaios e socorro imediato</div>
        </div>
        <div className="stat-box-specific">
          <div className="stat-icon-container">
            <FaUserMd className="stat-icon-specific" />
          </div>
          <div className="stat-number-custom">Médicos 24h</div> 
          <div className="stat-description-specific">Apoio médico a qualquer hora</div>
        </div>
        <div className="stat-box-specific">
          <div className="stat-icon-container">
            <FaHospital className="stat-icon-specific" />
          </div>
          <div className="stat-number-custom">Indicação Hospitalar</div> 
          <div className="stat-description-specific">Os melhores hospitais e profissionais</div>
        </div>
      </div>
    </div>
  );
};

export default YourComponentSpecific;
