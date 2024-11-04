import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'; 
import '../Style/PontosBeneficio.css';
import Pontos from "../Imagens/PontosBene (2).png";

const MedicalSection = () => {
  return (
    <div className="pontosbene-container"> 
      <div className="image-pontosbene"> 
        <img
          src={Pontos}
          alt="Doctors with X-ray"
          className="pontosbene-image" 
        />
      </div>
      <div className="content-pontosbene"> 
        <div className="pontosbene">Benefícios do BioGuardian</div>
        <div className="pontosbene descricao-centralizada">
          O serviço BioGuardian consiste em uma assinatura que irá monitorar a saúde de uma família ou um indivíduo, utilizando inteligência artificial que irá recolher o histórico médico da família e comparar com sintomas de diversas doenças, verificando se há alguma anomalia.
        </div>
        <div className="pontosbene">
          <div className="pontosbene">
            <FontAwesomeIcon icon={faCheckCircle} className="icon-pontosbene" /> Monitoramento contínuo da saúde familiar.
          </div>
          <div className="pontosbene">
            <FontAwesomeIcon icon={faCheckCircle} className="icon-pontosbene" /> Comparação de sintomas com históricos médicos.
          </div>
          <div className="pontosbene">
            <FontAwesomeIcon icon={faCheckCircle} className="icon-pontosbene" /> Auxílio médico em caso de emergências.
          </div>
          <div className="pontosbene">
            <FontAwesomeIcon icon={faCheckCircle} className="icon-pontosbene" /> Atendimento médico em casa, quando necessário.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalSection;
