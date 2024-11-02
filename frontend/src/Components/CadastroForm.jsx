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
    <div className='cadastro-tudo'>
      <div className='cadastro-container'>
        <h2 className='cadastro-titulo'>Cadastro</h2>
        <form onSubmit={handleSubmit} className='cadastro-form'>
          <div className="cadastro-input-wrapper">
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              className="form-control"
              required
            />
            <i className="material-symbols-rounded">
              person
            </i>
          </div>

          <div className="cadastro-input-wrapper">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
            <i className="material-symbols-outlined">
              mail
            </i>
          </div>

          <div className="cadastro-input-wrapper">
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleChange}
              className="form-control"
              required
            />
            <i className="material-symbols-rounded">
              lock
            </i>
          </div>

          <div className="cadastro-checkbox">
            <label>
              <input
                type="checkbox"
                required
              />
              Aceito os termos e condições
            </label>
          </div>

          <button type="submit" className="cadastro-btn">Cadastrar</button>
        </form>

        <p className='cadastro-redi-log'>Já tem<Link to="/Login">Login?</Link></p>
      </div>
    </div>
  );
};

export default CadastroForm;