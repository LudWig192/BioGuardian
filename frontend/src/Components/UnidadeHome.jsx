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
          <div className="UnidadeHome-featured-title">Unidades de Saúde</div>
          <div className="UnidadeHome-properties-list">
            <div className="UnidadeHome-property-card">
              <img src={HospitalSP} alt="Hospital 1" />
              <div className="UnidadeHome-property-info">
                <div className="UnidadeHome-property-name">Hospital SP</div>
                <div className="UnidadeHome-property-location">São Paulo, SP</div>
              </div>
            </div>
            <div className="UnidadeHome-property-card">
              <img src={HospitalSirio} alt="Hospital 2" />
              <div className="UnidadeHome-property-info">
                <div className="UnidadeHome-property-name">Hospital Sirio Libano</div>
                <div className="UnidadeHome-property-location">São Paulo, SP</div>
              </div>
            </div>
            <div className="UnidadeHome-property-card">
              <img src={HospitalAlbert} alt="Hospital 3" />
              <div className="UnidadeHome-property-info">
                <div className="UnidadeHome-property-name">Hospital Albert Einstein</div>
                <div className="UnidadeHome-property-location">São Paulo, SP</div>
              </div>
            </div>
          </div>
        </div>
        <div className="UnidadeHome-sidebar-Home" style={{ width: '350px', marginLeft: '20px' }}>
          <div className="UnidadeHome-sidebar-title">Encontre sua Unidade de Saúde</div>
          <div className="UnidadeHome-sidebar-description">
            Em nossas unidades, você pode realizar exames e consultas. Qualquer anomalia grave será indicada para hospitais mais perto.
          </div>
          <button className="UnidadeHome-explore-btn" style={{ marginTop: '20px' }}>
            Explore todas <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
