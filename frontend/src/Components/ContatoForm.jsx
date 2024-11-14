import React, { useState } from 'react';
import '../Style/Contato.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import fundo from '../Imagens/fundo.png'; // Importando a imagem

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    numero: '',
    email: '',
    assunto: '',
    comentarios: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('URL_DO_SEU_BACKEND', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
        setFormData({
          nome: '',
          numero: '',
          email: '',
          assunto: '',
          comentarios: '',
        });
      } else {
        alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro de conexão. Tente novamente.');
    }
  };

  return (
    <div
      className="contato-contact-container"
      style={{
        backgroundImage: `url(${fundo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="contato-contact-info">
        <div className="contato-title">
          <span>Entre em Contato</span>
        </div>
        <div className="contato-subtitle">
          <span>Fale Conosco</span>
        </div>
        <div className="contato-description">
          <span>
            O BioGuardian é um serviço de monitoramento de saúde que usa inteligência artificial para analisar o histórico médico e detectar anomalias. Em emergências, médicos de plantão são enviados para atendimento em sua casa.
          </span>
        </div>
        <div className="contato-info-detail">
          <span>Qualquer dúvida, estamos à disposição.</span>
        </div>

        <div className="contato-contact-detail">
          <FaPhoneAlt className="contato-icon" />
          <span>+55 11 98765-4321</span>
        </div>
        <div className="contato-contact-detail">
          <FaEnvelope className="contato-icon" />
          <span>contato@bioguardian.com.br</span>
        </div>
        <div className="contato-contact-detail">
          <FaMapMarkerAlt className="contato-icon" />
          <span>Avenida Paulista, 1234, São Paulo, SP</span>
        </div>
      </div>

      <div className="contato-contact-form">
        <form onSubmit={handleSubmit}>
          <div className="contato-form-group">
            <label>Nome Completo *</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contato-form-group">
            <label>Número</label>
            <input
              type="number"
              placeholder="Número"
              name="numero"
              value={formData.numero}
              onChange={handleChange}
              pattern="[0-9]*"
              title="Digite apenas números"
              required
            />
          </div>
          <div className="contato-form-group">
            <label>Email *</label>
            <input
              type="email"
              placeholder="Seu email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Por favor, insira um e-mail válido (exemplo@dominio.com)"
            />
          </div>
          <div className="contato-form-group">
            <label>Assunto *</label>
            <input
              type="text"
              placeholder="Assunto"
              name="assunto"
              value={formData.assunto}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contato-form-group full-width">
            <label>Comentários *</label>
            <textarea
              placeholder="Comentários"
              name="comentarios"
              value={formData.comentarios}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="contato-submit-button">Enviar Mensagem</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;