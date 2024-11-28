import React from 'react';
import { FaClock, FaUser, FaHeartbeat, FaHospital } from 'react-icons/fa'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/BannerCliente.css'; 

const InfoSection = () => {
  return (
    <div className="bannercliente-container">
      <div className="banner-cliente-section">
        <img 
          src={require('../Imagens/BannerHomeCliente.png')} 
          alt="Banner Cliente" 
          className="banner-cliente-img"
        />
      </div>
    </div>
  );
};

export default InfoSection;
