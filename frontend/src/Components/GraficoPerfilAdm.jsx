import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import '../Style/GraficoPerfilAdm.css';

Chart.register(...registerables);

const PostDensityChart = () => {
    const data = {
        labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'], 
        datasets: [
            {
                label: 'Atendimentos Diários',
                data: [30, 45, 40, 55, 50, 70, 65],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Número de Atendimentos',
                    color: '#54a3f0',
                    font: {
                        size: 14,
                    },
                },
                grid: {
                    color: '#e0e0e0',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Dia da Semana',
                    color: '#54dff0',
                    font: {
                        size: 14,
                    },
                },
                grid: {
                    color: '#e0e0e0',
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: '#54dff0',
                    font: {
                        size: 14,
                    },
                },
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `Atendimentos: ${tooltipItem.raw}`;
                    },
                },
            },
        },
    };

    return (
        <div className="post-density-chart">
            <h3>Densidade de Atendimentos (Últimos 7 Dias)</h3>
            <div className="chart-container">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default PostDensityChart;
