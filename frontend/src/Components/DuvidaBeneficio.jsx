import React, { useState } from 'react';
import '../Style/DuvidaBeneficio.css';
import Medicos from "../Imagens/medicos.png"

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'Como funciona o monitoramento da saúde?',
      id: 'MONITORAMENTO',
      answer: 'O monitoramento da saúde é feito através da coleta de dados médicos da família, que são analisados por nossa inteligência artificial para identificar qualquer anomalia ou risco à saúde.'
    },
    {
      question: 'O que é incluído na assistência médica?',
      id: 'ASSISTENCIA_MEDICA',
      answer: 'A assistência médica inclui consultas com profissionais da saúde, suporte em emergências e atendimento domiciliar por médicos qualificados.'
    },
    {
      question: 'Quais dados são coletados para o monitoramento?',
      id: 'DADOS_COLETADOS',
      answer: 'Coletamos informações sobre o histórico médico da família, sintomas, condições preexistentes e outros dados relevantes para a saúde.'
    },
    {
      question: 'Qual é o tempo de resposta para o atendimento médico?',
      id: 'TEMPO_RESPOSTA',
      answer: 'O tempo de resposta varia de acordo com a gravidade da situação, mas nos esforçamos para que os médicos cheguem ao local em até 30 minutos durante emergências.'
    },
    {
      question: 'É necessário um contrato para utilizar o serviço?',
      id: 'CONTRATO',
      answer: 'Sim, é necessário assinar um contrato para usufruir dos nossos serviços de monitoramento e assistência médica.'
    },
  ];

  return (
    <div className="DuvidaBeneficio faq-container-perguntas">
      <div className="DuvidaBeneficio faq-left perguntas">
        {/* Imagem adicionada acima do texto */}
        <img src={Medicos} alt="BioGuardian" className="DuvidaBeneficio faq-image" />
        <div className="DuvidaBeneficio">
          O BioGuardian oferece monitoramento de saúde com inteligência artificial, além de assistência médica em emergências com atendimento domiciliar.
        </div>
      </div>
      <div className="DuvidaBeneficio faq-right perguntas">
        <div className="DuvidaBeneficio faq-title">Perguntas Frequentes</div>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`DuvidaBeneficio faq-item perguntas ${activeIndex === index ? 'active' : ''}`}
          >
            <div
              className="DuvidaBeneficio faq-question perguntas"
              onClick={() => handleToggle(index)}
            >
              <span className="DuvidaBeneficio">{item.question}</span>
              <span className="DuvidaBeneficio faq-icon">
                {activeIndex === index ? '▲' : '▼'}
              </span>
            </div>
            {activeIndex === index && (
              <div className="DuvidaBeneficio faq-answer perguntas">
                <div className="DuvidaBeneficio">{item.answer}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
