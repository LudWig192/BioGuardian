import React from "react";
import "../Style/ResumoTarefas.css";

const TaskSummary = ({ exames = [] }) => {
    const completedCount = exames.filter(exame => exame.status.includes("Disponível")).length;
    const pendingCount = exames.filter(exame => exame.status.includes("Aguardando Resultados")).length;
    const cancelledCount = exames.filter(exame => exame.status.includes("Cancelado")).length;

    return (
        <div className="task-summary-container_registro_exames_paciente">
            <h3 className="task-summary-title_registro_exames_paciente">Resumo de Tarefas</h3>
            <div className="task-status-box_registro_exames_paciente">
                <div className="task-status-item_registro_exames_paciente task-status-completed_registro_exames_paciente">
                    <p>Concluídos</p>
                    <h4>{completedCount}</h4>
                </div>
                <div className="task-status-item_registro_exames_paciente task-status-pending_registro_exames_paciente">
                    <p>Pendentes</p>
                    <h4>{pendingCount}</h4>
                </div>
                <div className="task-status-item_registro_exames_paciente task-status-cancelled_registro_exames_paciente">
                    <p>Cancelados</p>
                    <h4>{cancelledCount}</h4>
                </div>
            </div>
        </div>
    );
};

export default TaskSummary;