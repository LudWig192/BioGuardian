// IMPORTS DAS BIBLIOTECAS
import { Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react'; // Importar useState para gerenciar o estado

// IMPORT ESTILIZAÇÃO AQUI
import '../Style/HomeMedico.css';

// IMPORTE OS COMPONENTES
import Cabecalho from '../Components/Calendario';
import Anatomy from '../../src/Corpo/Anatomy';
import Anotações from '../Components/Anotacoes';
import Grafico from "../Components/Grafico";
import Paciente from "../Components/Paciente"
import Vitals from '../Components/Vital';
import TestReports from '../Components/TestReports';
import Prescriptions from '../Components/Prescrisao';

// IMPORTE IMAGENS

// ----------------------------------------------------- 

const HomeMedico = () => {
  const [selectedDay, setSelectedDay] = useState("10"); // Estado para o dia selecionado

  const handleSelectDay = (day) => {
    setSelectedDay(day); // Atualiza o dia selecionado
  };

  return (
    <Container fluid>
      <Row className='Status'>
        <Col md={8} >
          <Anatomy />
        </Col>
      </Row>
      <Row className='Consultas'>
        <Col md={8}>
          <Cabecalho onSelectDay={handleSelectDay} />
        </Col>
      </Row>
      {/*Grafico e Bloco de notas */}
      <Row className='Relatorio'>
        <Col >
          <Grafico />
        </Col>
        <Col>
          <Anotações />
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