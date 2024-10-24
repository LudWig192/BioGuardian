import React from 'react';
import '../Style/ExameBeneficio.css';
import Image from "../Imagens/Diagnostico.jpg";

const Servicos = () => {
  return (
    <div className="servicos-container-examebeneficio"> 
      <div className="titulo-examebeneficio">Atendimentos de Saúde</div> {/* Alterado aqui */}
      <div className="descricao-servicos-examebeneficio">
        Monitoramento contínuo da saúde da sua família com suporte médico disponível. 
      </div>
      <div className="cards-container-examebeneficio"> 
        <div className="card-examebeneficio">
          <img src={Image} alt="Neurologia" className="imagem-examebeneficio" /> 
          <div className="texto-examebeneficio"> 
            <div className="titulo-card-examebeneficio">Neurologia</div> 
            <div className="descricao-examebeneficio">Exames para diagnóstico e acompanhamento neurológico.</div> 
          </div>
        </div>
        <div className="card-examebeneficio"> 
          <img src={Image} alt="Acidente e emergência" className="imagem-examebeneficio" /> 
          <div className="texto-examebeneficio"> 
            <div className="titulo-card-examebeneficio">Acidente e emergência</div> 
            <div className="descricao-examebeneficio">Atendimento imediato para situações de emergência.</div> 
          </div>
        </div>
      </div>
      <div className="cards-container-examebeneficio"> 
        <div className="card-examebeneficio"> 
          <img src={Image} alt="Imagens Diagnósticas" className="imagem-examebeneficio" /> 
          <div className="texto-examebeneficio"> 
            <div className="titulo-card-examebeneficio">Imagens Diagnósticas</div> 
            <div className="descricao-examebeneficio">Exames de imagem para diagnósticos precisos.</div> 
          </div>
        </div>
        <div className="card-examebeneficio"> 
          <img src={Image} alt="Anestesia" className="imagem-examebeneficio" /> 
          <div className="texto-examebeneficio"> 
            <div className="titulo-card-examebeneficio">Anestesia</div> 
            <div className="descricao-examebeneficio">Apoio anestésico durante procedimentos médicos.</div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicos;
