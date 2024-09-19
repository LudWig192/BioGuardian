const express = require('express');
const connection = require('./db');
const router = express.Router();

// Rota para listar todos os registros
router.get('/cadastros', (req, res) => {
  connection.query('SELECT * FROM cadastro', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID
router.get('/cadastros/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM cadastro WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Erro ao buscar o registro:', err);
      res.status(500).json({ error: 'Erro ao buscar o registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro não encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Rota para criar um novo registro
router.post('/cadastros', (req, res) => {
  const { nome, email, senha } = req.body;
  connection.query('INSERT INTO cadastro (nome, email, senha) VALUES (?, ?, ?)',
    [nome, email, senha], (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertId });
    });
});

// Rota para atualizar um registro existente pelo ID
router.put('/cadastros/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;
  connection.query('UPDATE cadastro SET nome = ?, email = ?, senha = ? WHERE id = ?',
    [nome, email, senha, id], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

// Rota para excluir um registro pelo ID
router.delete('/cadastros/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM cadastro WHERE idCadastro = ?', [id], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});

module.exports = router;


////////////////////////////////////////Login/////////////////////////////////////////////////
// Rota para listar todos os registros
router.get('/Login', (req, res) => {
  connection.query('SELECT * FROM Login', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID
router.get('/Login/:idLogin', (req, res) => {
  const { idLogin } = req.params;
  connection.query('SELECT * FROM Login WHERE idLogin = ?', [idLogin], (err, results) => {
    if (err) {
      console.error('Erro ao buscar o registro:', err);
      res.status(500).json({ error: 'Erro ao buscar o registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro não encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Rota para criar um novo registro
router.post('/Login', (req, res) => {
  const { email, senha } = req.body;
  connection.query('INSERT INTO Login ( email, senha) VALUES (?, ?)',
    [email, senha], (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.status(201).json({ message: 'Registro criado com sucesso', idLogin: result.insertId });
    });
});

// Rota para atualizar um registro existente pelo ID
router.put('/Login/:idLogin', (req, res) => {
  const { idLogin } = req.params;
  const { email, senha } = req.body;
  connection.query('UPDATE Login SET email = ?, senha = ? WHERE idLogin = ?',
    [email, senha, idLogin], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

// Rota para excluir um registro pelo ID
router.delete('/Login/:idLogin', (req, res) => {
  const { idLogin } = req.params;
  connection.query('DELETE FROM Login WHERE idLogin = ?', [idLogin], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});

////////////////////////////////////////Contato//////////////////////////////////////////////////////

// Rota para listar todos os registros
router.get('/Contato', (req, res) => {
  connection.query('SELECT * FROM Contato', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID
router.get('/Contato/:idContato', (req, res) => {
  const { idContato } = req.params;
  connection.query('SELECT * FROM Contato WHERE idContato = ?', [idContato], (err, results) => {
    if (err) {
      console.error('Erro ao buscar o registro:', err);
      res.status(500).json({ error: 'Erro ao buscar o registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro não encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Rota para criar um novo registro
router.post('/Contato', (req, res) => {
  const { nome, email, telefone, cpf } = req.body;
  connection.query('INSERT INTO Contato (nome, email, telefone, cpf) VALUES (?, ?, ?, ?)',
    [nome, email, telefone, cpf], (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.status(201).json({ message: 'Registro criado com sucesso', idContato: result.insertId });
    });
});

// Rota para atualizar um registro existente pelo ID
router.put('/Contato/:idContato', (req, res) => {
  const { idContato } = req.params;
  const { nome, email, telefone, cpf } = req.body;
  connection.query('UPDATE Contato SET nome = ?, email = ?, telefone = ?, cpf = ?  WHERE idContato = ?',
    [nome, email, telefone, cpf, idContato], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

// Rota para excluir um registro pelo ID
router.delete('/Contato/:idContato', (req, res) => {
  const { idContato } = req.params;
  connection.query('DELETE FROM Contato WHERE idContato = ?', [idContato], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});

module.exports = router;