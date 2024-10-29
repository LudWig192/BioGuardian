import React from 'react';
import '../Style/TabelaCliente.css';
import Medico from "../Imagens/MedicoMonitorar.png";

const CustomerSatisfaction = () => {
  return (
    <div className="Medico24cliente-container"> {/* Contêiner pai */}
      <div className="Medico24cliente-customer"> 
        <div className="Medico24cliente-text"> 
          <div className="Medico24cliente-title">BioGuardian: Monitoramento de Saúde 24 horas</div> 
          <div className="Medico24cliente-description"> 
            O Dr. Almeida, nosso médico 24 horas, é especializado em monitoramento de saúde. Ele analisa os dados coletados, faz recomendações personalizadas e está sempre disponível para responder a qualquer dúvida. Em caso de emergências, médicos de plantão serão chamados para sua casa e irão realizar o atendimento médico apropriado.
          </div>
        </div>
        <div className="Medico24cliente-graphic"> 
          <img
            src={Medico} // Substitua pelo caminho correto da sua imagem
            alt="Ilustração"
            className="Medico24cliente-illustration" 
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfaction;
