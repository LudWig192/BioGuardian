import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../Style/Grafico.css'; // Importando o arquivo CSS

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'], // Meses no eixo X
  datasets: [
    {
      label: 'Anomalia',
      data: [2, 1, 3, 2, 4], // Primeiro conjunto de dados
      fill: false,
      backgroundColor: 'rgba(0, 0, 0, 0.1)', // Cor de fundo da linha ajustada
      borderColor: 'rgba(0, 0, 0, 1)',
      borderWidth: 3, // Espessura da linha
      pointRadius: 5, // Tamanho dos pontos
      pointBackgroundColor: '#FF6384', // Cor dos pontos
    },
    {
      label: 'Esperado', // Nome do segundo conjunto de dados
      data: [7, 5, 10, 6, 4], // Segundo conjunto de dados
      fill: false,
      backgroundColor: 'rgba(153, 102, 255, 0.5)', // Cor de fundo da linha
      borderColor: 'rgba(153, 102, 255, 1)', // Cor da borda da linha
      borderWidth: 3, // Espessura da linha
      pointRadius: 5, // Tamanho dos pontos
      pointBackgroundColor: '#36A2EB', // Cor dos pontos
    }
  ],
};

const options = {
  responsive: true, // Para ser responsivo
  maintainAspectRatio: false, // Permite ajustar livremente a altura e largura
  plugins: {
    title: {
      display: true, // Mostra o título
      text: 'Estado do corpo', // Texto do título
      font: {
        size: 24, // Tamanho da fonte do título
        weight: 'bold', // Peso da fonte
      },
      color: '#333', // Cor do título
      padding: {
        top: 10, // Espaçamento no topo do título
        bottom: 30, // Espaçamento abaixo do título
      },
    },
    legend: {
      labels: {
        font: {
          size: 16, // Tamanho da fonte da legenda
          color: '#333', // Cor da fonte da legenda
        },
      },
    },
    tooltip: {
      titleFont: { size: 14, weight: 'bold', color: '#333' }, // Estilo do título do tooltip
      bodyFont: { size: 12, color: '#555' }, // Estilo do corpo do tooltip
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        font: {
          size: 14, // Tamanho da fonte do eixo Y
          color: '#333', // Cor da fonte do eixo Y
        },
      },
    },
    x: {
      ticks: {
        font: {
          size: 14, // Tamanho da fonte do eixo X
          color: '#333', // Cor da fonte do eixo X
        },
      },
    },
  },
};

function MyChart() {
  return (
    <div className="chart-container"> {/* Usando a classe definida no CSS */}
      <Line data={data} options={options} />
    </div>
  );
}

export default MyChart;
