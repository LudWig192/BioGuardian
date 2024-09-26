const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

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
  const { email, senha } = req.body;

  // Consulta para verificar se o usuário existe
  const query = 'SELECT * FROM cadastro WHERE email = ? AND senha = ?';
  db.query(query, [email, senha], (err, results) => {
    if (err) {
      console.error('Erro ao consultar o banco de dados:', err);
      res.status(500).send('Erro no servidor');
      return;
    }

    if (results.length > 0) {
      res.send('Login bem-sucedido!');
    } else {
      res.status(401).send('Email ou senha incorretos');
    }
  });
});



app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});