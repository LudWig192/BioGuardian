import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando o CSS do Bootstrap
import '../Style/DuvidaBene.css'; // Certifique-se de que o caminho está correto

const AccordionComponent = () => {
  return (
    <div className="page-background">
      <div className="layout-container">
        <div className="phrase-container">
          <h2>Ficou com alguma dúvida?</h2>
          <h6>Confira as perguntas mais frequentes</h6>
        </div>
        <div className="accordion-background">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0" className="accordion-item">
              <Accordion.Header>Como faço para solicitar meu prontuário médico?
              </Accordion.Header>
              <Accordion.Body>
              Uma dúvida frequente é sobre o processo de encaminhamento para especialistas dentro das unidades médicas. Pacientes muitas vezes se perguntam como funciona o processo de encaminhamento, quais são os critérios para obter uma consulta com um especialista e se é necessário um encaminhamento específico do médico de família. Compreender esses procedimentos pode ajudar a garantir que o paciente receba o atendimento adequado de forma eficiente e sem atrasos.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="accordion-item">
              <Accordion.Header>Sobre o processo de encaminhamento para especialistas:
              </Accordion.Header>
              <Accordion.Body>
              Outro ponto de dúvida comum é o que está coberto pelo plano de saúde em relação aos serviços oferecidos pelas unidades médicas. Pacientes frequentemente questionam se exames, consultas ou procedimentos específicos estão incluídos em seu plano e quais são as condições para a cobertura. É essencial revisar o contrato do plano e entrar em contato com o atendimento ao cliente da operadora para esclarecer essas questões.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="accordion-item">
              <Accordion.Header>Sobre o acesso aos registros médicos:
              </Accordion.Header>
              <Accordion.Body>
              Muitas pessoas têm dúvidas sobre como acessar seus registros médicos em unidades de saúde. É importante saber quais documentos são necessários para solicitar uma cópia dos registros e como garantir que a informação esteja correta e atualizada. A maioria das unidades médicas permite que pacientes solicitem registros através de um portal online, por e-mail ou pessoalmente, mas pode haver variações dependendo do local.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;