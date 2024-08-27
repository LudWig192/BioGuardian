import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "../Css/Duvidas.css";

const AccordionComponent = () => {
    return (
        <div className="page-background">
            <div className="layout-container">
                <div className="phrase-container">
                    <h2>Dúvidas frequentes sobre as unidades</h2>
                    <h3>Confira as perguntas mais frequentes</h3>
                </div>
                <div className="accordion-background">
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0" className="accordion-item">
                            <Accordion.Header>Dúvidas sobre a Especialização das Unidades</Accordion.Header>
                            <Accordion.Body>
                                Muitas pessoas têm dificuldades em entender quais tipos de cuidados cada unidade hospitalar oferece. Por exemplo, a diferença entre uma unidade de terapia intensiva (UTI) e uma unidade de pronto atendimento (PA) pode ser confusa. A UTI é destinada a pacientes com condições críticas que necessitam de monitoramento e tratamento intensivo contínuo, enquanto o PA é projetado para lidar com emergências menos graves e triagem de casos. Compreender essas distinções é crucial para buscar o tratamento adequado.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="accordion-item">
                            <Accordion.Header>Questões sobre Acesso e Internação</Accordion.Header>
                            <Accordion.Body>
                                Outro ponto de confusão comum é o processo de admissão e acesso aos diferentes tipos de unidades. Muitas pessoas não sabem como e quando devem ser internadas em unidades específicas, como uma unidade de oncologia ou cardiologia. Além disso, há incertezas sobre quais documentos e exames são necessários para a internação e se é necessário um encaminhamento médico. Essas dúvidas podem causar estresse adicional em momentos críticos e impactar a eficiência do atendimento.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="accordion-item">
                            <Accordion.Header>Incertezas Relacionadas ao Atendimento e às Regras da Unidade:</Accordion.Header>
                            <Accordion.Body>
                                Existem também dúvidas frequentes sobre o funcionamento interno das unidades hospitalares, incluindo as regras de visitação e os horários de atendimento. Os familiares e pacientes podem se perguntar sobre as restrições de visitantes, as regras para acompanhantes, e como a comunicação com a equipe médica deve ser feita. A falta de clareza nessas áreas pode levar a mal-entendidos e frustrações, tornando a experiência hospitalar ainda mais desafiadora.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default AccordionComponent;
