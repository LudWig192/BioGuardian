import React from 'react';
import { FaPlay } from 'react-icons/fa';
import '../Style/Modelo3DHome.css';

const LanguageCard = () => {
  return (
    <div className="language-card-container">
      <div className="text-section-alexia">
        <div className="language-title-alexia">Conheça nosso Aparelho Inovador</div>
        <div className="highlight-text-alexia">
          Qualidade e Precisão para Monitoramento de Saúde
        </div>
        <div className="description-3D">
          Nosso aparelho principal é projetado para detectar anomalias de saúde em tempo real, 
          fornecendo dados precisos e confiáveis. Com tecnologia de ponta, ele permite que você 
          monitore suas condições de saúde e, se necessário, compartilhe as informações diretamente 
          com seu médico. Sinta-se seguro com um acompanhamento contínuo e intervenções rápidas.
          Não perca a oportunidade de melhorar sua saúde com nosso dispositivo avançado!
        </div>
      </div>
      <div className="image-section-alexia">
        <div className="sketchfab-embed-wrapper">
          <iframe 
            title="Aparelho de Monitoramento de Saúde" 
            frameBorder="0" 
            allow="autoplay; fullscreen; xr-spatial-tracking" 
            src="https://sketchfab.com/models/8c51d37795264cc99961417a56b3c1c0/embed"
            allowFullScreen
            mozAllowFullScreen="true" 
            webkitAllowFullScreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LanguageCard;
