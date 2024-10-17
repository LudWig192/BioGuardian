import React, { useState } from 'react';
import '../Style/DuvidaBeneficio.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    { question: 'What services can I request?', id: 'QUESTION ONE' },
    { question: 'Do I need a contract?', id: 'QUESTION TWO' },
    { question: 'How quickly will the doctor respond?', id: 'QUESTION THREE' },
    { question: 'How much does it cost to sign a contract?', id: 'QUESTION FOUR' },
    { question: 'Can I choose a doctor myself?', id: 'QUESTION FIVE' },
  ];

  return (
    <div className="DuvidaBeneficio faq-container-perguntas">
      <div className="DuvidaBeneficio faq-left perguntas">
        {/* Elemento <p> removido */}
        <div className="DuvidaBeneficio">
          We give you peace of mind and ease of use - we make your life easier and safer.
        </div>
        <button className="DuvidaBeneficio faq-button">Get App</button>
      </div>
      <div className="DuvidaBeneficio faq-right perguntas">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`DuvidaBeneficio faq-item perguntas ${activeIndex === index ? 'active' : ''}`}
          >
            <div
              className="DuvidaBeneficio faq-question perguntas"
              onClick={() => handleToggle(index)}
            >
              <span className="DuvidaBeneficio">{item.id} - Perguntas</span>
              <span className="DuvidaBeneficio">{item.question}</span>
              <span className="DuvidaBeneficio faq-icon">
                {activeIndex === index ? '▲' : '▼'}
              </span>
            </div>
            {activeIndex === index && (
              <div className="DuvidaBeneficio faq-answer perguntas">
                <div className="DuvidaBeneficio">This is where the answer to the question will go.</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
