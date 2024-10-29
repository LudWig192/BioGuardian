import React, { useState } from 'react';
import axios from 'axios';
import '../Style/Cadastro.css';
import { Link } from 'react-router-dom';

const CadastroForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    role: 'comum'
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
    try {
      const response = await axios.post('http://localhost:3001/cadastros', formData);
      alert(response.data.message);
      setFormData({
        nome: '',
        email: '',
        senha: '',
        role: 'comum'
      });
    } catch (error) {
      console.error('Erro ao criar cadastro:', error);
      if (error.response && error.response.status === 409) {
        alert(error.response.data.message);
      } else {
        alert('Erro ao criar cadastro. Verifique o console para mais detalhes.');
      }
    }
  };

  return (
    <div className="Background">
      <div className="container">
        <div className="form-container">
          <h2>Cadastro</h2>
          <form onSubmit={handleSubmit} className="custom-form">
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              className="form-control"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleChange}
              className="form-control"
              required
            />
            <label className="form-check-label">
              <input type="checkbox" required />
              Concordo com os termos de uso
            </label>
            <button type="submit" className="btn-primary">Salvar</button>
          </form>
          <div className="red-lgn">
            <p>Não tem <span className="link-text"><Link to="/Login">Login?</Link></span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroForm;