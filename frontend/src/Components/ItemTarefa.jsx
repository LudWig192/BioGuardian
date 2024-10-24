// src/Components/ItemTarefa.js
import React from "react";
import "../Style/ItemdeTarefa.css"; // CSS para o item de tarefa

const ItemTarefa = ({ title, date, time, doctor, status, img }) => {
    return (
        <div className="task-item">
            <img src={img} alt="Paciente" className="task-item-image" />
            <div className="task-item-content">
                <h4 className="task-item-title">{title}</h4>
                <p className="task-item-date">{date} - {time}</p>
                <p className="task-item-doctor">Médico: {doctor}</p>
                <p className="task-item-status">{status}</p>
            </div>
        </div>
    );
};

export default ItemTarefa;
