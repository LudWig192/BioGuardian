import React, { useState, useEffect } from 'react';
import '../Style/Funcionarios.css';
import { FaFilter, FaPlus } from 'react-icons/fa';
import ModalFuncionarios from '../Components/ModalFuncionarios.jsx';
import Administrador from "../Imagens/Administrador.png";

const FuncionariosPage = () => {
  const [medicos, setMedicos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [currentIndex, setCurrentIndex] = useState(null);
  const [dadosMedico, setDadosMedico] = useState({
    nome: '',
    numeroRegistro: '',
    horarioTrabalho: '',
    status: '',
    especialidade: '',
    plantao: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    buscarMedicos();
    const intervalId = setInterval(buscarMedicos, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const buscarMedicos = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/medicos');
      if (!response.ok) throw new Error('Falha ao buscar médicos');
      const data = await response.json();
      setMedicos(data);
    } catch (error) {
      console.error(error);
      setErrorMessage('Erro ao buscar médicos. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleAdicionarMedico = async (e) => {
    e.preventDefault();
    const novoMedico = { ...dadosMedico, avatar: Administrador };

    try {
      await fetch('http://localhost:3001/medicos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoMedico),
      });
      buscarMedicos();
      fecharModal();
    } catch (error) {
      console.error(error);
      setErrorMessage('Erro ao adicionar médico. Tente novamente.');
    }
  };

  const handleEditarMedico = async (e) => {
    e.preventDefault();
    const medicoAtualizado = { ...dadosMedico };

    try {
      await fetch(`http://localhost:3001/medicos/${medicos[currentIndex].idMedico}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(medicoAtualizado),
      });
      buscarMedicos();
      fecharModal();
    } catch (error) {
      console.error(error);
      setErrorMessage('Erro ao editar médico. Tente novamente.');
    }
  };

  const handleExcluirMedico = async (index) => {
    if (index !== null && window.confirm("Tem certeza que deseja excluir este médico?")) {
      try {
        await fetch(`http://localhost:3001/medicos/${medicos[index].idMedico}`, {
          method: 'DELETE',
        });
        buscarMedicos();
      } catch (error) {
        console.error(error);
        setErrorMessage('Erro ao excluir médico. Tente novamente.');
      }
    }
  };

  const resetarDadosMedico = () => {
    setDadosMedico({
      nome: '',
      numeroRegistro: '',
      horarioTrabalho: '',
      status: '',
      especialidade: '',
      plantao: '',
    });
    setCurrentIndex(null);
  };

  const handleModalShow = (tipo, index = null) => {
    setModalType(tipo);
    if (tipo === 'editar' && index !== null) {
      setCurrentIndex(index);
      setDadosMedico(medicos[index]);
    } else {
      resetarDadosMedico();
    }
    setIsModalOpen(true);
  };

  const fecharModal = () => {
    setIsModalOpen(false);
    resetarDadosMedico();
  };

  return (
    <div className="app-header-funcionarios">
      <div className="header-container-funcionarios"></div>
      {errorMessage && <div className="error-message-funcionarios">{errorMessage}</div>}
      {loading && <div className="loading-indicator-funcionarios">Carregando...</div>}
      <main>
        <div className="toolbar-funcionarios">
          <div className="button-group-funcionarios">
            <button className="button-custom filter-btn-funcionarios" aria-label="Filtrar médicos">
              <FaFilter /> Filtrar
            </button>
            <button
              className="button-custom primary add-doctor-btn-funcionarios"
              onClick={() => handleModalShow('adicionar')}
              aria-label="Adicionar um novo médico"
            >
              <FaPlus /> Adicionar um novo Médico
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
              <th>Plantão</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {medicos.map((medico, index) => (
              <tr key={medico.idMedico}>
                <td data-label="Nome">{medico.nome}</td>
                <td data-label="Especialidade">{medico.especialidade}</td>
                <td data-label="Número do Registro">{medico.numeroRegistro}</td>
                <td data-label="Horário de Trabalho">{medico.horarioTrabalho}</td>
                <td data-label="Status">
                  <span className={`status-badge-funcionarios ${medico.status === 'ativo' ? 'active-funcionarios' : 'inactive-funcionarios'}`}>
                    {medico.status}
                  </span>
                </td>
                <td data-label="Plantão">{medico.plantao}</td>
                <td data-label="Ações">
                  <button className="button-custom edit-btn-funcionarios" onClick={() => handleModalShow('editar', index)} aria-label="Editar médico">
                    Editar
                  </button>
                  <button className="button-custom delete-btn-funcionarios" onClick={() => handleExcluirMedico(index)} aria-label="Excluir médico">
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
          onAddDoctor={modalType === 'adicionar' ? handleAdicionarMedico : handleEditarMedico}
          dadosMedico={dadosMedico}
          setDadosMedico={setDadosMedico}
          onExcluir={() => handleExcluirMedico(currentIndex)}
        >
          <form onSubmit={modalType === 'adicionar' ? handleAdicionarMedico : handleEditarMedico}>
            <div>
              <label>Número do Registro:</label>
              <input
                type="text"
                value={dadosMedico.numeroRegistro}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value) || value === '') {
                    setDadosMedico({ ...dadosMedico, numeroRegistro: value });
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
                value={dadosMedico.especialidade}
                onChange={(e) => setDadosMedico({ ...dadosMedico, especialidade: e.target.value })}
                required
                placeholder="Especialidade"
              />
            </div>
            <div>
              <label>Plantão:</label>
              <select
                value={dadosMedico.plantao}
                onChange={(e) => setDadosMedico({ ...dadosMedico, plantao: e.target.value })}
                required
              >
                <option value="">Selecione o plantão</option>
                <option value="Diurno">Diurno</option>
                <option value="Vespertino">Vespertino</option>
                <option value="Noturno">Noturno</option>
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
