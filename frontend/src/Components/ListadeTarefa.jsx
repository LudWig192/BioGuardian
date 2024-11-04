import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../Style/ListaDeTarefa.css';

const examesPorDia = {
    "1/11/2024": [
        { id: 1, title: "Exame de Sangue", time: "08:00", doctor: "Dr. João Silva", status: "Aguardando Resultados", img: "https://via.placeholder.com/50" },
        { id: 2, title: "Raio-X", time: "09:00", doctor: "Dr. Maria Oliveira", status: "Resultado Disponível", img: "https://via.placeholder.com/50" },
        { id: 3, title: "Ultrassonografia", time: "10:00", doctor: "Dr. Ana Santos", status: "Cancelado", img: "https://via.placeholder.com/50" },
        { id: 4, title: "Eletrocardiograma", time: "11:30", doctor: "Dr. Carlos Oliveira", status: "Resultado Disponível", img: "https://via.placeholder.com/50" },
    ],
    "2/11/2024": [
        { id: 5, title: "Teste de Esforço", time: "08:30", doctor: "Dr. Pedro Almeida", status: "Cancelado", img: "https://via.placeholder.com/50" },
        { id: 6, title: "Tomografia", time: "09:30", doctor: "Dra. Ana Costa", status: "Resultado Disponível", img: "https://via.placeholder.com/50" },
        { id: 7, title: "Raio-X", time: "10:30", doctor: "Dr. Thiago Mendes", status: "Aguardando Resultados", img: "https://via.placeholder.com/50" },
        { id: 8, title: "Exame de Urina", time: "11:00", doctor: "Dra. Luciana Lima", status: "Resultado Disponível", img: "https://via.placeholder.com/50" },
    ],
    "3/11/2024": [
        { id: 9, title: "Ressonância Magnética", time: "08:00", doctor: "Dr. Marcos Ferreira", status: "Aguardando Resultados", img: "https://via.placeholder.com/50" },
        { id: 10, title: "Ultrassonografia", time: "09:00", doctor: "Dr. Maria Oliveira", status: "Resultado Disponível", img: "https://via.placeholder.com/50" },
        { id: 11, title: "Eletrocardiograma", time: "10:30", doctor: "Dr. João Silva", status: "Cancelado", img: "https://via.placeholder.com/50" },
        { id: 12, title: "Teste de Esforço", time: "11:30", doctor: "Dr. Ana Santos", status: "Aguardando Resultados", img: "https://via.placeholder.com/50" },
    ],
    "4/11/2024": [
        { id: 13, title: "Raio-X", time: "08:00", doctor: "Dr. Carlos Oliveira", status: "Resultado Disponível", img: "https://via.placeholder.com/50" },
        { id: 14, title: "Tomografia", time: "09:30", doctor: "Dra. Ana Costa", status: "Cancelado", img: "https://via.placeholder.com/50" },
        { id: 15, title: "Ultrassonografia", time: "10:30", doctor: "Dr. Pedro Almeida", status: "Aguardando Resultados", img: "https://via.placeholder.com/50" },
        { id: 16, title: "Eletrocardiograma", time: "11:00", doctor: "Dr. Thiago Mendes", status: "Resultado Disponível", img: "https://via.placeholder.com/50" },
    ],
    "5/11/2024": [
        { id: 17, title: "Exame de Sangue", time: "08:30", doctor: "Dr. João Silva", status: "Resultado Disponível", img: "https://via.placeholder.com/50" },
        { id: 18, title: "Teste de Esforço", time: "09:00", doctor: "Dr. Maria Oliveira", status: "Cancelado", img: "https://via.placeholder.com/50" },
        { id: 19, title: "Ressonância Magnética", time: "10:00", doctor: "Dr. Ana Santos", status: "Aguardando Resultados", img: "https://via.placeholder.com/50" },
        { id: 20, title: "Raio-X", time: "11:30", doctor: "Dr. Carlos Oliveira", status: "Resultado Disponível", img: "https://via.placeholder.com/50" },
    ],
};

const ListaDeTarefa = ({ selectedDate, onExamesFiltrados }) => {
    const [filter, setFilter] = useState("");
    const examesDoDia = examesPorDia[selectedDate] || [];

    useEffect(() => {
        const filteredExames = examesDoDia.filter(exame =>
            exame.title.toLowerCase().includes(filter.toLowerCase()) ||
            exame.status.toLowerCase().includes(filter.toLowerCase())
        );
        onExamesFiltrados(filteredExames);
    }, [filter, selectedDate, examesDoDia, onExamesFiltrados]);

    return (
        <div className="exam-list">
            <h2 className="exam-list-title">Registro de Exames para {selectedDate}</h2>

            <input
                type="text"
                placeholder="Filtrar exames..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="filter-input"
            />

            {examesDoDia.length === 0 ? (
                <p>Nenhum exame encontrado.</p>
            ) : (
                <>
                    {examesDoDia.filter(exame => exame.status === "Cancelado").map(exame => (
                        <div className="exam-item-container" key={exame.id}>
                            <img className="exam-item-icon" src={exame.img} alt={exame.title} />
                            <div className="exam-details">
                                <h4 className="exam-title">{exame.title}</h4>
                                <p className="exam-info">{`${selectedDate} - ${exame.time} | ${exame.doctor}`}</p>
                            </div>
                            <span className="exam-status status-cancelado">{exame.status}</span>
                        </div>
                    ))}

                    {examesDoDia.filter(exame => exame.status !== "Cancelado").map(exame => (
                        <div className="exam-item-container" key={exame.id}>
                            <img className="exam-item-icon" src={exame.img} alt={exame.title} />
                            <div className="exam-details">
                                <h4 className="exam-title">{exame.title}</h4>
                                <p className="exam-info">{`${selectedDate} - ${exame.time} | ${exame.doctor}`}</p>
                            </div>
                            {exame.status.includes("Disponível") ? (
                                <Link to="/Resultados" className="nav-link resultado-exame-link">{exame.status}</Link>
                            ) : (
                                <span className={`exam-status status-aguardando`}>{exame.status}</span>
                            )}
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default ListaDeTarefa;
