import React from 'react';
import '../Style/ExameBeneficio.css';
import Neurologista from "../Imagens/Neurologista.jpg";
import Acidente from "../Imagens/Emergência.avif";
import Diagnósticas from "../Imagens/Diagnostico.webp";
import Anestesia from "../Imagens/Anestesia.jpg"; 

const Servicos = () => {
  return (
    <div className="servicos-container-examebeneficio"> 
      <div className="titulo-examebeneficio">Atendimentos de Saúde</div> {/* Alterado aqui */}
      <div className="descricao-servicos-examebeneficio">
        Monitoramento contínuo da saúde da sua família com suporte médico disponível. 
      </div>
      <div className="cards-container-examebeneficio"> 
        <div className="card-examebeneficio">
          <img src={Neurologista} alt="Neurologia" className="imagem-examebeneficio" /> 
          <div className="texto-examebeneficio"> 
            <div className="titulo-card-examebeneficio">Neurologia</div> 
            <div className="descricao-examebeneficio">Exames para diagnóstico e acompanhamento neurológico.</div> 
          </div>
        </div>
        <div className="card-examebeneficio"> 
          <img src={Acidente} alt="Acidente e emergência" className="imagem-examebeneficio" /> 
          <div className="texto-examebeneficio"> 
            <div className="titulo-card-examebeneficio">Acidente e emergência</div> 
            <div className="descricao-examebeneficio">Atendimento imediato para situações de emergência.</div> 
          </div>
        </div>
      </div>
      <div className="cards-container-examebeneficio"> 
        <div className="card-examebeneficio"> 
          <img src={Diagnósticas} alt="Imagens Diagnósticas" className="imagem-examebeneficio" /> 
          <div className="texto-examebeneficio"> 
            <div className="titulo-card-examebeneficio">Imagens Diagnósticas</div> 
            <div className="descricao-examebeneficio">Exames de imagem para diagnósticos precisos.</div> 
          </div>
        </div>
        <div className="card-examebeneficio"> 
          <img src={Anestesia} alt="Anestesia" className="imagem-examebeneficio" /> 
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
