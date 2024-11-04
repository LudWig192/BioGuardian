import React from 'react';
import '../Style/IdeiasCliente.css';
import { FaBullseye, FaUsers, FaEye } from 'react-icons/fa';

const InfoSection = () => {
  return (
    <div className="info-supervisão-container">
      <div className="image-container-supervisão"> 
        <img 
          src="link-da-imagem-medica.jpg" 
          alt="Doctor" 
          className="doctor-image-supervisão" 
        />
      </div>
      
      <div className="supervisão-cards-container"> 
        <div className="info-card-supervisão">
          <div className="icon-supervisão"> 
            <FaBullseye />
          </div>
          <div className="title-supervisão">Our Mission</div> 
          <div className="description-supervisão">Lorem ipsum is simply dummy text of the printing and typesetting industry.</div> {/* Descrição da missão */}
        </div>
        
        <div className="info-card-supervisão"> 
          <div className="icon-supervisão"> 
            <FaUsers />
          </div>
          <div className="description-supervisão">Lorem ipsum is simply dummy text of the printing and typesetting industry.</div> {/* Descrição sobre quem somos */}
        </div>
        
        <div className="info-card-supervisão"> 
          <div className="icon-supervisão"> 
            <FaEye />
          </div>
          <div className="title-supervisão">Our Vision</div> 
          <div className="description-supervisão">Lorem ipsum is simply dummy text of the printing and typesetting industry.</div> {/* Descrição da visão */}
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
