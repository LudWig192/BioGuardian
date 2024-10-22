import React from 'react';
import '../Style/ModalFuncionario.css';

const ModalFuncionarios = ({ isOpen, onClose, onAddDoctor, dadosMedico, setDadosMedico, onExcluir }) => {
  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosMedico(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="funcionarioModal-overlay">
      <div className="funcionario-Modal-content">
        <h2 className="funcionarioModal-title">{dadosMedico.idMedico ? 'Editar Médico' : 'Adicionar Médico'}</h2>
        <form onSubmit={onAddDoctor}>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={dadosMedico.nome}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="especialidade"
            placeholder="Especialidade"
            value={dadosMedico.especialidade}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="numeroRegistro"
            placeholder="Número do Registro"
            value={dadosMedico.numeroRegistro}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="horarioTrabalho"
            placeholder="Horário de Trabalho (Ex: 08:00 - 17:00)"
            value={dadosMedico.horarioTrabalho}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="status"
            placeholder="Status"
            value={dadosMedico.status}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="plantao"
            placeholder="Plantão"
            value={dadosMedico.plantao}
            onChange={handleChange}
          />
          <div className="funcionarioModal-buttons">
            <button type="submit">{dadosMedico.idMedico ? 'Salvar' : 'Adicionar'}</button>
            
            <button type="button" onClick={onClose}>Fechar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalFuncionarios;
