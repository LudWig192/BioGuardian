// src/Components/CabecalhoData.js
import React, { useState } from "react";
import "../Style/Cabecalhodata.css";

const days = [
    { day: "1", label: "Sexta" },
    { day: "2", label: "Sábado" },
    { day: "3", label: "Domingo" },
    { day: "4", label: "Segunda" },
    { day: "5", label: "Terça" },
    { day: "6", label: "Quarta" },
    { day: "7", label: "Quinta" },
];

const DateHeader = ({ onSelectDay }) => {
    const [selectedDay, setSelectedDay] = useState("1");

    const handleDayClick = (day) => {
        setSelectedDay(day);
        onSelectDay(`${day}/11/2024`);
    };

    return (
        <div className="date-header">
            <h3>Novembro 2024</h3>
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
    );
};

export default DateHeader;
