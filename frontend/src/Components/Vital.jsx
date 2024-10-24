import React from 'react';
import { FaHeartbeat, FaThermometerHalf, FaTint } from 'react-icons/fa';
import '../Style/Vitals.css';

function Vitals() {
  return (
    <div className="vitals">
      <div className="vital-item">
        <FaHeartbeat className="vital-icon" />
        <div className="vital-info">
          <h4>Heart Rate</h4>
          <p>80 bpm</p>
        </div>
      </div>
      <div className="vital-item">
        <FaThermometerHalf className="vital-icon" />
        <div className="vital-info">
          <h4>Body Temperature</h4>
          <p>36.5°C</p>
        </div>
      </div>
      <div className="vital-item">
        <FaTint className="vital-icon" />
        <div className="vital-info">
          <h4>Glucose</h4>
          <p>100 mg/dl</p>
        </div>
      </div>
    </div>
  );
}

export default Vitals;