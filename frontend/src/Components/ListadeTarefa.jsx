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
        <div className="exam-list-registros_examess">
            <h2 className="exam-list-title-registros_examess">
                Registro de Exames para {selectedDate}
            </h2>

            <input
                type="text"
                placeholder="Filtrar exames..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="filter-input-registros_examess"
            />

            {examesDoDia.length === 0 ? (
                <p className="no-exams-message">Nenhum exame encontrado.</p>
            ) : (
                <>
                    {examesDoDia.map(exame => (
                        <div
                            className={`exam-item-container-registros_examess ${
                                exame.status === "Cancelado"
                                    ? "status-cancelado-registros_examess"
                                    : ""
                            }`}
                            key={exame.id}
                        >
                            <img
                                className="exam-item-icon-registros_examess"
                                src={exame.img}
                                alt={exame.title}
                            />
                            <div className="exam-details-registros_examess">
                                <h4 className="exam-title-registros_examess">
                                    {exame.title}
                                </h4>
                                <p className="exam-info-registros_examess">
                                    {selectedDate} - {exame.time} | {exame.doctor}
                                </p>
                            </div>
                            {exame.status === "Resultado Disponível" ? (
                                <Link
                                    to="/Resultados"
                                    className="nav-link resultado-exame-link-registros_examess"
                                >
                                    {exame.status}
                                </Link>
                            ) : (
                                <span
                                    className={`exam-status-registros_examess ${
                                        exame.status === "Aguardando Resultados"
                                            ? "status-aguardando-registros_examess"
                                            : ""
                                    }`}
                                >
                                    {exame.status}
                                </span>
                            )}
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default ListaDeTarefa;
