import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import '../Style/Monitoramento.css'; // Importando o arquivo CSS

// Componente principal de monitoramento
const MonitoringChart = ({ member, healthData }) => {
  return (
    <Card className="chart-container">
      <CardContent>
        {/* Título do gráfico */}
        <Typography variant="h6" className="chart-title">
          Monitoramento de {member.name}
        </Typography>
        {/* Contêiner para o gráfico responsivo */}
        <Box className="chart-box">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={healthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="timestamp" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Line type="monotone" dataKey="heartRate" stroke="#8884d8" dot={false} />
              <Line type="monotone" dataKey="bloodPressure" stroke="#82ca9d" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MonitoringChart;
