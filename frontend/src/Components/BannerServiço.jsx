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
          alt="Banner sobre cuidado integral com saúde" 
          className="BannerServiço__imagem-background"
        />
      </div>

      <div className="BannerServiço__info-section">
        <article className="BannerServiço__info-card" aria-labelledby="horario-card">
          <FaClock className="BannerServiço__card-icon" />
          <div className="BannerServiço__card-title" id="horario-card">Horário de Atendimento</div>
          <div className="BannerServiço__hours">Segunda a Sexta: 8:00–19:00</div>
          <div className="BannerServiço__hours">Sábado: 9:00–17:00</div>
          <div className="BannerServiço__hours">Domingo: 9:00–15:00</div>
        </article>

        <article className="BannerServiço__info-card" aria-labelledby="orientacoes-card">
          <FaClipboard className="BannerServiço__card-icon" />
          <div className="BannerServiço__card-title" id="orientacoes-card">Orientações para Consultas</div>
          <span className="BannerServiço__hours">
            Oferecemos recomendações para exames e consultas em hospitais parceiros.
          </span>
        </article>

        <article className="BannerServiço__info-card" aria-labelledby="atendimento-card">
          <FaUserMd className="BannerServiço__card-icon" />
          <div className="BannerServiço__card-title" id="atendimento-card">Atendimento Médico 24 Horas</div>
          <span className="BannerServiço__hours">
            Estamos disponíveis 24 horas para atender emergências.
          </span>
        </article>

        <article className="BannerServiço__info-card" aria-labelledby="emergencia-card">
          <FaPhoneAlt className="BannerServiço__card-icon" />
          <div className="BannerServiço__card-title" id="emergencia-card">Casos de Emergência</div>
          <span className="BannerServiço__emergency-contact">1-800-1234-567</span>
          <span className="BannerServiço__hours">Contate-nos imediatamente em situações críticas.</span>
        </article>
      </div>
    </section>
  );
};

export default HealthSection;