// App.js
import React, { useState, useEffect } from 'react';
import {
  FormControl, InputLabel, Select, MenuItem, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField
} from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Dados de exemplo (substitua com seus dados reais ou uma chamada de API)
const families = [
  { id: 1, name: 'Família Silva', members: [{ id: 1, name: 'João', age: 45, condition: 'Hipertensão', status: 'OK' }] },
  { id: 2, name: 'Família Souza', members: [{ id: 2, name: 'Maria', age: 60, condition: 'Diabetes', status: 'Crítico' }] },
];

const healthData = [
  { timestamp: '10:00', heartRate: 80, bloodPressure: 120 },
  { timestamp: '10:30', heartRate: 82, bloodPressure: 122 },
  { timestamp: '11:00', heartRate: 78, bloodPressure: 118 },
];

function MonitoringDashboard() {
  const [selectedFamily, setSelectedFamily] = useState('');
  const [familyMembers, setFamilyMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [recommendation, setRecommendation] = useState('');

  // Função de alteração da família selecionada
  const handleFamilyChange = (event) => {
    const family = families.find(fam => fam.id === event.target.value);
    setSelectedFamily(family.id);
    setFamilyMembers(family.members);
  };

  // Notificar quando algum membro estiver em estado crítico
  useEffect(() => {
    familyMembers.forEach(member => {
      if (member.status === 'Crítico') {
        toast.error(`${member.name} está com sinais vitais críticos!`);
      }
    });
  }, [familyMembers]);

  // Função de submissão de recomendações
  const handleRecommendationSubmit = (e) => {
    e.preventDefault();
    toast.success(`Recomendação enviada: ${recommendation}`);
    setRecommendation('');
  };

  return (
    <div>
      <h1>Painel de Monitoramento Familiar</h1>

      {/* Seletor de Família */}
      <FormControl fullWidth margin="normal">
        <InputLabel>Selecione a Família</InputLabel>
        <Select value={selectedFamily} onChange={handleFamilyChange}>
          {families.map(family => (
            <MenuItem key={family.id} value={family.id}>
              {family.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Tabela de Membros da Família */}
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Idade</TableCell>
              <TableCell>Condição Principal</TableCell>
              <TableCell>Status Atual</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {familyMembers.map(member => (
              <TableRow key={member.id} onClick={() => setSelectedMember(member)}>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.age}</TableCell>
                <TableCell>{member.condition}</TableCell>
                <TableCell>{member.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Gráfico de Monitoramento em Tempo Real */}
      {selectedMember && (
        <div>
          <h2>Monitoramento de {selectedMember.name}</h2>
          <LineChart width={600} height={300} data={healthData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="heartRate" stroke="#8884d8" />
            <Line type="monotone" dataKey="bloodPressure" stroke="#82ca9d" />
          </LineChart>
        </div>
      )}

      {/* Formulário de Recomendações Médicas */}
      <form onSubmit={handleRecommendationSubmit} style={{ marginTop: '20px' }}>
        <TextField
          label="Recomendação Médica"
          fullWidth
          margin="normal"
          value={recommendation}
          onChange={(e) => setRecommendation(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </form>

      {/* Componente de Notificação */}
      <ToastContainer />
    </div>
  );
}

export default MonitoringDashboard;
