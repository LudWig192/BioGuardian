import React, { useState } from 'react';
import '../Style/HistoricoMedico.css';

const HistoricoMedico = ({ familyMembers, medicalRecords }) => {
  const [selectedMember, setSelectedMember] = useState(familyMembers[0].name);

  // Filtra os registros médicos com base no membro selecionado
  const filteredRecords = medicalRecords.filter(
    (record) => record.memberName === selectedMember
  );

  // Manipula a troca de membro da família
  const handleMemberChange = (e) => {
    setSelectedMember(e.target.value);
  };

  return (
    <div className="historico-medico">
      <h2>Histórico Médico</h2>

      <label>Selecione o Membro da Família:</label>
      <select value={selectedMember} onChange={handleMemberChange}>
        {familyMembers.map((member, index) => (
          <option key={index} value={member.name}>
            {member.name}
          </option>
        ))}
      </select>

      <div className="medical-records">
        {filteredRecords.length > 0 ? (
          filteredRecords.map((record, index) => (
            <div key={index} className="record-card">
              <p><strong>Data:</strong> {record.date}</p>
              <p><strong>Consulta:</strong> {record.consultation}</p>
              <p><strong>Diagnóstico:</strong> {record.diagnosis}</p>
              <p><strong>Tratamento:</strong> {record.treatment}</p>
              <p><strong>Médico:</strong> {record.doctor}</p>
              <p><strong>Anotações:</strong> {record.notes}</p>
            </div>
          ))
        ) : (
          <p>Nenhum histórico médico encontrado para este membro.</p>
        )}
      </div>
    </div>
  );
};

export default HistoricoMedico;
