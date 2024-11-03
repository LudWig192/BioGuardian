import React, { useState } from 'react';
import axios from 'axios';
import '../Style/Contato.css';

const ContatoForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.mensagem) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      await axios.post('http://localhost:3001/contato', formData);
      alert('Solicitação de contato enviada com sucesso!');
      setFormData({
        nome: '',
        email: '',
        mensagem: ''
      });
    } catch (error) {
      console.error('Erro na solicitação de contato:', error);
      alert('Erro ao enviar a solicitação de contato. Verifique o console para mais detalhes.');
    }
  };

  return (
    <div className='contato-tudo'>
      <div className="contato-form-container">
        <div className="contato-form">
          <span className="contato-heading">Entre em contato</span>
          <form onSubmit={handleSubmit}>
            <input
              name="nome"
              placeholder="Nome"
              type="text"
              className="contato-input"
              value={formData.nome}
              onChange={handleChange}
            />
            <input
              name="email"
              placeholder="Email ou telefone"
              type="text"
              className="contato-input"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="mensagem"
              placeholder="Escreva aqui e fale o que você precisa"
              rows="10"
              cols="30"
              className="contato-textarea"
              value={formData.mensagem}
              onChange={handleChange}
            />
            <div className="contato-button-container">
              <button type="submit" className="contato-send-button">Enviar</button>
              <div className="contato-reset-button-container">
                <button
                  type="button"
                  className="contato-reset-button"
                  onClick={() => setFormData({ nome: '', email: '', mensagem: '' })}>
                  Limpar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContatoForm;
