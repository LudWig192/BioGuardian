import React from "react";
import Imagem1 from "../Imagens/Bom.png"; // Substitua pelo caminho real da imagem
import "../Style/UnidadeBeneficio.css"; // Caminho do CSS

const insuranceData = [
  {
    title: "Vehicle Insurance",
    description: "Covers cars, motorcycles, and other vehicles.",
    imgSrc: Imagem1,
  },
  {
    title: "Life Insurance",
    description: "Provides security for your family.",
    imgSrc: Imagem1,
  },
  {
    title: "Home Insurance",
    description: "Protects your house from damages.",
    imgSrc: Imagem1,
  },
  {
    title: "Health Insurance",
    description: "Ensures access to quality healthcare.",
    imgSrc: Imagem1,
  },
];

const InsuranceCard = ({ title, description, imgSrc }) => {
  return (
    <div className="UnidadesBeneficio-card">
      <img src={imgSrc} alt={title} className="UnidadesBeneficio-cardImage" />
      <div className="UnidadesBeneficio-cardContent">
        <div className="UnidadesBeneficio-cardTitle">{title}</div> {/* Título dentro do cartão */}
        <div className="UnidadesBeneficio-cardDescription">{description}</div> {/* Descrição dentro do cartão */}
      </div>
    </div>
  );
};

const InsuranceGrid = () => {
  return (
    <div className="UnidadesBeneficio-gridSection">
      <div className="UnidadesBeneficio-gridHeading">
        Estamos cobrindo todas as áreas de seguros
      </div>
      <div className="UnidadesBeneficio-gridSubtitle">
        Explore uma ampla gama de serviços de seguro para garantir seu futuro e
        seus ativos.
      </div>
      <div className="UnidadesBeneficio-gridContainer">
        {insuranceData.map((item, index) => (
          <InsuranceCard
            key={index}
            title={item.title}
            description={item.description}
            imgSrc={item.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default InsuranceGrid;
