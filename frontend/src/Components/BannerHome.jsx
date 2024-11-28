import React from 'react';
import '../Style/BannerHome.css';
import BannerImage from '../Imagens/BannerHome.png'; 

const HeroSection = () => {
  return (
    <div className="BannerHome-section">
      <img src={BannerImage} alt="Banner de Saúde" className="BannerHome-background" /> 
    </div>
  );
};

export default HeroSection;
