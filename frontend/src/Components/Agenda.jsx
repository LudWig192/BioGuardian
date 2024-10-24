import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import Modal from '../Components/Modal_Exames';
import '../Style/Agenda.css';

const ResponsiveTable = ({ data, onEdit, onDelete, onAdd }) => {
    const [modalData, setModalData] = useState(null);
    const [modalType, setModalType] = useState('');
    const [formData, setFormData] = useState({
        agendamento: '',
        paciente: '',
        status: '',
        procedimentos: '',
        tipoPlano: ''
    });

    const handleOpenModal = (type, item = {}) => {
        setModalType(type);
        setModalData(item);
        setFormData(item);
    };

    const handleCloseModal = () => {
        setModalData(null);
        setModalType('');
        setFormData({
            agendamento: '',
            paciente: '',
            status: '',
            procedimentos: '',
            tipoPlano: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault(); // Verifica se e não é indefinido
        try {
            if (modalType === 'add') {
                await onAdd(formData);
            } else if (modalType === 'edit') {
                await onEdit(formData);
            } else if (modalType === 'delete' && modalData) {
                if (window.confirm('Tem certeza de que deseja excluir este item?')) {
                    await onDelete(modalData.id);
                }
            }
        } catch (error) {
            console.error('Erro ao realizar a operação:', error);
            alert('Houve um problema ao realizar a operação. Por favor, tente novamente.');
        }
        handleCloseModal();
    };

    return (
        <div className="table-container">
            <button
                className="add-button"
                onClick={() => handleOpenModal('add')}
                aria-label="Adicionar novo agendamento"
            >
                <FaPlus /> Novo agendamento
            </button>

            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Agendamento</th>
                        <th>Paciente</th>
                        <th>Status</th>
                        <th>Procedimentos</th>
                        <th>Tipo de Plano</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td data-label="Agendamento"><span>{item.agendamento}</span></td>
                            <td data-label="Paciente"><span>{item.paciente}</span></td>
                            <td data-label="Status"><span>{item.status}</span></td>
                            <td data-label="Procedimentos"><span>{item.procedimentos}</span></td>
                            <td data-label="Tipo de Plano"><span>{item.tipoPlano}</span></td>
                            <td className="actions">
                                <FaEdit
                                    className="icon edit-icon"
                                    onClick={() => handleOpenModal('edit', item)}
                                    aria-label={`Editar ${item.paciente}`}
                                />
                                <FaTrash
                                    className="icon delete-icon"
                                    onClick={() => handleOpenModal('delete', item)}
                                    aria-label={`Excluir ${item.paciente}`}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {modalData && (
                <Modal
                    type={modalType}
                    data={formData}
                    onClose={handleCloseModal}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
            )}
        </div>
    );
};

export default ResponsiveTable;
