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
        const selectedDate = `${day}/11/2024`;  // Corrigido aqui para interpolar a string corretamente
        onSelectDay(selectedDate); 
    };

    return (
        <div className='calendario-tudo_registro_examesss'>
            <div className="custom-calendar-wrapper_registro_examesss">
                <div className="custom-calendar-header_registro_examesss">
                    <button className="nav-button_registro_examesss" onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}>{'<'}</button>
                    <div className="custom-calendar-title_registro_examesss">{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</div>
                    <button className="nav-button_registro_examesss" onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}>{'>'}</button>
                </div>
                <div className="custom-calendar-grid_registro_examesss">
                    {getDaysArray().map(day => (
                        <div
                            className={`custom-day_registro_examesss ${selectedDay === day ? 'custom-selected-day_registro_examesss' : ''}`}  // Corrigido aqui para interpolar a string de classe corretamente
                            key={day}
                            onClick={() => handleDayClick(day)}
                        >
                            {day}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomCalendar;
