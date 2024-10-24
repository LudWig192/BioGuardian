import React, { useState } from "react";
import "../Style/Cabecalhodata.css";

// OS DIAS
const days = [
    { day: "6", label: "Tue" },
    { day: "7", label: "Wed" },
    { day: "8", label: "Thu" },
    { day: "9", label: "Fri" },
    { day: "10", label: "Sat" },
    { day: "11", label: "Sun" },
    { day: "12", label: "Mon" },
];

const Cabecalho = ({ onSelectDay }) => {
    const [selectedDay, setSelectedDay] = useState("10");

    const handleDayClick = (day) => {
        setSelectedDay(day);
        onSelectDay(day);
    };

    return (
        <div className="date-header">
            <h3>Novembro 2024</h3>
            <div className="day-buttons">
                {days.map(({ day, label }) => (
                    <button
                        key={day}
                        className={day===selectedDay ? "selected-day" : "day"}
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

export default Cabecalho;
