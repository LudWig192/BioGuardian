import React from 'react';
import { FaUserMd, FaLaptopMedical, FaClock, FaAward } from 'react-icons/fa';
import '../Style/CirugiaBeneficio.css';
import Cirurgia from "../Imagens/Cirurgia2.webp";
import Fundo from "../Imagens/fundo.png"

const EyeCareServices = () => {
  return (
    <div 
      className="cirurgiabeneficio-container" 
      style={{
        backgroundImage: `url(${Fundo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Overlay para cobrir o fundo */}
      <div className="cirurgiabeneficio-overlay"></div>
      
      {/* Texto e conteúdo sobreposto */}
      <div className="cirurgiabeneficio-text" style={{ zIndex: 2 }}>
        <div className="cirurgiabeneficio-main-title">Nossas Cirurgias</div>
        <div className="cirurgiabeneficio-description">
          Realizamos cirurgias com profissionais altamente qualificados. O médico pode indicar a cirurgia a qualquer momento e referir o melhor hospital para o procedimento.
        </div>
        
        <div className="cirurgiabeneficio-features">
          <div className="cirurgiabeneficio-feature">
            <div className="cirurgiabeneficio-feature-icon"><FaUserMd /></div>
            <div className="cirurgiabeneficio-feature-text">
              <div className="cirurgiabeneficio-card-title">BioGuardian</div>
              <div className="cirurgiabeneficio-description-text">
                Monitora a saúde da família com inteligência artificial, identificando anomalias.
              </div>
            </div>
          </div>
          <div className="cirurgiabeneficio-feature">
            <div className="cirurgiabeneficio-feature-icon"><FaLaptopMedical /></div>
            <div className="cirurgiabeneficio-feature-text">
              <div className="cirurgiabeneficio-card-title">Auxílio Médico</div>
              <div className="cirurgiabeneficio-description-text">
                Profissionais de saúde são chamados para atender emergências na sua casa.
              </div>
            </div>
          </div>
          <div className="cirurgiabeneficio-feature">
            <div className="cirurgiabeneficio-feature-icon"><FaClock /></div>
            <div className="cirurgiabeneficio-feature-text">
              <div className="cirurgiabeneficio-card-title">24/7 Disponibilidade</div>
              <div className="cirurgiabeneficio-description-text">
                Atendimento disponível a qualquer hora.
              </div>
            </div>
          </div>
          <div className="cirurgiabeneficio-feature">
            <div className="cirurgiabeneficio-feature-icon"><FaAward /></div>
            <div className="cirurgiabeneficio-feature-text">
              <div className="cirurgiabeneficio-card-title">Qualidade</div>
              <div className="cirurgiabeneficio-description-text">
                Compromisso com a excelência em todos os serviços.
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Imagem da cirurgia */}
      <div className="cirurgiabeneficio-eye-care-image" style={{ position: 'relative', zIndex: 3 }}>
        <img src={Cirurgia} alt="Eye Care Services" />
      </div>
    </div>
  );
};

export default EyeCareServices;
