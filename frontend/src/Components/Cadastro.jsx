import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Cadastro.css';
import { Link } from 'react-router-dom';

function CadastroForm() {
  return (
    <div className='Background'>
      <div className="container">
        <div className="form-container">
          <h2 className="text-center">Cadastro</h2>
          <Form className="custom-form">

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Nome" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Exemplo@exemplo.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Nunca compartilhe suas senhas com ninguém" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Concordo com os termos de uso" />
            </Form.Group>

            <Button className="btn-primary" type="submit">
              Enviar
            </Button>
            <div className="JTC">
              <p>Não tem Cadastro ainda? Faça seu
                <span className="Link">
                  <Link to="/Login">Login</Link>
                </span>
              </p>
            </div>

          </Form>
        </div>
      </div>
    </div>
  );
}

export default CadastroForm;