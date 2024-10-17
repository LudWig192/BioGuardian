import React from 'react';
import '../Style/CardTabelaBeneficio.css';
import Familia from "../Imagens/FamiliaCardBeneficio.png";
import Tecnologia from "../Imagens/TecnologiaBeneficio.png";

const CardTabelaBeneficioDentista = () => {
  return (
    <div className="CardTabelaBeneficio-container">
      <div className="CardTabelaBeneficio-content">
        <div className="CardTabelaBeneficio-cards">
          <div className="CardTabelaBeneficio-card">
            <img src={Familia} alt="Saúde da Família" className="CardTabelaBeneficio-image" />
            <div className="CardTabelaBeneficio-card-content">
              <div className="tituloTabelaBeneficio">Monitore a saúde da sua família com BioGuardian</div>
              <div className="textoTabelaBeneficio"> 
                O BioGuardian utiliza inteligência artificial para monitorar a saúde da sua família, analisando o histórico médico e identificando anomalias. Tenha a tranquilidade de saber que sua saúde está em boas mãos.
              </div>
              <button className="buttonTabelaBeneficio">Saiba Mais</button>
            </div>
          </div>
          <div className="CardTabelaBeneficio-card">
            <img src={Tecnologia} alt="Tecnologia" className="CardTabelaBeneficio-image" />
            <div className="CardTabelaBeneficio-card-content">
              <div className="tituloTabelaBeneficio">Benefícios do BioGuardian</div>
              <div className="textoTabelaBeneficio"> 
                Aqui estão alguns dos principais benefícios do BioGuardian:
              </div>
              <div className="listaTabelaBeneficios"> 
                <div className="itemTabelaBeneficio">Monitoramento de saúde 24/7</div>
                <div className="itemTabelaBeneficio">Assistência médica em emergências</div>
                <div className="itemTabelaBeneficio">Análise de sintomas </div>
              
               
              </div>
              <button className="buttonTabelaBeneficio">Saiba Mais</button>
            </div>
          </div>
        </div>
        <div className="CardTabelaBeneficio-working-hours">
          <div className="tituloHorasTabelaBeneficio">Horários de Exames</div> 
          <div className="tabelaHorasTabelaBeneficio"> 
            <div className="linhaHorasTabelaBeneficio"> 
              <div>Segunda</div>
              <div>8AM - 5PM</div>
            </div>
            <div className="linhaHorasTabelaBeneficio"> 
              <div>Terça</div>
              <div>8AM - 5PM</div>
            </div>
            <div className="linhaHorasTabelaBeneficio">
              <div>Quarta</div>
              <div>8AM - 7PM</div>
            </div>
            <div className="linhaHorasTabelaBeneficio">
              <div>Quinta</div>
              <div>8AM - 5PM</div>
            </div>
            <div className="linhaHorasTabelaBeneficio">
              <div>Sexta</div>
              <div>8AM - 5PM</div>
            </div>
            <div className="linhaHorasTabelaBeneficio">
              <div>Sábado</div>
              <div>8AM - 3PM</div>
            </div>
            <div className="linhaHorasTabelaBeneficio">
              <div>Domingo</div>
              <div>FECHADO</div>
            </div>
          </div>
          <button className="buttonTabelaBeneficio">Ligue para Nós: 999-7777-1212</button>
        </div>
      </div>
    </div>
  );
};

export default CardTabelaBeneficioDentista;
