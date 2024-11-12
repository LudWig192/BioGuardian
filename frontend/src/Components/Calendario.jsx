// IMPORT DE BIBLIOTECA
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
 
// IMPORT ESTILIZAÇÃO
import "../Style/CabecalhoMEDICO.css";
 
// Função para gerar os dias da semana a partir de uma data de início
const generateDaysOfWeek = (startDate) => {
    const daysInWeek = 7;
    return Array.from({ length: daysInWeek }, (_, i) => {
        const currentDate = new Date(startDate);
        currentDate.setDate(currentDate.getDate() + i);
 
        return {
            day: currentDate.getDate(),
            label: currentDate.toLocaleDateString("pt-BR", { weekday: "long" })
        };
    });
};
 
const Cabecalho = () => {
    const [selectedDay, setSelectedDay] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [formDetails, setFormDetails] = useState({ title: "", description: "", time: "", doctor: "" });
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [weekOffset, setWeekOffset] = useState(0);
 
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
        const newAppointment = { day: selectedDay, ...formDetails };
 
        const updatedAppointments = isEditing
            ? appointments.map((appointment, index) => (index === editIndex ? newAppointment : appointment))
            : [...appointments, newAppointment];
 
        setAppointments(updatedAppointments);
        localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
        resetForm();
    };
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDetails((prev) => ({ ...prev, [name]: value }));
    };
 
    const handleEdit = (index) => {
        setFormDetails(appointments[index]);
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
 
    const changeWeek = (direction) => {
        setWeekOffset((prev) => prev + direction * 7);
    };
 
    const days = generateDaysOfWeek(new Date(new Date().setDate(new Date().getDate() + weekOffset)));
    const filteredAppointments = appointments.filter((appointment) => appointment.day === selectedDay);
    const currentMonth = new Date().toLocaleString("pt-BR", { month: "long", year: "numeric" });
 
    return (
        <>
            <div className="date-header">
                <h3 className="Mes">{currentMonth.toUpperCase()}</h3>
                <div className="week-navigation">
                    <button className="btnAnterior desk" onClick={() => changeWeek(-1)} aria-label="Semana anterior">
                        ⬅
                    </button>
                    <button className="btnAnterior mobile" onClick={() => changeWeek(-1)} aria-label="Semana anterior">
                        Anterior
                    </button>
                    <div className="day-buttons">
                        {days.map(({ day, label }) => (
                            <button
                                key={day}
                                className={day.toString() === selectedDay ? "selected-day" : "day"}
                                onClick={() => handleDayClick(day.toString())}
                            >
                                <div>{day}</div>
                                <div>{label}</div>
                            </button>
                        ))}
                    </div>
                    <button className="btnProximo desk" onClick={() => changeWeek(1)} aria-label="Próxima semana">
                        ➡
                    </button>
                    <button className="btnProximo mobile" onClick={() => changeWeek(1)} aria-label="Próxima semana">
                        Próximo
                    </button>
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
                                <p>{appointment.description}</p>
 
                                {/* Botões de edição e exclusão dentro do appointment-card */}
                                <div className="appointment-options">
                                    <button className="edit-button" onClick={() => handleEdit(index)}>Editar</button>
                                    <button className="delete-button" onClick={() => handleDelete(index)}>Excluir</button>
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