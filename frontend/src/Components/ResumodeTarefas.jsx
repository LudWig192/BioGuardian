import React from "react";
import "../Style/ResumoTarefas.css";

const TaskSummary = ({ exames = [] }) => {
    const completedCount = exames.filter(exame => exame.status.includes("Disponível")).length;
    const pendingCount = exames.filter(exame => exame.status.includes("Aguardando Resultados")).length;
    const cancelledCount = exames.filter(exame => exame.status.includes("Cancelado")).length;

    return (
        <div className="task-summary-container">
            <h3 className="task-summary-title">Resumo de Tarefas</h3>
            <div className="task-status-box">
                <div className="task-status-item task-status-completed">
                    <p>Concluídos</p>
                    <h4>{completedCount}</h4>
                </div>
                <div className="task-status-item task-status-pending">
                    <p>Pendentes</p>
                    <h4>{pendingCount}</h4>
                </div>
                <div className="task-status-item task-status-cancelled">
                    <p>Cancelados</p>
                    <h4>{cancelledCount}</h4>
                </div>
            </div>
        </div>
    );
};

export default TaskSummary;
