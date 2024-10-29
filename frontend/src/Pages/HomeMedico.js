// IMPORTS DAS BIBLIOTECAS
import React, { useState } from 'react'; 
import { Container, Row, Col } from 'react-bootstrap';

// IMPORT ESTILIZAÇÃO
import '../Style/HomeMedico.css';

// IMPORTE OS COMPONENTES
import Cabecalho from '../Components/Calendario';
import Anatomy from '../../src/Corpo/Anatomy';
import Anotações from '../Components/Anotacoes';
import Grafico from "../Components/Grafico";
import Paciente from "../Components/Paciente";
import TestReports from '../Components/TestReports';
import Prescriptions from '../Components/Prescrisao';

// ----------------------------------------------------- 

const HomeMedico = () => {



  const [selectedDay, setSelectedDay] = useState("10"); // Estado para o dia selecionado

  const handleSelectDay = (day) => {
    setSelectedDay(day); // Atualiza o dia selecionado
  };

  return (
    <Container fluid>
      {/* <Row className='Status'> */}
      <Row className=''>
        <Col md={6}>
          <Anatomy />
        </Col>
        <Col md={6}>
          <Cabecalho className="cabecalhoBody" onSelectDay={handleSelectDay} />
        </Col>
      </Row>

      {/* <Row className='Consultas'>
        <Col md={12}>
          <Cabecalho onSelectDay={handleSelectDay} />
        </Col>
      </Row> */}

      {/* Gráfico e Bloco de notas */}
      <Row className='Relatorio'>
        <Col md={6} sm={12}>
          <Grafico />
        </Col>
        <Col md={6} sm={12}>
          <Anotações />
        </Col>
      </Row>

      <Row className='Informacoes'>
        <Col>
          <h2>Informações</h2>
        </Col>
      </Row>

      <Row className='Cliente'>
        <Col className='Perfil'>
          <Paciente />
        </Col>
        <Col className="Elementos-perfil">
          <TestReports />
          <Prescriptions />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeMedico;
