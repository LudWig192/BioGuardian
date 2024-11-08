import React from 'react';
import '../Style/ModalFuncionario.css';

const ModalFuncionarios = ({ isOpen, onClose, onAddFuncionario, dadosFuncionario, setDadosFuncionario, onExcluir }) => {
  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosFuncionario(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="funcionarioModal-overlay">
      <div className="funcionario-Modal-content">
        <h2 className="funcionarioModal-title">
          {dadosFuncionario.idFuncionario ? 'Editar Funcionário' : 'Adicionar Funcionário'}
        </h2>
        <form onSubmit={onAddFuncionario} className="modal-funcionarios-form">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={dadosFuncionario.nome}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="especialidade"
            placeholder="Especialidade"
            value={dadosFuncionario.especialidade}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="numeroRegistro"
            placeholder="Número do Registro"
            value={dadosFuncionario.numeroRegistro}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="horarioTrabalho"
            placeholder="Ex: 10:00-12:00"
            value={dadosFuncionario.horarioTrabalho}
            onChange={handleChange}
            required
          />
          <select
            name="status"
            value={dadosFuncionario.status}
            onChange={handleChange}
            required
          >
            <option value="">Selecione o Status</option>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>

          <select
            name="em_trabalho"
            value={dadosFuncionario.em_trabalho}
            onChange={handleChange}
            required
          >
            <option value="">Selecione o Em Trabalho</option>
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </select>

          <div className="funcionarioModal-buttons">
            <button className="salvar-modFun" type="submit">
              {dadosFuncionario.idFuncionario ? 'Salvar' : 'Adicionar'}
            </button>
            <button className="Fechar-modFun" type="button" onClick={onClose}>Fechar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalFuncionarios;
