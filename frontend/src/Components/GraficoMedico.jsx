import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../Style/MedicoGrafico.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  datasets: [
    {
      label: 'Anomalia',
      data: [8, 2, 3, 6, 8],
      fill: false,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderColor: 'rgba(0, 0, 0, 1)',
      borderWidth: 3,
      pointRadius: 5,
      pointBackgroundColor: '#FF6384',
    },
    {
      label: 'Esperado',
      data: [7, 5, 10, 6, 4],
      fill: false,
      backgroundColor: 'rgba(153, 102, 255, 0.5)',
      borderColor: 'rgba(153, 102, 255, 1)', 
      borderWidth: 3, 
      pointRadius: 5, 
      pointBackgroundColor: '#36A2EB',
    }
  ],
};

const options = {
  responsive: true, 
  maintainAspectRatio: false, 
  plugins: {
    title: {
      display: true, 
      text: 'Estado do corpo', 
      font: {
        size: 24, 
        weight: 'bold', 
      },
      color: '#333', 
      padding: {
        top: 10, 
        bottom: 30, 
      },
    },
    legend: {
      labels: {
        font: {
          size: 16, 
          color: '#333', 
        },
      },
    },
    tooltip: {
      titleFont: { size: 14, weight: 'bold', color: '#333' }, 
      bodyFont: { size: 12, color: '#555' },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        font: {
          size: 14, 
          color: '#333', 
        },
      },
    },
    x: {
      ticks: {
        font: {
          size: 14, 
          color: '#333', 
        },
      },
    },
  },
};

function MyChart() {
  return (
    <div className="graph-container"> 
      <Line data={data} options={options} />
    </div>
  );
}

export default MyChart;
