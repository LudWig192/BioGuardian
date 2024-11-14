import React from 'react';
import { FaClock, FaUser, FaHeartbeat, FaHospital } from 'react-icons/fa'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/BannerCliente.css'; 

const InfoSection = () => {
  return (
    <div className="bannercliente-container">
      <div className="banner-cliente-section">
        <img 
          src={require('../Imagens/BannerCliente.png')} 
          alt="Banner Cliente" 
          className="banner-cliente-img"
        />
        <div className="banner-cliente-content-container">
          <div className="banner-cliente-content">
            <div className="titulo-BannerCliente">Bem-vindo ao BioGuardian</div>
            <div className="subtitulo-BannerCliente">
              Agora, sua saúde e a de sua família estão monitoradas em tempo real, com suporte de inteligência artificial e acesso a uma equipe de saúde qualificada, prontos para atender você sempre que precisar.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
