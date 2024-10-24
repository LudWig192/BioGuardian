import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import '../Style/CardTabelaBeneficio.css';

const OptometristComponent = () => {
  return (
    <div className="optometrist-container">
      <div className="image-section">
        <div className="experience-badge">
          <span>20+</span>
          <p>Anos de Experiência</p>
        </div>
        <img
          src="path/to/your/image.jpg"
          alt="Optometrist conducting an eye exam"
          className="exam-image"
        />
      </div>
      <div className="content-section">
        <div className="about">
          <h2 className="cardsExameCliente">Sobre Nós</h2>
          <h1 className="cardsExameCliente">Melhor Optometrista & Cuidado Ocular em Quem Você Pode Confiar</h1>
          <p className="cardsExameCliente">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <ul className="services-list">
          <li className="cardsExameCliente">
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            Exames de Saúde Ocular
          </li>
          <li className="cardsExameCliente">
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            Serviços de Lentes de Contato
          </li>
          <li className="cardsExameCliente">
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            Correção a Laser para Olhos
          </li>
          <li className="cardsExameCliente">
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            Exames Oculares
          </li>
        </ul>
        <button className="more-info-button">Saiba Mais</button>
      </div>
    </div>
  );
};

export default OptometristComponent;
