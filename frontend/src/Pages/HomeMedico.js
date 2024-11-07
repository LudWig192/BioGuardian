//IMPORT DAS BIBLIOTECAS
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//IMPORT DOS COMPONENTES
import Navbaradm from '../Components/Navegacao-medico'; //LOGIN ESPECIFICO
import Cabecalho from '../Components/Calendario';
import Anatomy from '../../src/Corpo/Anatomy'; //CORPO
import Anotações from '../Components/Anotacoes'; //BLOCO DE NOTAS
import Grafico from "../Components/GraficoMedico";
import Paciente from "../Components/Paciente";
import TestReports from '../Components/TestReports';
import Prescriptions from '../Components/Prescrisao';
import Footer from "../Components/Footer-Medico"

//IMPORT DA ESTILIZAÇÃO
import '../Style/HomeMedico.css';

const HomeMedico = () => {

  const [selectedDay, setSelectedDay] = useState("10");

  const handleSelectDay = (day) => {
    setSelectedDay(day);
  };

  return (
    <>
      <Navbaradm />
      <Container>
        <Row className='CorpoMedico'>
          <Col md={6} className='StatusPaciente'>
            <Anatomy />
          </Col>
          <Col md={6} className="cabecalhoMEDICO">
            <Cabecalho onSelectDay={handleSelectDay} />
          </Col>
        </Row>
        <Row className='Relatorio'>
          <Col md={6} sm={12} className='Grafico-Medico'>
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
      <Footer />
    </>
  );
};

export default HomeMedico;
