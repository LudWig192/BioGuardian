import React from 'react';
import '../Style/InformacoesHome.css'; // Arquivo CSS separado para estilo
import { FaUserMd, FaAmbulance, FaClock, FaHospital } from 'react-icons/fa';
import Stethoscope from "../Imagens/Stethoscope.png"

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="container-InformacaoHomeSem">
        <h2>Why Choose Us</h2>
        <div className="content-HomeSem">
          <div className="left-section">
            <div className="card-informacaoSem">
              <FaUserMd className="icon-InformacaoHomeSem" />
              <h3>Qualified Doctors</h3>
            </div>
            <div className="card-informacaoSem">
              <FaAmbulance className="icon-InformacaoHomeSem" />
              <h3>Emergency Care</h3>
            </div>
            <div className="card-informacaoSem">
              <FaClock className="icon-InformacaoHomeSem" />
              <h3>24 Hours Service</h3>
            </div>
            <div className="card-informacaoSem">
              <FaHospital className="icon-InformacaoHomeSem" />
              <h3>Operation Theater</h3>
            </div>
          </div>
          <div className="right-HomeSem">
            <img src={Stethoscope} alt="Nova Imagem" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
