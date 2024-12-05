import React, { useState } from 'react';
import axios from 'axios'; 
import '../Style/Contato.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import fundo from '../Imagens/fundo.png';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
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

    if (!formData.nome || !formData.email || !formData.mensagem) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/contato', formData);

      if (response.status === 200) {
        alert('Mensagem enviada com sucesso!');
        setFormData({
          nome: '',
          email: '',
          mensagem: '',
        });
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
            <label>Nome Completo </label>
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
            <label>Email ou telefone</label>
            <input
              type="text"
              placeholder="Email ou telefone"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>
          <div className="contato-form-group full-width">
            <label>Mensagem</label>
            <textarea
              placeholder="Mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="contato-submit-button">Enviar Solicitação</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
