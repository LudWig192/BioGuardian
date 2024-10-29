import React from 'react';
import '../Style/BannerHome.css';
import BannerImage from '../Imagens/BannerHome.png'; 

const HeroSection = () => {
  return (
    <div className="BannerHome-section">
      <img src={BannerImage} alt="Banner de Saúde" className="BannerHome-background" /> 
      <div className="BannerHome-content">
        <div className="BannerHome-title">BioGuardian: Monitoramento de Saúde</div>
        <div className="BannerHome-description">
          O BioGuardian é um serviço de assinatura que monitora a saúde de famílias ou indivíduos, usando inteligência artificial para comparar o histórico médico com sintomas de doenças e identificar anomalias. Oferecemos auxílio médico com profissionais de saúde e atendimento de emergência em casa.
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
