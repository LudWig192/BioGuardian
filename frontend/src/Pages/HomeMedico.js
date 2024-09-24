import React from 'react';

//Components
import HistoricoMedico from '../Components/Historico_Medico';
import Calendario from '../Components/Calendario';
import Anatomy from '../Components/Anatomy';

//Estilização
import "../Style/HomeMedico.css";

function HomeMedico() {
  const familyMembers = [
    { name: 'João Silva', age: 45, relation: 'Pai' },
    { name: 'Maria Silva', age: 42, relation: 'Mãe' },
    { name: 'Lucas Silva', age: 12, relation: 'Filho' },
  ];

  const medicalRecords = [
    { memberName: 'João Silva', date: '2024-09-01', consultation: 'Check-up', diagnosis: 'Hipertensão', treatment: 'Medicação', doctor: 'Dr. Souza', notes: 'Monitorar pressão arterial semanalmente.' },
    { memberName: 'Maria Silva', date: '2024-08-20', consultation: 'Consulta de rotina', diagnosis: 'Saudável', treatment: 'Nenhum', doctor: 'Dra. Silva', notes: 'Nenhuma observação.' },
    { memberName: 'Lucas Silva', date: '2024-09-15', consultation: 'Vacinação', diagnosis: 'Saudável', treatment: 'Vacina aplicada', doctor: 'Dr. Souza', notes: 'Próxima dose em 6 meses.' },
  ];

  return (
    <div className="corpo">
      {/* Historico Médico */}
      <div className="historico-medico">
        <HistoricoMedico familyMembers={familyMembers} medicalRecords={medicalRecords} />
      </div>

      {/* Calendário */}
      <div className="calendario">
        <Calendario />
      </div>
      <Anatomy />
    </div>
  );
}

export default HomeMedico;
