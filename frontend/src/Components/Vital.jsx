// BIBLIOTECAS
import React from 'react';
import { FaHeartbeat, FaThermometerHalf, FaTint } from 'react-icons/fa';

//ESTILIZAÇÃO
import '../Style/Vitals.css';

function Vitals() {
  return (
    <div className="vitals">
      <div className="vital-item">
        <FaHeartbeat className="vital-icon" />
        <div className="vital-info">
          <h4>Medidor Cardiaco</h4>
          <p>80 bpm</p>
        </div>
      </div>
      <div className="vital-item">
        <FaThermometerHalf className="vital-icon" />
        <div className="vital-info">
          <h4>Temperatura Corporal</h4>
          <p>36.5°C</p>
        </div>
      </div>
      <div className="vital-item">
        <FaTint className="vital-icon" />
        <div className="vital-info">
          <h4>Glicose</h4>
          <p>100 mg/dl</p>
        </div>
      </div>
    </div>
  );
}

export default Vitals;