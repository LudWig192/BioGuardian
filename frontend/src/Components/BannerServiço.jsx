import React from "react";
import { FaClock, FaUserMd, FaPhoneAlt, FaClipboard } from 'react-icons/fa';
import '../Style/BannerServiço.css';
import bannerImage from '../Imagens/BannerServiço.png';

const HealthSection = () => {
  return (
    <section className="BannerServiço">
      <div className="BannerServiço__imagem">
        <img 
          src={bannerImage} 
          alt="Cuidado Integral com Sua Saúde" 
          className="BannerServiço__imagem-background"
        />
        <div className="BannerServiço__imagem-content">
          <div className="BannerServiço__title">Cuidado Integral com Sua Saúde</div>
          <span className="BannerServiço__description">
            Oferecemos tecnologias avançadas para monitorar sua saúde. 
            Dispositivos como pulseiras inteligentes detectam anomalias, e nossos médicos qualificados estão disponíveis 24 horas para suas necessidades.
          </span>
        </div>
      </div>

      <div className="BannerServiço__info-section">
        <div className="BannerServiço__info-card">
          <FaClock className="BannerServiço__card-icon" />
          <div className="BannerServiço__card-title">Horário de Atendimento</div>
          <div className="BannerServiço__hours">Segunda a Sexta: 8:00–19:00</div>
          <div className="BannerServiço__hours">Sábado: 9:00–17:00</div>
          <div className="BannerServiço__hours">Domingo: 9:00–15:00</div>
        </div>

        <div className="BannerServiço__info-card">
          <FaClipboard className="BannerServiço__card-icon" />
          <div className="BannerServiço__card-title">Orientações para Consultas</div>
          <span className="BannerServiço__hours">
            Oferecemos recomendações para exames e consultas em hospitais parceiros.
          </span>
        </div>

        <div className="BannerServiço__info-card">
          <FaUserMd className="BannerServiço__card-icon" />
          <div className="BannerServiço__card-title">Atendimento Médico 24 Horas</div>
          <span className="BannerServiço__hours">
            Estamos disponíveis 24 horas para atender emergências.
          </span>
        </div>

        <div className="BannerServiço__info-card">
          <FaPhoneAlt className="BannerServiço__card-icon" />
          <div className="BannerServiço__card-title">Casos de Emergência</div>
          <span className="BannerServiço__emergency-contact">1-800-1234-567</span>
          <span className="BannerServiço__hours">Contate-nos imediatamente em situações críticas.</span>
        </div>
      </div>
    </section>
  );
};

export default HealthSection;
