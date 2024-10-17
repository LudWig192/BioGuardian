import React from 'react';
import '../Style/MedicoServiço.css'; // Arquivo de estilos
import Riley from "../Imagens/Medico24h1 (1).png";
import Jane from  "../Imagens/Medico24h1 (2).png";
import Eric from "../Imagens/Medico24h1 (3).png"

const doctors = [
  {
    nameAndTitle: "Dr. Scott Riley",
    image: Riley,
  },
  {
    nameAndTitle: "Dra. Jane Fowler",
    image: Jane,
  },
  {
    nameAndTitle: "Dr. Eric Snyder",
    image: Eric,
  },
  
];

const DoctorsGrid = () => {
  return (
    <div className="doctor-serviços-container">
      <div className="doctor-serviços-title">Conheça Nossa Equipe Médica</div>
      <div className="doctor-serviços-description">
        Conheça alguns dos nossos médicos disponíveis 24 horas por dia, comprometidos em oferecer atendimento médico de alta qualidade e cuidados personalizados para suas necessidades de saúde.
      </div>
      
      <div className="doctor-serviços-grid">
        {doctors.slice(0, 3).map((doctor, index) => (
          <div key={index} className="doctor-serviços-card">
            <img src={doctor.image} alt={doctor.nameAndTitle} className="doctor-serviços-image" />
            <div className="doctor-serviços-info">
              <div className="doctor-serviços-name">{doctor.nameAndTitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsGrid;
