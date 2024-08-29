import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Style/Funcionario.css';

const TabelaFuncionarios = () => {
    const [medicos, setMedicos] = useState([]);
    const [plantaoMedicos, setPlantaoMedicos] = useState([
        { nome: 'Dr. João Silva', especialidade: 'Cardiologia', numeroRegistro: '12345', horarioTrabalho: '08:00 - 14:00', status: 'Ativo', plantao: 'Sim' },
        { nome: 'Dra. Maria Oliveira', especialidade: 'Neurologia', numeroRegistro: '23456', horarioTrabalho: '14:00 - 20:00', status: 'Ativo', plantao: 'Sim' },
        { nome: 'Dr. Pedro Santos', especialidade: 'Pediatria', numeroRegistro: '34567', horarioTrabalho: '20:00 - 02:00', status: 'Ativo', plantao: 'Sim' },
        { nome: 'Dra. Ana Costa', especialidade: 'Ortopedia', numeroRegistro: '45678', horarioTrabalho: '02:00 - 08:00', status: 'Ativo', plantao: 'Sim' }
    ]);
    const [showModal, setShowModal] = useState(false);
    const [showPlantao, setShowPlantao] = useState(false);
    const [modalType, setModalType] = useState('');
    const [currentIndex, setCurrentIndex] = useState(null);
    const [formValues, setFormValues] = useState({
        nome: '',
        especialidade: '',
        numeroRegistro: '',
        horarioTrabalhoInicio: '',
        horarioTrabalhoFim: '',
        status: '',
        plantao: ''
    });

    const handleClose = () => setShowModal(false);
    const handleShow = (type, index = null) => {
        setModalType(type);
        setCurrentIndex(index);
        setFormValues(index !== null ? {
            ...medicos[index],
            horarioTrabalhoInicio: medicos[index].horarioTrabalho.split(' - ')[0],
            horarioTrabalhoFim: medicos[index].horarioTrabalho.split(' - ')[1]
        } : {
            nome: '',
            especialidade: '',
            numeroRegistro: '',
            horarioTrabalhoInicio: '',
            horarioTrabalhoFim: '',
            status: '',
            plantao: ''
        });
        setShowModal(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({ ...prevValues, [name]: value }));
    };

    const validateTimeFormat = (startTime, endTime) => {
        const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
        return timeRegex.test(startTime) && timeRegex.test(endTime);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateTimeFormat(formValues.horarioTrabalhoInicio, formValues.horarioTrabalhoFim)) {
            alert('Formato de horário inválido. Use HH:MM');
            return;
        }
        const horarioTrabalho = `${formValues.horarioTrabalhoInicio} - ${formValues.horarioTrabalhoFim}`;
        if (modalType === 'add') {
            setMedicos([...medicos, { ...formValues, horarioTrabalho }]);
        } else if (modalType === 'edit') {
            const updatedMedicos = medicos.map((medico, index) =>
                index === currentIndex ? { ...formValues, horarioTrabalho } : medico
            );
            setMedicos(updatedMedicos);
        } else if (modalType === 'delete' && currentIndex !== null) {
            if (window.confirm('Tem certeza de que deseja excluir este médico?')) {
                setMedicos(medicos.filter((_, i) => i !== currentIndex));
            }
        }
        handleClose();
    };

    return (
        <div className="table-container">
            <div className="button-container">
                <Button className="btn-add" onClick={() => { setShowPlantao(false); handleShow('add'); }}>
                    Adicionar Médico
                </Button>
                <Button className="btn-plantao" onClick={() => setShowPlantao(true)}>
                    Médicos em plantão
                </Button>
            </div>

            <div className="table-wrapper">
                <table className={`table-add ${showPlantao ? 'd-none' : ''}`}>
                    <thead>
                        <tr>
                            <th>Nome Completo</th>
                            <th>Especialidade</th>
                            <th>Número de Registro</th>
                            <th>Horário de Trabalho</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medicos.map((medico, index) => (
                            <tr key={index}>
                                <td>{medico.nome}</td>
                                <td>{medico.especialidade}</td>
                                <td>{medico.numeroRegistro}</td>
                                <td>{medico.horarioTrabalho}</td>
                                <td>{medico.status}</td>
                                <td className="actions">
                                    <i
                                        className="bi bi-pencil-square edit-icon"
                                        onClick={() => handleShow('edit', index)}
                                        aria-label={`Editar ${medico.nome}`}
                                    ></i>
                                    <i
                                        className="bi bi-trash delete-icon"
                                        onClick={() => handleShow('delete', index)}
                                        aria-label={`Excluir ${medico.nome}`}
                                    ></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <table className={`table-oncall ${!showPlantao ? 'd-none' : ''}`}>
                    <thead>
                        <tr>
                            <th>Nome Completo</th>
                            <th>Especialidade</th>
                            <th>Número de Registro</th>
                            <th>Horário de Trabalho</th>
                            <th>Status</th>
                            <th>Plantão</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plantaoMedicos.map((medico, index) => (
                            <tr key={index}>
                                <td>{medico.nome}</td>
                                <td>{medico.especialidade}</td>
                                <td>{medico.numeroRegistro}</td>
                                <td>{medico.horarioTrabalho}</td>
                                <td>{medico.status}</td>
                                <td>{medico.plantao}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {modalType === 'edit' ? 'Editar Médico' : modalType === 'delete' ? 'Excluir Médico' : 'Adicionar Médico'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalType === 'delete' ? (
                        <p>Tem certeza de que deseja excluir este médico?</p>
                    ) : (
                        <Form>
                            <Form.Group controlId="nome">
                                <Form.Label>Nome Completo</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nome"
                                    value={formValues.nome}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="especialidade">
                                <Form.Label>Especialidade</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="especialidade"
                                    value={formValues.especialidade}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="numeroRegistro">
                                <Form.Label>Número de Registro</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="numeroRegistro"
                                    value={formValues.numeroRegistro}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="horarioTrabalhoInicio">
                                <Form.Label>Horário de Trabalho Início</Form.Label>
                                <Form.Control
                                    type="time"
                                    name="horarioTrabalhoInicio"
                                    value={formValues.horarioTrabalhoInicio}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="horarioTrabalhoFim">
                                <Form.Label>Horário de Trabalho Fim</Form.Label>
                                <Form.Control
                                    type="time"
                                    name="horarioTrabalhoFim"
                                    value={formValues.horarioTrabalhoFim}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="status">
                                <Form.Label>Status</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="status"
                                    value={formValues.status}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="plantao">
                                <Form.Label>Plantão</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="plantao"
                                    value={formValues.plantao}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-custom-secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button className="btn-custom-primary" onClick={handleSubmit}>
                        {modalType === 'delete' ? 'Excluir' : 'Salvar'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default TabelaFuncionarios;
