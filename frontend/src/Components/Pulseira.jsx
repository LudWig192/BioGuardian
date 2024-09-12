import React from 'react';
import "../Style/Pulseira.css";

function Pulseira1() {
  return (
    <div className="layout-container">
      <div className="text-section">
        <h1>Pulseira de Monitoramento de Saúde</h1>
        <p>
          Ao assinar qualquer plano, você receberá uma pulseira de monitoramento de saúde como um bônus exclusivo. Este dispositivo avançado auxilia no acompanhamento contínuo do bem-estar do paciente, fornecendo dados precisos e em tempo real sobre:
        </p>
        <ul>
          <li><strong>Frequência Cardíaca:</strong> Monitoramento contínuo da frequência cardíaca.</li>
          <li><strong>Níveis de Atividade Física:</strong> Avaliação das atividades físicas realizadas.</li>
          <li><strong>Qualidade do Sono:</strong> Análise detalhada do padrão de sono.</li>
        </ul>
      </div>
      <div className="model-section">
        <iframe
          title="Modelo de Pulseira de Monitoramento de Saúde"
          frameBorder="0"
          allowFullScreen
          src="https://sketchfab.com/models/36cf952b806b47099ab53b0d53844f17/embed?ui_theme=dark"
          aria-label="Modelo de pulseira de monitoramento de saúde"
        ></iframe>
      </div>
    </div>
  );
}

export default Pulseira1;
