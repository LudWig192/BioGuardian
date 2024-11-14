//BIBLIOTECAS
import React from 'react';

//COMPONENTES
import Paciente from "../Components/Paciente";
import Vitals from '../Components/Vital';
import TestReports from '../Components/TestReports';
import Prescriptions from '../Components/Prescrisao';
import Navbar from '../Components/Navegacao-CCC';

//ESTILIZAÇÃO
import '../Style/PerfilCliente.css';
import { Container, Row, Col } from 'react-bootstrap';

function PerfilCliente() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <div className="left-panel">
            <Paciente />
          </div>
        </Row>
        <Row className="right-panel">
          <Vitals />
          <TestReports />
          <Prescriptions />
        </Row>
      </Container>
    
    </>
  );
}

export default PerfilCliente;