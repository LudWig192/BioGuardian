const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const db = require('./db');

const app = express();
const port = 3001;

// Configurar o middleware CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// Usa as rotas do backend
app.use('/', routes);

// Rota de autenticação
app.post('/login', (req, res) => {
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});

//Agendamentos
app.get('/agendamentos', (req, res) => {
  db.query('SELECT * FROM agendamentos', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.get('/agendamentos', (req, res) => {
  db.query('SELECT * FROM agendamentos', (err, results) => {
    if (err) {
      console.error('Erro ao buscar agendamentos:', err);
      return res.status(500).json({ error: 'Erro ao buscar agendamentos' });
    }
    res.json(results);
  });
});

// Rota para criar um novo agendamento
app.post('/agendamentos', (req, res) => {
  const newAppointment = req.body;
  db.query(
    'INSERT INTO agendamentos (agendamento, paciente, status, procedimentos, tipoPlano) VALUES (?, ?, ?, ?, ?)',
    [newAppointment.agendamento, newAppointment.paciente, newAppointment.status, newAppointment.procedimentos, newAppointment.tipoPlano],
    (err, result) => {
      if (err) {
        console.error('Erro ao criar agendamento:', err);
        return res.status(500).json({ error: 'Erro ao criar agendamento' });
      }
      res.status(201).json({ idAgenda: result.insertId, ...newAppointment });
    }
  );
});

// Rota para atualizar um agendamento
app.put('/agendamentos/:id', (req, res) => {
  const updatedAppointment = req.body;
  db.query(
    'UPDATE agendamentos SET agendamento = ?, paciente = ?, status = ?, procedimentos = ?, tipoPlano = ? WHERE idAgenda = ?',
    [updatedAppointment.agendamento, updatedAppointment.paciente, updatedAppointment.status, updatedAppointment.procedimentos, updatedAppointment.tipoPlano, req.params.id],
    (err) => {
      if (err) {
        console.error('Erro ao atualizar agendamento:', err);
        return res.status(500).json({ error: 'Erro ao atualizar agendamento' });
      }
      res.json(updatedAppointment);
    }
  );
});

// Rota para deletar um agendamento
app.delete('/agendamentos/:id', (req, res) => {
  db.query('DELETE FROM agendamentos WHERE idAgenda = ?', req.params.id, (err) => {
    if (err) {
      console.error('Erro ao deletar agendamento:', err);
      return res.status(500).json({ error: 'Erro ao deletar agendamento' });
    }
    res.sendStatus(204);
  });
});




