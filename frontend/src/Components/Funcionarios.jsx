import React, { useState, useEffect } from 'react';
import '../Style/Funcionarios.css';
import { FaBell, FaFilter, FaPlus } from 'react-icons/fa';
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

  useEffect(() => {
    buscarMedicos();
    const intervalId = setInterval(buscarMedicos, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const buscarMedicos = async () => {
    try {
      const response = await fetch('http://localhost:3001/medicos');
      if (!response.ok) throw new Error('Falha ao buscar médicos');
      const data = await response.json();
      setMedicos(data);
    } catch (error) {
      console.error(error);
      alert('Erro ao buscar médicos. Tente novamente.');
    }
  };

  const handleAdicionarMedico = async (e) => {
    e.preventDefault();
    const novoMedico = { ...dadosMedico, avatar: Administrador };

    await fetch('http://localhost:3001/medicos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoMedico),
    });

    buscarMedicos();
    setIsModalOpen(false);
    resetarDadosMedico();
  };

  const handleEditarMedico = async (e) => {
    e.preventDefault();
    const medicoAtualizado = { ...dadosMedico };

    await fetch(`http://localhost:3001/medicos/${medicos[currentIndex].idMedico}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(medicoAtualizado),
    });

    buscarMedicos();
    setIsModalOpen(false);
    resetarDadosMedico();
  };

  const handleExcluirMedico = async (index) => {
    if (index !== null) {
      await fetch(`http://localhost:3001/medicos/${medicos[index].idMedico}`, {
        method: 'DELETE',
      });
      buscarMedicos();
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

  return (
    <div className="app-header funcionario">
      <div className="header-container funcionario">
        <div className="search-bar-container funcionario">
          <input type="text" className="search-bar funcionario" placeholder="Buscar médicos..." />
        </div>
        <div className="user-info funcionario">
          <span className="user-name funcionario">Admin</span>
          <span className="user-email funcionario">Adm@medley.com</span>
        </div>
      </div>
      <main className="funcionario">
        <div className="toolbar funcionario">
          <div className="button-group-funcionario funcionario">
            <button className="button-custom filter-btn funcionario">
              <FaFilter /> Filtrar
            </button>
            <button className="button-custom primary add-doctor-btn funcionario" onClick={() => handleModalShow('adicionar')}>
              <FaPlus /> Adicionar um novo Médico
            </button>
          </div>
        </div>
        <table className="product-table funcionario">
          <thead>
            <tr className="funcionario">
              <th className="funcionario">Nome</th>
              <th className="funcionario">Especialidade</th>
              <th className="funcionario">Número do Registro</th>
              <th className="funcionario">Horário de Trabalho</th>
              <th className="funcionario">Status</th>
              <th className="funcionario">Plantão</th>
              <th className="funcionario">Ações</th>
            </tr>
          </thead>
          <tbody>
            {medicos.map((medico, index) => (
              <tr key={medico.idMedico} className="funcionario">
                <td className="funcionario">{medico.nome}</td>
                <td className="funcionario">{medico.especialidade}</td>
                <td className="funcionario">{medico.numeroRegistro}</td>
                <td className="funcionario">{medico.horarioTrabalho}</td>
                <td className="funcionario">
                  <span className={`status-badge ${medico.status === 'ativo' ? 'active' : 'inactive'}`}>
                    {medico.status}
                  </span>
                </td>
                <td className="funcionario">{medico.plantao}</td>
                <td className="funcionario">
                  <button className="button-custom" onClick={() => handleModalShow('editar', index)}>
                    Editar
                  </button>
                  <button className="button-custom red" onClick={() => handleExcluirMedico(index)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      {
        isModalOpen && (
          <ModalFuncionarios
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAddDoctor={modalType === 'adicionar' ? handleAdicionarMedico : handleEditarMedico}
            dadosMedico={dadosMedico}
            setDadosMedico={setDadosMedico}
            onExcluir={() => handleExcluirMedico(currentIndex)}
          />
        )
      }
    </div >
  );
};

export default FuncionariosPage;
