import React from 'react';
import '../Style/SuportServiço.css'; // Importação do CSS
import Pediatria from "../Imagens/Pediatria.png"; // Imagem importada corretamente
import ExameImagem from "../Imagens/ExameImagem.png";
import Raio from "../Imagens/ExameRaio.png";
import Laboratório from "../Imagens/ExameLaboratorio.png";
import Mulher from "../Imagens/ExameMulher.png";
import Equipamentos from "../Imagens/Equipamentos.png"

const Services = () => {
  const servicesData = [
    { title: 'Pediatria', image: Pediatria },
    { title: 'Ressonância Magnética', image: ExameImagem },
    { title: 'Diagnóstico por Raios-X', image:  Raio },
    { title: 'Serviços de Laboratório', image: Laboratório },
    { title: 'Saúde da Mulher', image: Mulher },
    { title: 'Melhores Equipamentos', image: Equipamentos },
  ];

  return (
    <div className="services-section-suport services-suporte"> 
      <div className="services-title-suport services-suporte">BioGuardian - Plano de Saúde Inteligente</div> 
      <div className="services-description-support"> 
        Monitoramento contínuo, suporte médico 24 horas e acesso a especialistas para cuidar da sua saúde com tecnologia e precisão.
      </div>

      <div className="services-grid-suport"> 
        {servicesData.map((service, index) => (
          <div key={index} className="service-card-suport"> 
            <img src={service.image} alt={service.title} className="service-image" /> 
            <div className="service-overlay">
              <div className="service-title">{service.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
