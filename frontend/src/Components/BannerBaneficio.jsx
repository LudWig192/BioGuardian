import React from 'react';
import '../Style/BannerBaneficio.css';
import familyImage from '../Imagens/Familia.png'; // Substitua pelo caminho da sua imagem

const AppointmentForm = () => {
  return (
    <div className="BannerBeneficio-appointment-container">
      <div className="BannerBeneficio-left-section">
        <div className="BannerBeneficio-text-overlay">
          <div className="BannerBeneficio-title-container">
            <span className="BannerBeneficio-main-title">Tratamento Médico de Qualidade</span>
          </div>
          <div className="BannerBeneficio-subtitle-container">
            <span className="BannerBeneficio-subtitle">Para Você e Sua Família</span>
          </div>
        </div>
        <div className="BannerBeneficio-image-container">
          <img 
            src={familyImage} 
            alt="Família" 
            className="BannerBeneficio-family-image" 
          />
        </div>
      </div>
      <div className="BannerBeneficio-right-section">
        <div className="BannerBeneficio-appointment-header-container">
          <span className="BannerBeneficio-appointment-header">Recomendamos o plano para você</span>
        </div>
        {/* Texto semelhante adicionado abaixo */}
        <span className="BannerBeneficio-appointment-description">
          Descubra os benefícios que preparamos para você.
        </span>
        <span className="BannerBeneficio-appointment-description">
          Insira seus contatos abaixo para agendar uma consulta ou discutir os detalhes conosco.
        </span>
        <form>
          <div className="BannerBeneficio-form-group">
            <input type="text" placeholder="Seu nome *" required />
            <span className="BannerBeneficio-error-message">O campo de texto é obrigatório.</span>
          </div>
          <div className="BannerBeneficio-form-group">
            <input type="email" placeholder="Seu endereço de email *" required />
            <span className="BannerBeneficio-error-message">O campo de texto é obrigatório.</span>
          </div>
          <div className="BannerBeneficio-form-group">
            <input type="tel" placeholder="Número de telefone *" required />
            <span className="BannerBeneficio-error-message">O campo de texto é obrigatório.</span>
          </div>
          <button type="submit" className="BannerBeneficio-submit-button">Agendar agora</button>
        </form>
        <span className="BannerBeneficio-availability-message">Aproveite, temos um número limitado de vagas este mês.</span>
      </div>
    </div>
  );
};

export default AppointmentForm;
