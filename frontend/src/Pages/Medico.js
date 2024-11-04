import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from "react-bootstrap";
import avatar from "../Imagens/Medico.avif";
import "../Style/Medico.css";

function ShapeExample() {
  return (
    <Container className="main">
      <Row>
        <Col xs={6} md={4} className="Medico ">
        <Image src={avatar} thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;