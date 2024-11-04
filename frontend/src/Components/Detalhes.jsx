import React from "react";

const DayDetails = ({ selectedDay }) => {
    return (
        <div className="day-details">
            <h2>Detalhes do Dia Selecionado</h2>
            <p>Você selecionou o dia {selectedDay} de Outubro.</p>
        </div>
    );
};

export default DayDetails;
