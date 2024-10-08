import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Style/Funcionario.css';

const TabelaFuncionarios = () => {
    const [medicos, setMedicos] = useState([]);
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

    const plantaoMedicos = [
        { nome: 'Dr. João Silva', especialidade: 'Cardiologia', numeroRegistro: '12345', horarioTrabalho: '08:00 - 14:00', status: 'Ativo', plantao: 'Sim' },
        { nome: 'Dra. Maria Oliveira', especialidade: 'Neurologia', numeroRegistro: '23456', horarioTrabalho: '14:00 - 20:00', status: 'Ativo', plantao: 'Sim' },
        { nome: 'Dr. Pedro Santos', especialidade: 'Pediatria', numeroRegistro: '34567', horarioTrabalho: '20:00 - 02:00', status: 'Ativo', plantao: 'Sim' },
        { nome: 'Dra. Ana Costa', especialidade: 'Ortopedia', numeroRegistro: '45678', horarioTrabalho: '02:00 - 08:00', status: 'Ativo', plantao: 'Sim' }
    ];

    useEffect(() => {
        fetchMedicos();
        const intervalId = setInterval(fetchMedicos, 1000);
        return () => clearInterval(intervalId); 
    }, []);

    const fetchMedicos = async () => {
        const response = await fetch('http://localhost:3001/medicos');
        const data = await response.json();
        setMedicos(data);
    };

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const horarioTrabalho = `${formValues.horarioTrabalhoInicio} - ${formValues.horarioTrabalhoFim}`;

        if (!validateTimeFormat(formValues.horarioTrabalhoInicio, formValues.horarioTrabalhoFim)) {
            alert('Formato de horário inválido. Use HH:MM');
            return;
        }

        if (modalType === 'add') {
            await fetch('http://localhost:3001/medicos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formValues, horarioTrabalho }),
            });
        } else if (modalType === 'edit') {
            await fetch(`http://localhost:3001/medicos/${medicos[currentIndex].id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formValues, horarioTrabalho }),
            });
        } else if (modalType === 'delete' && currentIndex !== null) {
            await fetch(`http://localhost:3001/medicos/${medicos[currentIndex].id}`, {
                method: 'DELETE',
            });
        }

        fetchMedicos(); // Atualiza a lista após operação
        handleClose();
    };

    return (
        <div className="table-container">
            <div className="button-container">
                <Button className="btn-add" onClick={() => handleShow('add')}>
                    Adicionar Médico
                </Button>
                <Button className="btn-plantao" onClick={() => setShowPlantao(!showPlantao)}>
                    {showPlantao ? 'Ver Todos os Médicos' : 'Médicos em Plantão'}
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
                            <tr key={medico.id}>
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
