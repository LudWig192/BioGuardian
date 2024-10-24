import React, { useState } from "react";
import DateHeader from '../Components/CabecalhoData';
import ListaDeTarefa from "../Components/ListadeTarefa";
import TaskSummary from "../Components/ResumodeTarefas";
import Calendar from "../Components/CalendarioRegistro";
import UserProfile from "../Components/PerfilUsuarioRegistro";
import "../Style/RegistrosExamesPage.css";

const DashboardPage = () => {
    const [selectedDate, setSelectedDate] = useState("1/11/2024");
    const [examesFiltrados, setExamesFiltrados] = useState([]);

    const handleSelectDay = (day) => {
        setSelectedDate(day);
    };

    const handleExamesFiltrados = (exames) => {
        setExamesFiltrados(exames);
    };

    return (
        <div className="dashboard-container">
            <div className="left-panel">
                <DateHeader onSelectDay={handleSelectDay} />
                <ListaDeTarefa
                    selectedDate={selectedDate}
                    onExamesFiltrados={handleExamesFiltrados}
                />
            </div>
            <div className="right-panel">
                <UserProfile />
                <TaskSummary exames={examesFiltrados} />
                <Calendar onSelectDay={handleSelectDay} />
            </div>
        </div>
    );
};

export default DashboardPage;
