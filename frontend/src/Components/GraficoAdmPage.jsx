import React from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import '../Style/GraficoAdmPage.css';

const GraficosAdm = () => {
    // Dados do gráfico de pizza
    const pieData = {
        labels: ['Pacientes em Alta', 'Pacientes em Internação'],
        datasets: [
            {
                data: [70, 30],
                backgroundColor: ['#54D4FD', '#81b9f0'],
                hoverBackgroundColor: ['#54D4FD', '#81b9f0'],
            },
        ],
    };

    const barData = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [
            {
                label: 'Internações',
                data: [50, 60, 70, 80, 90, 100],
                backgroundColor: '#54a3f0',
            },
        ],
    };

    // Dados do gráfico de linhas
    const lineData = {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [
            {
                label: 'Consultas Realizadas',
                data: [20, 30, 25, 40],
                borderColor: '#5472f0',
                fill: false,
                tension: 0.1,
            },
            {
                label: 'Consultas Canceladas',
                data: [5, 10, 8, 12],
                borderColor: '#6854f0',
                fill: false,
                tension: 0.1,
            },
        ],
    };

    return (
        <div className="graficos-container">
            <div className="grafico">
                <h3>Estado dos Pacientes</h3>
                <div className="chart-container">
                    <Pie data={pieData} options={{ maintainAspectRatio: false }} />
                </div>
            </div>

            <div className="grafico">
                <h3>Internações por Mês</h3>
                <div className="chart-container">
                    <Bar data={barData} options={{ maintainAspectRatio: false }} />
                </div>
            </div>

            <div className="grafico">
                <h3>Consultas</h3>
                <div className="chart-container">
                    <Line data={lineData} options={{ maintainAspectRatio: false }} />
                </div>
            </div>
        </div>
    );
};

export default GraficosAdm;
