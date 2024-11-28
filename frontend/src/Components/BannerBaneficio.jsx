import React from 'react';
import '../Style/BannerBaneficio.css'; 
import Familia from "../Imagens/BannerBeneficio1.png"; // Imagem importada diretamente no React

const HealthCareBanner = () => {
  return (
    <div className="bannerbeneficio-container">
      <img 
        src={Familia} 
        alt="Família sendo monitorada" 
        className="bannerbeneficio-image" 
      />
    </div>
  );
};

export default HealthCareBanner;
