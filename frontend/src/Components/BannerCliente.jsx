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

      <div className="cards-bannercliente-container">
        <div className="row">
          <div className="col-md-3 col-12">
            <div className="info-card-bannercliente">
              <FaClock className="bannerCliente-icon clock-icon" />
              <div className="titulo-card-BannerCliente">Monitoramento 24/7</div>
              <div className="descricao-card-BannerCliente">
                Acompanhe a saúde da sua família com alertas personalizados, identificando anomalias rapidamente para agir antes que problemas.
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="info-card-bannercliente">
              <FaUser className="bannerCliente-icon person-icon" />
              <div className="titulo-card-BannerCliente">Profissionais Dedicados</div>
              <div className="descricao-card-BannerCliente">
                Tenha acesso direto a profissionais qualificados para suporte em consultas e orientação médica contínua.
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="info-card-bannercliente">
              <FaHeartbeat className="bannerCliente-icon heart-icon" />
              <div className="titulo-card-BannerCliente">Pronto Atendimento</div>
              <div className="descricao-card-BannerCliente">
                Para emergências, médicos de plantão são acionados diretamente para o seu local, garantindo o suporte que você precisa.
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="info-card-bannercliente">
              <FaHospital className="bannerCliente-icon hospital-icon" />
              <div className="titulo-card-BannerCliente">Tecnologia Avançada</div>
              <div className="descricao-card-BannerCliente">
                Monitoramento e suporte com as melhores ferramentas e tecnologias, garantindo segurança e atendimento de ponta.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
