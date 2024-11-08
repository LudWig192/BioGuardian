import React, { useState, useEffect } from 'react';
import '../Style/Funcionarios.css';
import { FaFilter, FaPlus } from 'react-icons/fa';
import ModalFuncionarios from '../Components/ModalFuncionarios.jsx';
import Administrador from "../Imagens/Administrador.png";

const FuncionariosPage = () => {
  const [funcionarios, setFuncionarios] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [currentIndex, setCurrentIndex] = useState(null);
  const [dadosFuncionario, setDadosFuncionario] = useState({
    nome: '',
    numeroRegistro: '',
    horarioTrabalho: '',
    status: '',
    especialidade: '',
    em_trabalho: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    buscarFuncionarios();
    const intervalId = setInterval(buscarFuncionarios, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const buscarFuncionarios = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/funcionarios');
      if (!response.ok) throw new Error('Falha ao buscar funcionários');
      const data = await response.json();
      setFuncionarios(data);
    } catch (error) {
      console.error(error);
      setErrorMessage('Erro ao buscar funcionários. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleAdicionarFuncionario = async (e) => {
    e.preventDefault();
    const novoFuncionario = { ...dadosFuncionario, avatar: 'Administrador' };

    try {
      await fetch('http://localhost:3001/funcionarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoFuncionario),
      });
      buscarFuncionarios();
      fecharModal();
    } catch (error) {
      console.error(error);
      setErrorMessage('Erro ao adicionar um funcionário. Tente novamente.');
    }
  };

  const handleEditarFuncionario = async (e) => {
    e.preventDefault();
    const funcionarioAtualizado = { ...dadosFuncionario };

    try {
      await fetch(`http://localhost:3001/funcionarios/${funcionarios[currentIndex].idFuncionario}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(funcionarioAtualizado),
      });
      buscarFuncionarios();
      fecharModal();
    } catch (error) {
      console.error(error);
      setErrorMessage('Erro ao editar um funcionário. Tente novamente.');
    }
  };

  const handleExcluirFuncionario = async (index) => {
    if (index !== null && window.confirm("Tem certeza que deseja excluir este funcionário?")) {
      try {
        await fetch(`http://localhost:3001/funcionarios/${funcionarios[index].idFuncionario}`, {
          method: 'DELETE',
        });
        buscarFuncionarios();
      } catch (error) {
        console.error(error);
        setErrorMessage('Erro ao excluir um funcionário. Tente novamente.');
      }
    }
  };

  const resetarDadosFuncionario = () => {
    setDadosFuncionario({
      nome: '',
      numeroRegistro: '',
      horarioTrabalho: '',
      status: '',
      especialidade: '',
      em_trabalho: '',
    });
    setCurrentIndex(null);
  };

  const handleModalShow = (tipo, index = null) => {
    setModalType(tipo);
    if (tipo === 'editar' && index !== null) {
      setCurrentIndex(index);
      setDadosFuncionario(funcionarios[index]);
    } else {
      resetarDadosFuncionario();
    }
    setIsModalOpen(true);
  };

  const fecharModal = () => {
    setIsModalOpen(false);
    resetarDadosFuncionario();
  };

  return (
    <div className="app-header-funcionarios">
      <div className="header-container-funcionarios"></div>
      {errorMessage && <div className="error-message-funcionarios">{errorMessage}</div>}
      {loading && <div className="loading-indicator-funcionarios">Carregando...</div>}
      <main>
        <div className="toolbar-funcionarios">
          <div className="button-group-funcionarios">
            <button className="button-custom filter-btn-funcionarios" aria-label="Filtrar funcionários">
              <FaFilter /> Filtrar
            </button>
            <button
              className="button-custom primary add-doctor-btn-funcionarios"
              onClick={() => handleModalShow('adicionar')}
              aria-label="Adicionar um novo funcionário"
            >
              <FaPlus /> Adicionar um novo Funcionário
            </button>
          </div>
        </div>
        <table className="funcionario-table-funcionarios">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Especialidade</th>
              <th>Número do Registro</th>
              <th>Horário de Trabalho</th>
              <th>Status</th>
              <th>Em trabalho</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {funcionarios.map((funcionario, index) => (
              <tr key={funcionario.idFuncionario}>
                <td data-label="Nome">{funcionario.nome}</td>
                <td data-label="Especialidade">{funcionario.especialidade}</td>
                <td data-label="Número do Registro">{funcionario.numeroRegistro}</td>
                <td data-label="Horário de Trabalho">{funcionario.horarioTrabalho}</td>
                <td data-label="Status">
                  <span className={`status-badge-funcionarios ${funcionario.status === 'ativo' ? 'active-funcionarios' : 'inactive-funcionarios'}`}>
                    {funcionario.status}
                  </span>
                </td>
                <td data-label="Em Trabalho">
                  <span>{funcionario.em_trabalho === 'sim' ? 'Sim' : 'Não'}</span>
                </td>
                <td data-label="Ações">
                  <button className="button-custom edit-btn-funcionarios" onClick={() => handleModalShow('editar', index)} aria-label="Editar funcionário">
                    Editar
                  </button>
                  <button className="button-custom delete-btn-funcionarios" onClick={() => handleExcluirFuncionario(index)} aria-label="Excluir funcionário">
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      {isModalOpen && (
        <ModalFuncionarios
          isOpen={isModalOpen}
          onClose={fecharModal}
          onAddFuncionario={modalType === 'adicionar' ? handleAdicionarFuncionario : handleEditarFuncionario}
          dadosFuncionario={dadosFuncionario}
          setDadosFuncionario={setDadosFuncionario}
          onExcluir={() => handleExcluirFuncionario(currentIndex)}
        >
          <form onSubmit={modalType === 'adicionar' ? handleAdicionarFuncionario : handleEditarFuncionario}>
            <div>
              <label>Número do Registro:</label>
              <input
                type="text"
                value={dadosFuncionario.numeroRegistro}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value) || value === '') {
                    setDadosFuncionario({ ...dadosFuncionario, numeroRegistro: value });
                  }
                }}
                required
                placeholder="Número do Registro"
              />
            </div>
            <div>
              <label>Especialidade:</label>
              <input
                type="text"
                value={dadosFuncionario.especialidade}
                onChange={(e) => setDadosFuncionario({ ...dadosFuncionario, especialidade: e.target.value })}
                required
                placeholder="Especialidade"
              />
            </div>
            <div>
              <label>Em Trabalho:</label>
              <select
                value={dadosFuncionario.em_trabalho}
                onChange={(e) => setDadosFuncionario({ ...dadosFuncionario, em_trabalho: e.target.value })}
                required
              >
                <option value="">Selecione o status</option>
                <option value="sim">Sim</option>
                <option value="não">Não</option>
              </select>
            </div>
            <button type="submit" className="button-custom primary">
              {modalType === 'adicionar' ? 'Adicionar' : 'Salvar'}
            </button>
          </form>
        </ModalFuncionarios>
      )}
    </div>
  );
};

export default FuncionariosPage;
