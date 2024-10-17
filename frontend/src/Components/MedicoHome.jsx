import React from 'react';
import '../Style/MedicoHome.css';
import Nutricionista from "../Imagens/Nutricionista (1).png";
import Psiquiatra from "../Imagens/Psiquiatria.png";
import Fonoaudiologo from "../Imagens/Fonodialoga.png";
import Fisioterapeuta from "../Imagens/Fisioteraupeta.png";

const consultants = [
  {
    name: 'Leticia Mendes',
    specialty: 'Nutricionista',
    imageUrl: Nutricionista,
  },
  {
    name: 'Marc Paraival',
    specialty: 'Psiquiatra',
    imageUrl: Psiquiatra,
  },
  {
    name: 'Maria Clara',
    specialty: 'Fonoaudiologo',
    imageUrl: Fonoaudiologo,
  },
  {
    name: 'Eduardo Domenico',
    specialty: 'Fisioterapeuta',
    imageUrl: Fisioterapeuta,
  },
];

const MedicoHome = () => {
  return (
    <div className="medicoHome-team-section">
      <div className="medicoHome-team-title">Profissionais em Outras Áreas:</div>
      <div className="medicoHome-consultants-grid">
        {consultants.map((consultant, index) => (
          <div key={index} className="medicoHome-consultant-card">
            <img src={consultant.imageUrl} alt={consultant.name} className="medicoHome-consultant-image" />
            <div className="medicoHome-consultant-info">
              <div className="medicoHome-consultant-name">{consultant.name}</div>
              <div className="medicoHome-consultant-specialty">{consultant.specialty}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicoHome;
