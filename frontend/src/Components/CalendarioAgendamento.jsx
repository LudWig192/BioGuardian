import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import '../Style/CalendarioAgendamento.css';

const Calendar = ({ onDateSelect }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [appointments, setAppointments] = useState([]);

    const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

    const startDay = (month, year) => new Date(year, month, 1).getDay();

    const monthNames = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    useEffect(() => {
        axios.get('/api/appointments')
            .then((response) => setAppointments(response.data))
            .catch((error) => console.error("Erro ao carregar agendamentos", error));
    }, [currentMonth]);

    const changeMonth = (direction) => {
        const newMonth = currentMonth.getMonth() + direction;
        setCurrentMonth(new Date(currentMonth.getFullYear(), newMonth));
    };

    const handleDayClick = (day) => {
        const selected = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        setSelectedDate(selected);

        Swal.fire({
            text: `Data selecionada para marcar uma consulta: ${selected.toLocaleDateString()} escolha um médico acima.`,
            icon: 'info',
            confirmButtonText: 'Ok',
            customClass: {
                confirmButton: 'custom-confirm-button'
            },
            backdrop: false,
        });

        onDateSelect(selected);
        axios.post('/api/appointments', { date: selected.toISOString() })
            .then((response) => console.log('Agendamento salvo com sucesso:', response.data))
            .catch((error) => console.error("Erro ao salvar agendamento", error));
    };

    const isToday = (day, month, year) => {
        const today = new Date();
        return (
            today.getDate() === day &&
            today.getMonth() === month &&
            today.getFullYear() === year
        );
    };

    const renderDays = () => {
        const days = [];
        const month = currentMonth.getMonth();
        const year = currentMonth.getFullYear();
        const totalDays = daysInMonth(month, year);
        const start = startDay(month, year);

        for (let i = 0; i < start; i++) {
            days.push(
                <div key={`empty-${i}`} className="agendamento-empty-calendar_agendamento"></div>
            );
        }

        for (let day = 1; day <= totalDays; day++) {
            const isSelected = selectedDate &&
                selectedDate.getDate() === day &&
                selectedDate.getMonth() === month &&
                selectedDate.getFullYear() === year;
            const isCurrentDay = isToday(day, month, year);

            days.push(
                <div
                    key={day}
                    className={`agendamento-day-calendar_agendamento ${isSelected ? 'selected-Agendamento' : ''} ${isCurrentDay ? 'today' : ''}`}
                    onClick={() => handleDayClick(day)}
                >
                    {day}
                </div>

            );
        }

        return days;
    };

    return (
        <div className="agendamento-calendar-container-calendar_agendamento">
            <div className="agendamento-calendar-calendar_agendamento">
                <div className="agendamento-header-calendar_agendamento">
                    <button className="agendamento-arrow-calendar_agendamento" onClick={() => changeMonth(-1)}>&lt;</button>
                    <h2 className="agendamento-month-title-calendar_agendamento">
                        {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                    </h2>
                    <button className="agendamento-arrow-calendar_agendamento" onClick={() => changeMonth(1)}>&gt;</button>
                </div>
                <div className="agendamento-days-calendar_agendamento">
                    {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'].map((day) => (
                        <div key={day} className="agendamento-day-name-calendar_agendamento">{day}</div>
                    ))}
                    {renderDays()}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
