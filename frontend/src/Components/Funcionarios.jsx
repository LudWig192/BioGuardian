import React, { useState } from 'react';
import '../Style/Funcionarios.css';
import { FaBell, FaFilter, FaPlus } from 'react-icons/fa';
import Modal from '../Components/ModalFuncionarios.jsx';
import Administrador from "../Imagens/Administrador.png";

const App = () => {
  const [doctors, setDoctors] = useState([]); // Inicializa como array vazio
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doctorData, setDoctorData] = useState({
    name: '',
    email: '',
    schedule: '',
    status: 'active',
    specialty: '',
  });

  const handleAddDoctor = (e) => {
    e.preventDefault();
    const newDoctor = {
      id: `#DOC00${doctors.length + 1}`,
      ...doctorData,
      avatar: Administrador,
    };
    setDoctors([...doctors, newDoctor]);
    setIsModalOpen(false);
    setDoctorData({ name: '', email: '', schedule: '', status: 'active', specialty: '' });
  };

  const handleFilter = () => {
    console.log('Filter clicked');
  };

  const handleViewDetails = (doctor) => {
    // Logic to show a modal or display details
    console.log('Viewing details for:', doctor);
    // Aqui você pode abrir outro modal com detalhes do médico, se necessário
  };

  return (
    <div className="app funcionario">
      <div className="app-header funcionario">
        <div className="header-container funcionario">
          <div className="search-bar-container funcionario">
            <input type="text" className="search-bar funcionario" placeholder="Search doctors..." />
          </div>
          <div className="icon-container funcionario">
            <div className="user-profile funcionario">
              <img className="avatar-funcionario" src={Administrador} alt="User Avatar" />
              <div className="user-info funcionario">
                <span className="user-name funcionario">Admin</span>
                <span className="user-email funcionario">admin@example.com</span>
              </div>
              <FaBell className="large-icon funcionario" />
            </div>
          </div>
        </div>
      </div>
      <main className="funcionario">
        <div className="toolbar funcionario">
          <div className="button-group-funcionario funcionario">
            <button className="button-custom filter-btn funcionario" onClick={handleFilter}>
              <FaFilter /> Filter
            </button>
            <button className="button-custom primary add-doctor-btn funcionario" onClick={() => setIsModalOpen(true)}>
              <FaPlus /> Add New Doctor
            </button>
          </div>
        </div>
        <table className="product-table funcionario">
          <thead>
            <tr className="funcionario">
              <th className="funcionario">Avatar</th>
              <th className="funcionario">ID</th>
              <th className="funcionario">Name</th>
              <th className="funcionario">Email</th>
              <th className="funcionario">Horário</th>
              <th className="funcionario">Especialidade</th>
              <th className="funcionario">Status</th>
              <th className="funcionario">Actions</th> {/* Nova coluna para ações */}
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id} className="funcionario">
                <td className="funcionario">
                  <img src={doctor.avatar} alt={doctor.name} className="funcionario" />
                </td>
                <td className="funcionario">{doctor.id}</td>
                <td className="funcionario">{doctor.name}</td>
                <td className="funcionario">{doctor.email}</td>
                <td className="funcionario">{doctor.schedule}</td>
                <td className="funcionario">{doctor.specialty}</td>
                <td className="funcionario">
                  <span className={`status-badge ${doctor.status === 'active' ? 'active' : 'inactive'}`}>
                    {doctor.status}
                  </span>
                </td>
                <td className="funcionario">
                  <button className="button-custom" onClick={() => handleViewDetails(doctor)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddDoctor={handleAddDoctor}
          doctorData={doctorData}
          setDoctorData={setDoctorData}
        />
      )}
    </div>
  );
};

export default App;
