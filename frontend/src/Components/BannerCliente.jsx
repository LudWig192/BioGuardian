import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Style/BannerCliente.css';

const InfoSection = () => {
  return (
    <div className="bannercliente-container"> 
      {/* Banner Section */}
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
        <div className="row-bannercliente"> 
          <div className="col-md-3-bannercliente"> 
            <div className="info-card-bannercliente"> 
              <i className="bi bi-clock-history info-icon"></i>
              <div className="titulo-card-BannerCliente">Monitoramento 24/7</div>
              <div className="descricao-card-BannerCliente">
                Acompanhe a saúde da sua família com alertas personalizados, identificando anomalias rapidamente para agir antes que problemas apareçam.
              </div>
            </div>
          </div>
          <div className="col-md-3-bannercliente"> 
            <div className="info-card-bannercliente"> 
              <i className="bi bi-person info-icon"></i>
              <div className="titulo-card-BannerCliente">Profissionais Dedicados</div>
              <div className="descricao-card-BannerCliente">
                Tenha acesso direto a profissionais qualificados para suporte em consultas e orientação médica contínua.
              </div>
            </div>
          </div>
          <div className="col-md-3-bannercliente"> 
            <div className="info-card-bannercliente"> 
              <i className="bi bi-heart-pulse info-icon"></i>
              <div className="titulo-card-BannerCliente">Pronto Atendimento</div>
              <div className="descricao-card-BannerCliente">
                Para emergências, médicos de plantão são acionados diretamente para o seu local, garantindo o suporte que você precisa.
              </div>
            </div>
          </div>
          <div className="col-md-3-bannercliente"> 
            <div className="info-card-bannercliente"> 
              <i className="bi bi-hospital info-icon"></i>
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
