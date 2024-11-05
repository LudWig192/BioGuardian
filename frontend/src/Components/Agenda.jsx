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
        setFormData({
            agendamento: item.agendamento || '',
            paciente: item.paciente || '',
            status: item.status || '',
            procedimentos: item.procedimentos || '',
            tipoPlano: item.tipoPlano || ''
        });
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

    return (
        <div className="table-Agenda">
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
                        <tr key={item.idAgenda}>
                            <td>{item.agendamento}</td>
                            <td>{item.paciente}</td>
                            <td>{item.status}</td>
                            <td>{item.procedimentos}</td>
                            <td>{item.tipoPlano}</td>
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
                    onSubmit={async () => {
                        if (modalType === 'add') {
                            await onAdd(formData);
                        } else if (modalType === 'edit') {
                            await onEdit({ ...modalData, ...formData });
                        } else if (modalType === 'delete') {
                            await onDelete(modalData.idAgenda);
                        }
                        handleCloseModal();
                    }}
                />
            )}
        </div>
    );
};
export default ResponsiveTable;

