import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import '../Style/UnidadeHome.css';
import HospitalSP from "../Imagens/Hospital_SP1.jpg";
import HospitalSirio from "../Imagens/Hospital_Libano.jpg";
import HospitalAlbert from "../Imagens/einstein.jpeg";

const FeaturedProperties = () => {
  return (
    <div className="UnidadeHome-featured-properties-wrapper">
      <div className="UnidadeHome-featured-properties">
        <div className="UnidadeHome-content">
          <div className="UnidadeHome-featured-title">Unidades Próximas</div>
          <div className="UnidadeHome-properties-list">
            <div className="UnidadeHome-property-card">
              <img src={HospitalSP} alt="Hospital SP" />
              <div className="UnidadeHome-property-info">
                <div className="UnidadeHome-property-name">Hospital SP</div>
                <div className="UnidadeHome-property-location">São Paulo, SP</div>
              </div>
            </div>
            <div className="UnidadeHome-property-card">
              <img src={HospitalSirio} alt="Hospital Sirio Libano" />
              <div className="UnidadeHome-property-info">
                <div className="UnidadeHome-property-name">Hospital Sirio Libano</div>
                <div className="UnidadeHome-property-location">São Paulo, SP</div>
              </div>
            </div>
            <div className="UnidadeHome-property-card">
              <img src={HospitalAlbert} alt="Hospital Albert Einstein" />
              <div className="UnidadeHome-property-info">
                <div className="UnidadeHome-property-name">Hospital Albert Einstein</div>
                <div className="UnidadeHome-property-location">São Paulo, SP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
