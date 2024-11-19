import React, { useState } from 'react';
import '../Style/Medicos.css';

const Medicos = ({ selectedDate }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [formData, setFormData] = useState({
        fullName: '',
        birthDate: '',
        appointmentTime: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const doctorsData = [
        { name: 'Dr. João Silva', specialty: 'Cardiologia', score: '92%', photo: 'https://randomuser.me/api/portraits/men/1.jpg', bio: 'Especialista em doenças cardíacas com mais de 10 anos de experiência.' },
        { name: 'Dra. Maria Oliveira', specialty: 'Pediatria', score: '85%', photo: 'https://randomuser.me/api/portraits/women/1.jpg', bio: 'Dedicada à saúde infantil, atende crianças de todas as idades.' },
        { name: 'Dr. Carlos Ferreira', specialty: 'Dermatologia', score: '88%', photo: 'https://randomuser.me/api/portraits/men/2.jpg', bio: 'Focado em tratamentos dermatológicos e estéticos.' },
        { name: 'Dra. Ana Clara', specialty: 'Ginecologia', score: '95%', photo: 'https://randomuser.me/api/portraits/women/2.jpg', bio: 'Especialista em saúde da mulher, oferecendo cuidados personalizados.' },
        { name: 'Dr. Rafael Mendes', specialty: 'Neurologia', score: '90%', photo: 'https://randomuser.me/api/portraits/men/3.jpg', bio: 'Experiência em doenças neurológicas e distúrbios do sono.' },
        { name: 'Dra. Laura Santos', specialty: 'Oftalmologia', score: '87%', photo: 'https://randomuser.me/api/portraits/women/3.jpg', bio: 'Cuida da saúde ocular com atenção especial aos pacientes.' },
        { name: 'Dr. Felipe Lima', specialty: 'Ortopedia', score: '91%', photo: 'https://randomuser.me/api/portraits/men/4.jpg', bio: 'Tratamentos ortopédicos para todas as idades.' },
        { name: 'Dra. Juliana Rocha', specialty: 'Endocrinologia', score: '89%', photo: 'https://randomuser.me/api/portraits/women/4.jpg', bio: 'Especialista em distúrbios hormonais e metabólicos.' },
    ];

    const handleOpenModal = (doctor) => {
        setSelectedDoctor(doctor);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setFormData({
            fullName: '',
            birthDate: '',
            appointmentTime: ''
        });
        setSuccessMessage('');
        setErrorMessage('');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedDate) {
            setErrorMessage('Selecione uma data para a consulta.');
            return;
        }

        const appointmentDate = new Date(selectedDate);
        const appointmentTime = formData.appointmentTime.split(':');
        appointmentDate.setHours(appointmentTime[0]);
        appointmentDate.setMinutes(appointmentTime[1]);

        const formattedDate = appointmentDate.toISOString().split('T')[0];
        const formattedTime = appointmentDate.toISOString().split('T')[1].substring(0, 5);

        console.log("Formatted Date:", formattedDate);

        try {
            // Primeiro, insere o agendamento na tabela agendamento
            const response = await fetch('http://localhost:3001/agendamento', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome: formData.fullName,
                    aniversario: formData.birthDate,
                    horario: formattedTime,
                    data: formattedDate,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccessMessage('Consulta agendada com sucesso!');

                // Agora insere na tabela agenda com status 'Pendente' e procedimento como specialty
                const agendamentoId = data.idAgendamento; // ID do agendamento inserido

                const agendaResponse = await fetch('http://localhost:3001/agenda', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        agendamento: formattedDate, // data do agendamento
                        paciente: formData.fullName,
                        status: 'Pendente', // Status fixo 'Pendente'
                        procedimentos: selectedDoctor.specialty, // Procedimento como specialty
                        tipoPlano: 'Padrão', // Você pode definir o tipo de plano aqui ou em outra parte do sistema
                    }),
                });

                const agendaData = await agendaResponse.json();
                if (!agendaResponse.ok) {
                    setErrorMessage(agendaData.error || 'Erro ao agendar a consulta.');
                }
            } else {
                setErrorMessage(data.error || 'Erro ao agendar a consulta.');
            }
        } catch (error) {
            setErrorMessage('Erro ao agendar a consulta. Tente novamente mais tarde.');
        }

        setFormData({
            fullName: '',
            birthDate: '',
            appointmentTime: ''
        });
        setErrorMessage('');
    };

    return (
        <div className='medicos-tudo'>
            <div className="doctors-list-container">
                <h2>Médicos</h2>
                <div className="doctors-scroll">
                    <table className="doctors-table">
                        <thead>
                            <tr>
                                <th>Foto</th>
                                <th>Nome</th>
                                <th>Especialidade</th>
                                <th>Avaliação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctorsData.map((doctor, index) => (
                                <tr key={index} onClick={() => handleOpenModal(doctor)}>
                                    <td>
                                        <img src={doctor.photo} alt={doctor.name} className="doctor-photo" />
                                    </td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.specialty}</td>
                                    <td className="doctor-score">{doctor.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {modalOpen && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <h3>Agendar Consulta com {selectedDoctor.name}</h3>
                            <p><strong>Especialidade:</strong> {selectedDoctor.specialty}</p>
                            <p>{selectedDoctor.bio}</p>
                            {selectedDate && <p><strong>Data selecionada:</strong> {selectedDate.toLocaleDateString()}</p>}
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>Nome Completo:</label>
                                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                                </div>
                                <div>
                                    <label>Aniversário:</label>
                                    <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
                                </div>
                                <div>
                                    <label>Horário da Consulta:</label>
                                    <input type="time" name="appointmentTime" value={formData.appointmentTime} onChange={handleChange} required />
                                </div>
                                <div className="modal-buttons">
                                    <button type="submit">Agendar Consulta</button>
                                    <button type="button" onClick={handleCloseModal}>Fechar</button>
                                </div>
                            </form>
                            {successMessage && <p className="success-message">{successMessage}</p>}
                            {errorMessage && <p className="error-message">{errorMessage}</p>}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Medicos;