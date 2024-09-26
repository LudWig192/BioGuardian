import React, { useState, useEffect } from 'react';
import '../Style/Calendario.css';

const getFormattedDate = (date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// Função para formatar a data no formato compatível com o input date (YYYY-MM-DD)
const getISODate = (date) => {
  return date.toISOString().split('T')[0];
};

const Calendario = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [report, setReport] = useState('');
  const [reports, setReports] = useState(() => {
    const savedReports = localStorage.getItem('reports');
    return savedReports ? JSON.parse(savedReports) : {};
  });

  // Atualiza o relatório sempre que a data ou os relatórios mudam
  useEffect(() => {
    const formattedDate = getFormattedDate(currentDate);
    setReport(reports[formattedDate] || '');
  }, [currentDate, reports]); // Adicionando `reports` como dependência

  // Inicializa a data atual no carregamento do componente
  useEffect(() => {
    const today = new Date();
    setCurrentDate(today);
  }, []);

  const handlePrevDay = () => {
    const prevDay = new Date(currentDate);
    prevDay.setDate(currentDate.getDate() - 1);
    setCurrentDate(prevDay);
  };

  const handleNextDay = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);
    setCurrentDate(nextDay);
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setCurrentDate(selectedDate);
  };

  const handleSaveReport = () => {
    const formattedDate = getFormattedDate(currentDate);
    const updatedReports = { ...reports, [formattedDate]: report };
    setReports(updatedReports);
    localStorage.setItem('reports', JSON.stringify(updatedReports));
  };

  return (
    <div className="calendar-card">
      <div className="calendar-header">
        <button className="calendar-nav-button" onClick={handlePrevDay}>
          ◀
        </button>
        <span className="calendar-date">{getFormattedDate(currentDate)}</span>
        <button className="calendar-nav-button" onClick={handleNextDay}>
          ▶
        </button>
      </div>
      
      <div className="calendar-select-date">
        <label htmlFor="date-picker">Escolha a data: </label>
        <input 
          type="date" 
          id="date-picker" 
          value={getISODate(currentDate)} // Converte a data para o formato correto
          onChange={handleDateChange} 
        />
      </div>
      
      <div className="calendar-body">
        <div className="calendar-day-card">
          <h3>{getFormattedDate(currentDate)}</h3>
          <textarea
            className="report-textarea"
            value={report}
            onChange={(e) => setReport(e.target.value)}
            placeholder="Escreva seu relatório diário..."
          />
          <button className="save-report-button" onClick={handleSaveReport}>
            Salvar Relatório
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendario;
