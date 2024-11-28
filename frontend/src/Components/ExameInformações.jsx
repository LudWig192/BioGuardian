import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faVial, faXRay, faHeartbeat, faChartPie, faBrain } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../Style/ExameInformações.css';
import Banner from "../Imagens/BannerExame.png";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modalExames"
    >
      <Modal.Header closeButton className="modalExames-header">
        <Modal.Title id="contained-modal-title-vcenter" className="modalExames-title">
          <FontAwesomeIcon icon={props.icon} className="modalExames-icon" />
          {props.examName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalExames-body">
        <h4 className="modalExames-subtitle">Informações do Exame</h4>
        <p><strong>Como o exame será realizado:</strong> {props.examInstructions}</p>
        <p><strong>Data do exame:</strong> {props.examDate} às {props.examTime}</p>
        <p><strong>Data de entrega:</strong> {props.deliveryDate} às {props.deliveryTime}</p>
        <p><strong>Recomendações:</strong> {props.recommendations}</p>
        <p><strong>Nome do laboratório:</strong> {props.laboratoryName}</p>
      </Modal.Body>
      <Modal.Footer className="modalExames-footer">
        <Button className="modalExames-button" onClick={props.onHide}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedExam, setSelectedExam] = useState({});

  const exams = [
    {
      name: "Exame de Sangue",
      icon: faFlask,
      instructions: "Beba bastante água antes do exame.",
      date: "01/10/2024",
      time: "09:00",
      deliveryDate: "05/10/2024",
      deliveryTime: "15:00",
      recommendations: "Evite alimentos gordurosos 24 horas antes do exame.",
      laboratoryName: "Laboratório São Paulo Saúde",
    },
    {
      name: "Exame de Urina",
      icon: faVial,
      instructions: "Não faça xixi antes do exame.",
      date: "02/10/2024",
      time: "10:00",
      deliveryDate: "06/10/2024",
      deliveryTime: "14:00",
      recommendations: "Coletar a primeira urina da manhã.",
      laboratoryName: "Laboratório São Paulo Saúde",
    },
    {
      name: "Raio-X",
      icon: faXRay,
      instructions: "Não usar roupas metálicas.",
      date: "03/10/2024",
      time: "11:00",
      deliveryDate: "07/10/2024",
      deliveryTime: "16:00",
      recommendations: "Levar documentos e resultados anteriores.",
      laboratoryName: "Laboratório São Paulo Saúde",
    },
    {
      name: "Ultrassom",
      icon: faHeartbeat,
      instructions: "Beba água antes do exame.",
      date: "04/10/2024",
      time: "08:30",
      deliveryDate: "08/10/2024",
      deliveryTime: "13:00",
      recommendations: "Evitar alimentos antes do exame.",
      laboratoryName: "Laboratório São Paulo Saúde",
    },
    {
      name: "Exame de Colesterol",
      icon: faChartPie,
      instructions: "Em jejum de pelo menos 12 horas.",
      date: "05/10/2024",
      time: "10:30",
      deliveryDate: "09/10/2024",
      deliveryTime: "17:00",
      recommendations: "Evitar gordura antes do exame.",
      laboratoryName: "Laboratório São Paulo Saúde",
    },
    {
      name: "Exame Neurológico",
      icon: faBrain,
      instructions: "Durma bem na noite anterior.",
      date: "06/10/2024",
      time: "14:00",
      deliveryDate: "10/10/2024",
      deliveryTime: "12:00",
      recommendations: "Evitar cafeína antes do exame.",
      laboratoryName: "Laboratório São Paulo Saúde",
    },
    {
      name: "Teste de Esforço",
      icon: faHeartbeat,
      instructions: "Leve roupas confortáveis e tênis.",
      date: "07/10/2024",
      time: "08:00",
      deliveryDate: "11/10/2024",
      deliveryTime: "10:00",
      recommendations: "Evite cafeína e bebidas alcoólicas.",
      laboratoryName: "Laboratório São Paulo Saúde",
    },
    {
      name: "Tomografia Computadorizada",
      icon: faXRay,
      instructions: "Evite alimentos pesados antes do exame.",
      date: "08/10/2024",
      time: "13:30",
      deliveryDate: "12/10/2024",
      deliveryTime: "14:00",
      recommendations: "Chegue com 30 minutos de antecedência.",
      laboratoryName: "Laboratório São Paulo Saúde",
    },
     {
        name: "Teste de Função Pulmonar",
        icon: faBrain,
        instructions: "Evite fumar 6 horas antes do exame.",
        date: "09/10/2024",
        time: "09:30",
        deliveryDate: "13/10/2024",
        deliveryTime: "11:00",
        recommendations: "Levar documentos médicos anteriores.",
        laboratoryName: "Laboratório São Paulo Saúde",
      },
      {
        name: "Exame de Glicemia",
        icon: faChartPie,
        instructions: "Em jejum de 8 horas.",
        date: "10/10/2024",
        time: "07:30",
        deliveryDate: "14/10/2024",
        deliveryTime: "15:30",
        recommendations: "Evitar açúcares e doces na véspera.",
        laboratoryName: "Laboratório São Paulo Saúde",
      },
      {
        name: "Ressonância Magnética",
        icon: faXRay,
        instructions: "Não usar objetos metálicos.",
        date: "11/10/2024",
        time: "12:00",
        deliveryDate: "15/10/2024",
        deliveryTime: "14:00",
        recommendations: "Usar roupas leves e confortáveis.",
        laboratoryName: "Laboratório São Paulo Saúde",
      },
      {
        name: "Exame de Vitamina D",
        icon: faFlask,
        instructions: "Jejum de 4 horas.",
        date: "12/10/2024",
        time: "10:00",
        deliveryDate: "16/10/2024",
        deliveryTime: "16:00",
        recommendations: "Evitar suplementos vitamínicos por 24 horas.",
        laboratoryName: "Laboratório São Paulo Saúde",
      },
      {
        name: "Mamografia",
        icon: faHeartbeat,
        instructions: "Evitar desodorantes ou cremes no dia.",
        date: "13/10/2024",
        time: "15:00",
        deliveryDate: "17/10/2024",
        deliveryTime: "13:00",
        recommendations: "Levar exames anteriores, se houver.",
        laboratoryName: "Laboratório São Paulo Saúde",
      },
      {
        name: "Exame Cardiológico",
        icon: faHeartbeat,
        instructions: "Use roupas leves.",
        date: "14/10/2024",
        time: "11:00",
        deliveryDate: "18/10/2024",
        deliveryTime: "10:00",
        recommendations: "Não consumir cafeína antes do exame.",
        laboratoryName: "Laboratório São Paulo Saúde",
      },
      {
        name: "Densitometria Óssea",
        icon: faXRay,
        instructions: "Evite usar calçados metálicos.",
        date: "15/10/2024",
        time: "09:00",
        deliveryDate: "19/10/2024",
        deliveryTime: "12:00",
        recommendations: "Informe medicamentos em uso.",
        laboratoryName: "Laboratório São Paulo Saúde",
      },
    
  ];

  const handleCardClick = (exam) => {
    setSelectedExam(exam);
    setModalShow(true);
  };

  return (
    <div className="exame-informacoes-container examesInformation">
      <div className="image-section-examesIn">
        <div className="image-container-examesIn">
          <img
            src={Banner}
            alt="Saúde"
            className="healthcare-image"
          />
        </div>
      </div>

      <div className="menu-grid-examesIn">
        {exams.map((exam) => (
          <div
            key={exam.name}
            className="menu-item-examesIn"
            onClick={() => handleCardClick(exam)}
          >
            <FontAwesomeIcon icon={exam.icon} className="menu-icon-examesIn" />
            {exam.name}
          </div>
        ))}
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        icon={selectedExam.icon || faHeartbeat}
        examName={selectedExam.name || ""}
        examInstructions={selectedExam.instructions || ""}
        examDate={selectedExam.date || ""}
        examTime={selectedExam.time || ""}
        deliveryDate={selectedExam.deliveryDate || ""}
        deliveryTime={selectedExam.deliveryTime || ""}
        recommendations={selectedExam.recommendations || ""}
        laboratoryName={selectedExam.laboratoryName || ""}
      />
    </div>
  );
};

export default App;
