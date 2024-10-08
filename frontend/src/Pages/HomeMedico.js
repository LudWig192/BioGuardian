// IMPORTS DAS BIBLIOTECAS
import { Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react'; // Importar useState para gerenciar o estado

// IMPORT ESTILIZAÇÃO AQUI
import '../Style/HomeMedico.css';

// IMPORTE OS COMPONENTES
import Cabecalho from '../Components/Cabecalho';
import ItemTarefa from '../Components/ItemTarefa';
import Anotações from '../Components/Anotacoes';
import DayDetails from '../Components/Detalhes'; // Importando o DayDetails

// IMPORTE IMAGENS
import Anatomia from "../Imagens/Anatomia.jpg"

const HomeMedico = () => {
  const [selectedDay, setSelectedDay] = useState("10"); // Estado para o dia selecionado

  const handleSelectDay = (day) => {
    setSelectedDay(day); // Atualiza o dia selecionado
  };

  return (
    <Container fluid>
      <Row className='Status'>
        <img src={Anatomia} className='corpoExemplo' alt="Anatomia Exemplo" />
      </Row>

      <Row className='Consultas'>
        <Col>
          <Cabecalho onSelectDay={handleSelectDay} /> {/* Passa a função de seleção para o DateHeader */}
          <DayDetails selectedDay={selectedDay} /> {/* Exibe os detalhes do dia selecionado */}
          <Anotações />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeMedico;
