import { Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import Cabecalho from '../Components/Cabecalho';
import Anatomy from '../../src/Corpo/Anatomy';
import Anotações from '../Components/Anotacoes';
import '../Style/HomeMedico.css';
import Anatomia from "../Imagens/Anatomia.jpg"
import NavbarMedico from '../Components/Navegacao-medico'

const HomeMedico = () => {



  const [selectedDay, setSelectedDay] = useState("10"); // Estado para o dia selecionado

  const handleSelectDay = (day) => {
    setSelectedDay(day); // Atualiza o dia selecionado
  };

  return (
    <>
      <NavbarMedico />
      <Container fluid>
        <Row className='Status'>
          <Anatomy />
        </Row>

        <Row className='Consultas'>
          <Col md={8}>
            <Cabecalho onSelectDay={handleSelectDay} /> {/* Passa a função de seleção para o DateHeader */}
            <Anotações />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeMedico;
