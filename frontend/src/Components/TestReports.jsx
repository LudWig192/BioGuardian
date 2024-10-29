import React from 'react';
import { FaFileMedicalAlt } from 'react-icons/fa';
import '../Style/TestReports.css';

function TestReports() {
  return (
    <div className="test-reports">
      <h4>Resultado de Exames</h4>
      <div className="report-list">
        <div className="report-item">
          <FaFileMedicalAlt className="report-icon" />
          <div className="report-info">
            <p>Raio X - Corpo Inteiro</p>
            <p>16 de outubro</p>
          </div>
        </div>
        <div className="report-item">
          <FaFileMedicalAlt className="report-icon" />
          <div className="report-info">
            <p>Exame de Sangue</p>
            <p>2 de Novembro</p>
          </div>
        </div>
        <div className="report-item">
          <FaFileMedicalAlt className="report-icon" />
          <div className="report-info">
            <p>Teste de Rotina</p>
            <p>15 de novembro</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestReports;