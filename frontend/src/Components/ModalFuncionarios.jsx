import React, { useEffect } from 'react';
import '../Style/ModalFuncionario.css';

const Modal = ({ type, data, onClose, onChange, onSubmit }) => {
  useEffect(() => {
    document.body.classList.add('blur-background');
    return () => {
      document.body.classList.remove('blur-background');
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (onChange) {
      onChange(e); // Garante que a função de onChange do componente pai seja chamada
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e); // Garante que a função de onSubmit do componente pai seja chamada
    }
  };

  // Função para gerar a lista de horários
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 6; hour <= 20; hour++) {
      const formattedHour = hour < 10 ? `0${hour}:00` : `${hour}:00`;
      options.push(<option key={formattedHour} value={formattedHour}>{formattedHour}</option>);
    }
    return options;
  };

  // Lista de especialidades
  const specialties = [
    'Cardiologista',
    'Neurologista',
    'Pediatra',
    'Oftalmologista',
    'Dermatologista',
    'Ginecologista',
    'Ortopedista',
    'Clinico Geral',
  ];

  return (
    <div className="funcionarioModal-overlay" onClick={onClose}>
      <div className="funcionarioModal-content" onClick={(e) => e.stopPropagation()}>
        <div className="funcionarioModal-title">Adicionar Novo Médico</div>
        <form onSubmit={handleFormSubmit} className="funcionarioModal-form">
          <label className="funcionarioModal-label">
            Imagem do Médico:
            <input
              type="url"
              name="avatar"
              value={data.avatar || ''} // Garante que o valor é controlado
              onChange={handleInputChange}
              placeholder="Insira a URL da imagem do médico"
              required
              className="funcionarioModal-input"
            />
          </label>
          <label className="funcionarioModal-label">
            Nome do Médico:
            <input
              type="text"
              name="name"
              value={data.name || ''} // Garante que o valor é controlado
              onChange={handleInputChange}
              placeholder="Insira o nome do médico"
              required
              className="funcionarioModal-input"
            />
          </label>
          <label className="funcionarioModal-label">
            ID:
            <input
              type="number"
              name="id"
              value={data.id || ''} // Garante que o valor é controlado
              onChange={handleInputChange}
              placeholder="Insira o ID do médico (apenas números)"
              required
              className="funcionarioModal-input"
            />
          </label>
          <label className="funcionarioModal-label">
            Horário de Início:
            <select
              name="start_time"
              value={data.start_time || ''} // Garante que o valor é controlado
              onChange={handleInputChange}
              required
              className="funcionarioModal-select"
            >
              <option value="">Selecione o horário de início</option>
              {generateTimeOptions()}
            </select>
          </label>
          <label className="funcionarioModal-label">
            Horário de Término:
            <select
              name="end_time"
              value={data.end_time || ''} // Garante que o valor é controlado
              onChange={handleInputChange}
              required
              className="funcionarioModal-select"
            >
              <option value="">Selecione o horário de término</option>
              {generateTimeOptions()}
            </select>
          </label>
          <label className="funcionarioModal-label">
            Email:
            <input
              type="email"
              name="email"
              value={data.email || ''} // Garante que o valor é controlado
              onChange={handleInputChange}
              placeholder="Insira o email do médico"
              required
              className="funcionarioModal-input"
            />
          </label>
          <label className="funcionarioModal-label">
            Especialidade:
            <select
              name="specialty"
              value={data.specialty || ''} // Garante que o valor é controlado
              onChange={handleInputChange}
              required
              className="funcionarioModal-select"
            >
              <option value="">Selecione a especialidade</option>
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </label>
          <label className="funcionarioModal-label">
            Status:
            <select
              name="status"
              value={data.status || 'active'} // Garante que o valor é controlado
              onChange={handleInputChange}
              required
              className="funcionarioModal-select"
            >
              <option value="active">Ativo</option>
              <option value="inactive">Inativo</option>
            </select>
          </label>
          <div className="funcionarioModal-buttons">
            <button type="submit" className="funcionarioModal-button">Adicionar</button>
            <button type="button" onClick={onClose} className="funcionarioModal-button">Fechar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
