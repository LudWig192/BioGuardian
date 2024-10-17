// IMPORTS DAS BIBLIOTECAS
import { Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react'; // Importar useState para gerenciar o estado

// IMPORT ESTILIZAÇÃO AQUI
import '../Style/HomeMedico.css';

// IMPORTE OS COMPONENTES
import Cabecalho from '../Components/Calendario';
import Anatomy from '../../src/Corpo/Anatomy';
import Anotações from '../Components/Anotacoes';
// import Grafico from "../Components/"

// IMPORTE IMAGENS


const HomeMedico = () => {
  const [selectedDay, setSelectedDay] = useState("10"); // Estado para o dia selecionado

  const handleSelectDay = (day) => {
    setSelectedDay(day); // Atualiza o dia selecionado
  };

  return (
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
  );
};

export default HomeMedico;