import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "../Style/Cabecalhodata.css";

// OS DIAS
const days = [
    { day: "6", label: "Domingo" },
    { day: "7", label: "Segunda" },
    { day: "8", label: "Terça" },
    { day: "9", label: "Quarta" },
    { day: "10", label: "Quinta" },
    { day: "11", label: "Sexta" },
    { day: "12", label: "Sábado" },
];

// Exames por dia (exemplo)
const examsByDay = {};

const Cabecalho = () => {
    const [selectedDay, setSelectedDay] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [formDetails, setFormDetails] = useState({ title: "", description: "", time: "", doctor: "" });
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    // Lista de horários
    const availableTimes = [
        "08:00", "09:00", "10:00", "11:00", "12:00",
        "13:00", "14:00", "15:00", "16:00", "17:00"
    ];

    useEffect(() => {
        const today = new Date().getDate().toString();
        setSelectedDay(today);
        const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
        setAppointments(storedAppointments); // Carrega os appointments do localStorage
    }, []);

    const handleDayClick = (day) => {
        setSelectedDay(day);
        setIsModalOpen(true);
        setIsEditing(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAppointment = {
            day: selectedDay,
            ...formDetails,
        };

        let updatedAppointments;
        if (isEditing) {
            // Atualiza a consulta existente
            updatedAppointments = appointments.map((appointment, index) =>
                index === editIndex ? newAppointment : appointment
            );
        } else {
            // Adiciona nova consulta
            updatedAppointments = [...appointments, newAppointment];
        }

        setAppointments(updatedAppointments);
        localStorage.setItem("appointments", JSON.stringify(updatedAppointments)); // Salva no localStorage
        resetForm(); // Limpa o formulário e fecha o modal
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDetails({ ...formDetails, [name]: value });
    };

    const handleEdit = (index) => {
        const appointmentToEdit = appointments[index];
        setFormDetails(appointmentToEdit);
        setEditIndex(index);
        setIsEditing(true);
        setIsModalOpen(true);
    };

    const handleDelete = (index) => {
        const updatedAppointments = appointments.filter((_, i) => i !== index);
        setAppointments(updatedAppointments);
        localStorage.setItem("appointments", JSON.stringify(updatedAppointments)); // Atualiza o localStorage
    };

    const resetForm = () => {
        setIsModalOpen(false);
        setFormDetails({ title: "", description: "", time: "", doctor: "" });
        setIsEditing(false);
        setEditIndex(null);
    };

    // Filtra os appointments para o dia selecionado
    const filteredAppointments = appointments.filter(appointment => appointment.day === selectedDay);

    return (
        <>
            <div className="date-header">
                <h3>Outubro 2024</h3>
                <div className="day-buttons">
                    {days.map(({ day, label }) => (
                        <button
                            key={day}
                            className={day === selectedDay ? "selected-day" : "day"}
                            onClick={() => handleDayClick(day)}
                        >
                            <div>{day}</div>
                            <div>{label}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Cards das Consultas */}
            <div className="appointments">
                <h2>Exames para o dia {selectedDay}:</h2>
                {filteredAppointments.length > 0 ? (
                    filteredAppointments.map((appointment, index) => (
                        <div key={index} className="appointment-container">
                            {/* Data e Hora fora do card */}
                            <div className="appointment-datetime">
                                <p>Data: {appointment.day}</p>
                                <p>Hora: {appointment.time}</p>
                            </div>
                            
                            {/* Exame e Nome do Médico dentro do card */}
                            <div className="appointment-card">
                                <h4>{appointment.title.toUpperCase()}</h4>
                                <p>{appointment.doctor}</p>

                                {/* Símbolo para editar ou cancelar */}
                                <div className="appointment-options">
                                    <span className="edit-symbol" onClick={() => handleEdit(index)}>...</span>
                                    <span className="delete-symbol" onClick={() => handleDelete(index)}>Excluir</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Não há consultas agendadas para este dia.</p>
                )}
            </div>
            
            {/* Modal para criar ou editar uma consulta */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={resetForm}
                contentLabel="Agendar Consulta"
                ariaHideApp={false}
                className="custom-modal"
                overlayClassName="custom-overlay"
            >
                <h2>{isEditing ? "Editar Consulta" : "Agendar Consulta"}</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Título:
                        <input
                            type="text"
                            name="title"
                            value={formDetails.title}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Descrição:
                        <textarea
                            name="description"
                            value={formDetails.description}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Médico:
                        <input
                            type="text"
                            name="doctor"
                            value={formDetails.doctor}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Horário:
                        <select
                            name="time"
                            value={formDetails.time}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecione um horário</option>
                            {availableTimes.map((time) => (
                                <option key={time} value={time}>
                                    {time}
                                </option>
                            ))}
                        </select>
                    </label>
                    <button type="submit">{isEditing ? "Atualizar" : "Agendar"}</button>
                    <button type="button" onClick={resetForm}>Cancelar</button>
                </form>
            </Modal>
        </>
    );
};

export default Cabecalho;