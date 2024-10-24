import React from 'react';
import { FaFlask, FaSyringe } from 'react-icons/fa';
import Psicologia from '../Imagens/Psicologo.jpg'; // Verifique se o caminho da imagem está correto
import '../Style/MarcarConsultaCliente.css'; // Verifique se o caminho do CSS está correto

const ClinicalTrials = () => {
  // Verifique se o componente está sendo renderizado
  console.log('ClinicalTrials Component Rendered');

  return (
    <div className="MarcarConsulta-container">
      <div className="content-MarcarConsulta"> 
        <div className="main-MarcarConsulta">
          Estamos ajudando a avançar a saúde com Ensaios Clínicos.
        </div>
        <div className="description-MarcarConsulta"> 
          Esta iniciativa fornece soluções para melhorar a saúde. 
          Garantimos serviços de qualidade para a produção de novas vacinas e medicamentos. 
          Sua confiança é a chave para nosso desenvolvimento contínuo.
        </div>
        <div className="specialists-text">
          Temos uma equipe de especialistas, incluindo profissionais de saúde mental, 
          fisioterapeutas e especialistas em vacinas.
        </div>
        <div className="buttons-MarcarConsulta"> 
          <button className="MarcarConsulta-btn">Marcar Exame</button> 
          <button className="MarcarConsulta-btn">Entrar em Contato</button> 
        </div>
        <div className="icon-section-MarcarConsulta">
          <div className="icon-item-MarcarConsulta"> 
            <FaFlask className="MarcarConsulta-icon" /> 
            <span className="MarcarConsulta">Serviços de Classe Mundial</span>
          </div>
          <div className="icon-item-MarcarConsulta"> 
            <FaSyringe className="MarcarConsulta-icon" /> 
            <span className="MarcarConsulta">Líder em Desenvolvimento de Medicamentos</span>
          </div>
        </div>
      </div>
      <div className="image-container-MarcarConsulta"> 
        <img src={Psicologia} alt="Ensaios Clínicos" className="MarcarConsulta" />
      </div>
    </div>
  );
};

export default ClinicalTrials;
