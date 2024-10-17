import React from 'react';
import { render } from 'react-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faVial, faXRay, faHeartbeat, faChartPie, faBrain } from '@fortawesome/free-solid-svg-icons';
import '../Style/ExameInformações.css'; // Certifique-se de que o caminho do CSS está correto
import Banner from "../Imagens/BannerExame.webp";

// Componente do Modal
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <FontAwesomeIcon icon={props.icon} className="modal-icon-examesIn" /> 
          {props.examName} {/* Nome do exame */}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-examesIn"> 
        <h4>Informações do Exame</h4>
        <p><strong>Como o exame será realizado:</strong> {props.examInstructions}</p>
        <p><strong>Data do exame:</strong> {props.examDate} às {props.examTime}</p>
        <p><strong>Data de entrega:</strong> {props.deliveryDate} às {props.deliveryTime}</p>
        <p><strong>Recomendações:</strong> {props.recommendations}</p>
        <p><strong>Nome do laboratório:</strong> {props.laboratoryName}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="modal-button-examesIn" onClick={props.onHide}> 
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

// Componente Principal
function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedExam, setSelectedExam] = React.useState({});

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
      laboratoryName: "Laboratório São Paulo Saúde"
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
      laboratoryName: "Laboratório São Paulo Saúde"
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
      laboratoryName: "Laboratório São Paulo Saúde"
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
      laboratoryName: "Laboratório São Paulo Saúde"
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
      laboratoryName: "Laboratório São Paulo Saúde"
    },
    {
      name: "Exame de Glicose",
      icon: faVial,
      instructions: "Em jejum por 8 horas.",
      date: "06/10/2024",
      time: "08:00",
      deliveryDate: "10/10/2024",
      deliveryTime: "12:00",
      recommendations: "Evitar açúcar 24 horas antes do exame.",
      laboratoryName: "Laboratório São Paulo Saúde"
    },
    {
      name: "Tomografia",
      icon: faBrain,
      instructions: "Levar laudos anteriores.",
      date: "07/10/2024",
      time: "10:00",
      deliveryDate: "11/10/2024",
      deliveryTime: "15:00",
      recommendations: "Não usar roupas metálicas.",
      laboratoryName: "Laboratório São Paulo Saúde"
    },
    {
      name: "Eletrocardiograma",
      icon: faHeartbeat,
      instructions: "Descansar 15 minutos antes do exame.",
      date: "08/10/2024",
      time: "09:30",
      deliveryDate: "12/10/2024",
      deliveryTime: "16:00",
      recommendations: "Evitar bebidas alcoólicas 24 horas antes do exame.",
      laboratoryName: "Laboratório São Paulo Saúde"
    },
    {
      name: "Exame de TSH",
      icon: faVial,
      instructions: "Pode ser feito a qualquer hora do dia.",
      date: "09/10/2024",
      time: "10:00",
      deliveryDate: "13/10/2024",
      deliveryTime: "15:30",
      recommendations: "Informe se estiver grávida ou amamentando.",
      laboratoryName: "Laboratório São Paulo Saúde"
    },
    {
      name: "Exame de PSA",
      icon: faVial,
      instructions: "Evitar atividade sexual 48 horas antes.",
      date: "10/10/2024",
      time: "08:00",
      deliveryDate: "14/10/2024",
      deliveryTime: "12:00",
      recommendations: "Não fazer exercícios físicos intensos.",
      laboratoryName: "Laboratório São Paulo Saúde"
    },
    {
      name: "Hemograma Completo",
      icon: faFlask,
      instructions: "Em jejum de 8 horas.",
      date: "11/10/2024",
      time: "09:00",
      deliveryDate: "15/10/2024",
      deliveryTime: "14:00",
      recommendations: "Evitar álcool 24 horas antes do exame.",
      laboratoryName: "Laboratório São Paulo Saúde"
    },
    {
      name: "Exame de Fezes",
      icon: faVial,
      instructions: "Coletar a amostra da primeira evacuação.",
      date: "12/10/2024",
      time: "11:00",
      deliveryDate: "16/10/2024",
      deliveryTime: "16:00",
      recommendations: "Evitar alimentos que alteram a cor das fezes.",
      laboratoryName: "Laboratório São Paulo Saúde"
    }
  ];

  const handleCardClick = (exam) => {
    setSelectedExam(exam);
    setModalShow(true);
  };

  return (
    <div className="exame-informacoes-container examesInformation"> {/* Adicionando a className aqui */}
      {/* Seção da Imagem */}
      <div className="image-section-examesIn"> 
        <div className="image-container-examesIn"> 
          <img
            src={Banner} // Substitua pelo caminho da sua imagem
            alt="Saúde"
            className="healthcare-image"
          />
          <div className="image-overlay"></div>
          <div className="header">
            <h1 className="header-title">Informações dos Exames</h1>
            <p className="header-subtitle">Saiba mais sobre os exames</p>
          </div>
        </div>
      </div>

      {/* Grid de Exames */}
      <div className="menu-grid-examesIn"> 
        {exams.map((exam) => (
          <div key={exam.name} className="menu-item-examesIn" onClick={() => handleCardClick(exam)}> 
            <FontAwesomeIcon icon={exam.icon} className="menu-icon-examesIn" /> 
            {exam.name}
          </div>
        ))}
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        icon={selectedExam.icon || faHeartbeat} // Ícone do exame selecionado
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
}

export default App;