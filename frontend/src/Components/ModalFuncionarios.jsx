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
        <h2 className="funcionarioModal-title">
          {dadosMedico.idMedico ? 'Editar Médico' : 'Adicionar Médico'}
        </h2>
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
            placeholder="Ex: 10:00-12:00"
            value={dadosMedico.horarioTrabalho}
            onChange={handleChange}
            required
          />

          {/* Campo de seleção para Status */}
          <select
            name="status"
            value={dadosMedico.status}
            onChange={handleChange}
            required
          >
            <option value="">Selecione o Status</option>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>

          {/* Campo de seleção para Plantão */}
          <select
            name="plantao"
            value={dadosMedico.plantao}
            onChange={handleChange}
            required
          >
            <option value="">Selecione Plantão</option>
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </select>

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
