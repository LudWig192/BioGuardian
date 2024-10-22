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

// IMPORTE IMAGENS


const HomeMedico = () => {
  const [selectedDay, setSelectedDay] = useState("10"); // Estado para o dia selecionado

  const handleSelectDay = (day) => {
    setSelectedDay(day); // Atualiza o dia selecionado
  };

  return (
    <Container fluid> {/* Container da pagina*/}
      <Row className='Status'> {/*Divisao do Corpo */}
        <Col md={8} >
          <Anatomy />
        </Col>
        <Col md={8} className='Linha'>
          <Grafico />
        </Col>
      </Row>

      <Row className='Consultas'> {/* Divisao do Calendario*/}
        <Col md={8}>
          <Cabecalho onSelectDay={handleSelectDay} /> {/* Passa a função de seleção para o DateHeader */}
          <Anotações />
        </Col>
      </Row>
      <Row className='Cliente'>
        <Col = {md01} className=''></Col>
        <Paciente />
      </Row>
    </Container>


  );
};

export default HomeMedico;