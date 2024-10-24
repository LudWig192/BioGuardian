import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "../Style/Cabecalhodata.css";

// Função para gerar os dias da semana considerando a data e o mês correto
const generateDaysOfWeek = (startDate) => {
    const daysInWeek = 7;
    const days = [];

    for (let i = 0; i < daysInWeek; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(currentDate.getDate() + i); // Adiciona dias à data inicial

        const day = currentDate.getDate();
        const label = currentDate.toLocaleDateString('pt-BR', { weekday: 'long' }); // Retorna o nome do dia da semana em português

        days.push({
            day,
            label,
        });
    }

    return days;
};

const Cabecalho = () => {
    const [selectedDay, setSelectedDay] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [formDetails, setFormDetails] = useState({ title: "", description: "", time: "", doctor: "" });
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [weekOffset, setWeekOffset] = useState(0); // Controle de qual semana estamos exibindo

    useEffect(() => {
        const today = new Date().getDate();
        setSelectedDay(today.toString());
        const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
        setAppointments(storedAppointments);
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
            updatedAppointments = appointments.map((appointment, index) =>
                index === editIndex ? newAppointment : appointment
            );
        } else {
            updatedAppointments = [...appointments, newAppointment];
        }

        setAppointments(updatedAppointments);
        localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
        resetForm();
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
        localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    };

    const resetForm = () => {
        setIsModalOpen(false);
        setFormDetails({ title: "", description: "", time: "", doctor: "" });
        setIsEditing(false);
        setEditIndex(null);
    };

    // Navegar entre semanas
    const nextWeek = () => {
        setWeekOffset(weekOffset + 7); // Avança 7 dias
    };

    const prevWeek = () => {
        setWeekOffset(weekOffset - 7); // Retrocede 7 dias
    };

    // Dias calculados com base na semana
    const days = generateDaysOfWeek(new Date(new Date().setDate(new Date().getDate() + weekOffset)));

    // Filtrar os appointments para o dia selecionado
    const filteredAppointments = appointments.filter((appointment) => appointment.day === selectedDay);

    return (
        <>
            <div className="date-header">
                <h3 className="Mes">Novembro 2024</h3>
                <div className="week-navigation">
                    <button onClick={prevWeek}>⬅</button>
                    <div className="day-buttons">
                        {days.map(({ day, label }) => (
                            <button
                                key={day}
                                className={day === selectedDay ? "selected-day" : "day"}
                                onClick={() => handleDayClick(day.toString())}
                            >
                                <div>{day}</div>
                                <div>{label}</div>
                            </button>
                        ))}
                    </div>
                    <button onClick={nextWeek}>➡</button>
                </div>
            </div>

            <div className="appointments">
                <h2>Exames para o dia {selectedDay}:</h2>
                {filteredAppointments.length > 0 ? (
                    filteredAppointments.map((appointment, index) => (
                        <div key={index} className="appointment-container">
                            <div className="appointment-datetime">
                                <p>Data: {appointment.day}</p>
                                <p>Hora: {appointment.time}</p>
                            </div>
                            <div className="appointment-card">
                                <h4>{appointment.title.toUpperCase()}</h4>
                                <p>{appointment.doctor}</p>
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
                            {["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"].map(
                                (time) => (
                                    <option key={time} value={time}>
                                        {time}
                                    </option>
                                )
                            )}
                        </select>
                    </label>
                    <button type="submit">{isEditing ? "Atualizar" : "Agendar"}</button>
                    <button type="button" onClick={resetForm}>
                        Cancelar
                    </button>
                </form>
            </Modal>
        </>
    );
};

export default Cabecalho;
