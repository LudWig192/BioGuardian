import React from 'react';
import '../Style/BannerBaneficio.css'; 
import Familia from "../Imagens/Familia.png";

const HealthCareBanner = () => {
  return (
    <div className="bannerbeneficio-container"> 
      <div className="bannerbeneficio-content"> 
        <div className="text-bannerbeneficio"> 
          <div className="bannerbeneficio-heading"> 
            BioGuardian: <span className="bannerbeneficio-text">Proteção para Sua Saúde</span> 
          </div>
          <div className="bannerbeneficio-description"> 
            Com o BioGuardian, monitoramos sua saúde e de sua família com IA, identificando anomalias e oferecendo suporte médico em emergências. Tecnologia avançada para seu cuidado e bem-estar.
          </div>
        </div>
        
        <div className="image-bannerbeneficio"> 
          <img 
            src={Familia}
            alt="Família sendo monitorada" 
            className="bannerbeneficio-image" 
          />
        </div>
      </div>
    </div>
  );
};

export default HealthCareBanner;
