// src/Components/CalendarioRegistro.js
import React, { useState } from 'react';
import '../Style/CalendarioRegistros.css';

const CustomCalendar = ({ onSelectDay }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState(null);

    const daysInMonth = (month, year) => new Date(year, month, 0).getDate();

    const getDaysArray = () => {
        const daysArray = [];
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        const totalDays = daysInMonth(month + 1, year);

        for (let i = 1; i <= totalDays; i++) {
            daysArray.push(i);
        }
        return daysArray;
    };

    const handleDayClick = (day) => {
        setSelectedDay(day);
        const selectedDate = `${day}/11/2024`; // Ajusta o formato da data
        onSelectDay(selectedDate); // Atualiza a data no Dashboard
    };

    return (
        <div className="custom-calendar-wrapper">
            <div className="custom-calendar-header">
                <button className="nav-button" onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}>{'<'}</button>
                <div className="custom-calendar-title">{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</div>
                <button className="nav-button" onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}>{'>'}</button>
            </div>
            <div className="custom-calendar-grid">
                {getDaysArray().map(day => (
                    <div
                        className={`custom-day ${selectedDay === day ? 'custom-selected-day' : ''}`}
                        key={day}
                        onClick={() => handleDayClick(day)}
                    >
                        {day}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomCalendar;
