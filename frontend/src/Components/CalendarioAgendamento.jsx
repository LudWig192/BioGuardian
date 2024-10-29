import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Importa o SweetAlert2
import '../Style/CalendarioAgendamento.css';

const Calendar = ({ onDateSelect }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const daysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const startDay = (month, year) => {
        return new Date(year, month, 1).getDay();
    };

    const monthNames = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const changeMonth = (direction) => {
        const newMonth = currentMonth.getMonth() + direction;
        setCurrentMonth(new Date(currentMonth.getFullYear(), newMonth));
    };

    const handleDayClick = (day) => {
        const selected = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        setSelectedDate(selected);

        // Alerta simples
        Swal.fire({
            text: `Data selecionada para marcar uma consulta: ${selected.toLocaleDateString()} escolha um médico acima`,
            icon: 'info',
            confirmButtonText: 'Ok',
            backdrop: false,
        });

        onDateSelect(selected);
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
            days.push(<div key={`empty-${i}`} className="agendamento-empty"></div>);
        }

        for (let day = 1; day <= totalDays; day++) {
            const isSelected = selectedDate && selectedDate.getDate() === day &&
                selectedDate.getMonth() === month && selectedDate.getFullYear() === year;
            const isCurrentDay = isToday(day, month, year);
            days.push(
                <div
                    key={day}
                    className={`agendamento-day ${isSelected ? 'selected' : ''} ${isCurrentDay ? 'today' : ''}`}
                    onClick={() => handleDayClick(day)}
                >
                    {day}
                </div>
            );
        }

        return days;
    };

    return (
        <div className="agendamento-calendar-container">
            <div className="agendamento-calendar">
                <div className="agendamento-header">
                    <button className="agendamento-arrow" onClick={() => changeMonth(-1)}>&lt;</button>
                    <h2 className="agendamento-month-title">{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h2>
                    <button className="agendamento-arrow" onClick={() => changeMonth(1)}>&gt;</button>
                </div>
                <div className="agendamento-days">
                    {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'].map((day) => (
                        <div key={day} className="agendamento-day-name">{day}</div>
                    ))}
                    {renderDays()}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
