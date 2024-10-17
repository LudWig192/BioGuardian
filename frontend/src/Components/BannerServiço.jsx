import React from "react";
import { FaClock, FaUserMd, FaPhoneAlt, FaClipboard } from 'react-icons/fa';
import '../Style/BannerServiço.css';

const HealthSection = () => {
  return (
    <section className="BannerServiço">
      <div className="BannerServiço__imagem">
        <div className="BannerServiço__imagem-content">
          <div className="BannerServiço__title">Cuidado Integral com Sua Saúde</div>
          <span className="BannerServiço__description">
            Na nossa unidade, disponibilizamos tecnologias avançadas de monitoramento da saúde. 
            Nossos dispositivos, como a pulseira inteligente, detectam anomalias em seu estado físico, enquanto nossos aparelhos especializados identificam a origem do problema.
            Contamos com médicos qualificados disponíveis 24 horas para atender suas necessidades de saúde.
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
            Oferecemos recomendações personalizadas para exames e consultas necessárias, disponíveis em hospitais parceiros.
          </span>
        </div>

        <div className="BannerServiço__info-card">
          <FaUserMd className="BannerServiço__card-icon" />
          <div className="BannerServiço__card-title">Atendimento Médico 24 Horas</div>
          <span className="BannerServiço__hours">
            Nossa equipe médica está disponível 24 horas por dia para atender a qualquer emergência ou necessidade de saúde.
          </span>
        </div>

        <div className="BannerServiço__info-card">
          <FaPhoneAlt className="BannerServiço__card-icon" />
          <div className="BannerServiço__card-title">Casos de Emergência</div>
          <span className="BannerServiço__emergency-contact">1-800-1234-567</span>
          <span className="BannerServiço__hours">Entre em contato conosco imediatamente em situações críticas.</span>
        </div>
      </div>
    </section>
  );
};

export default HealthSection;
