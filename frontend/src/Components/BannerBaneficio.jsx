import React from 'react';
import '../Style/BannerBaneficio.css';  // arquivo de estilo
import Familia from "../Imagens/Familia.png";

const HealthCareBanner = () => {
  return (
    <div className="bannerbeneficio-container"> {/* Classe do container principal */} 
      <div className="bannerbeneficio-content"> {/* Classe do conteúdo principal */} 
        <div className="text-bannerbeneficio"> {/* Classe da seção de texto */} 
          <div className="bannerbeneficio-heading"> {/* Classe do cabeçalho do banner */} 
            BioGuardian: <span className="bannerbeneficio-text">Proteção para Sua Saúde</span> {/* Classe para destacar o texto */} 
          </div>
          <div className="bannerbeneficio-description"> {/* Classe da descrição do banner */} 
            Com o BioGuardian, monitoramos sua saúde e de sua família com IA, identificando anomalias e oferecendo suporte médico em emergências. Tecnologia avançada para seu cuidado e bem-estar.
          </div>
        </div>
        
        <div className="image-bannerbeneficio"> {/* Classe da seção da imagem */} 
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
