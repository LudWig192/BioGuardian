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
            <div className="titulo-BannerCliente">Tratamento Ortopédico para Dor Aguda</div>
            <div className="subtitulo-BannerCliente">
              Oferecemos cuidados médicos especializados para alívio rápido e eficaz da dor.
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section Positioned Below the Banner */}
      <div className="cards-bannercliente-container"> 
        <div className="row-bannercliente"> 
          <div className="col-md-3-bannercliente justify-content-bannercliente"> 
            <div className="info-card-bannercliente"> 
              <i className="bi bi-clock-history info-icon"></i>
              <div className="titulo-card-BannerCliente">Serviço 24 Horas</div>
              <div className="descricao-card-BannerCliente">
                Oferecendo suporte inabalável a qualquer hora, nosso serviço 24 horas garante atendimento contínuo.
              </div>
            </div>
          </div>
          <div className="col-md-3-bannercliente justify-content-bannercliente"> 
            <div className="info-card-bannercliente"> 
              <i className="bi bi-person info-icon"></i>
              <div className="titulo-card-BannerCliente">Médico Qualificado</div>
              <div className="descricao-card-BannerCliente">
                Um médico qualificado possui um conhecimento abrangente das ciências médicas.
              </div>
            </div>
          </div>
          <div className="col-md-3-bannercliente justify-content-center-bannercliente"> 
            <div className="info-card-bannercliente"> 
              <i className="bi bi-heart-pulse info-icon"></i>
              <div className="titulo-card-BannerCliente">Cuidado de Emergência</div>
              <div className="descricao-card-BannerCliente">
                Sua intervenção oportuna desempenha um papel crucial na estabilização dos pacientes e na salvaguarda de vidas.
              </div>
            </div>
          </div>
          <div className="col-md-3-bannercliente justify-content-bannercliente"> 
            <div className="info-card-bannercliente"> 
              <i className="bi bi-hospital info-icon"></i>
              <div className="titulo-card-BannerCliente">Sala de Operações</div>
              <div className="descricao-card-BannerCliente">
                Equipado com ferramentas e tecnologias especializadas para garantir a segurança.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
