import React from 'react';
import '../Style/CirugiaCliente.css';
import Cirurgia from "../Imagens/Cirurgia.jpg";

const DiagnoseTreat = () => {
  return (
    <div className="diagnose-container-cirugia-cliente"> 
      <div className="overlay-cirurgia-cliente"></div> {/* Camada de sobreposição */}
      <div className="image-cirugia-cliente"> 
        <img 
          src={Cirurgia}
          alt="Diagnose and Treat" 
          className="diagnose-image-cirugia-cliente"  
        />
      </div>
      <div className="text-cirugia-cliente"> 
        <div className="title-cirurgia-cliente">Nossas Cirurgias</div> 
        <div className="subtitle-cirurgia-cliente">Compromisso com a Saúde</div> 
        <div className="description-cirurgia-cliente"> 
          No BioGuardian, oferecemos serviços cirúrgicos realizados por profissionais qualificados. Desde cirurgias eletivas até emergenciais, garantimos segurança e conforto com técnicas modernas e acompanhamento personalizado para uma recuperação eficaz.
        </div>
      </div>
    </div>
  );
};

export default DiagnoseTreat;
