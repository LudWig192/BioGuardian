import React from 'react';
import '../Style/IdeiasCliente.css'; // Importando o arquivo de estilo
import { FaBullseye, FaUsers, FaEye } from 'react-icons/fa'; // Importando ícones específicos

const InfoSection = () => {
  return (
    <div className="info-supervisão-container"> {/* Contêiner principal */}
      <div className="image-container-supervisão"> {/* Contêiner da imagem */} 
        <img 
          src="link-da-imagem-medica.jpg" 
          alt="Doctor" 
          className="doctor-image-supervisão" 
        /> {/* Imagem do médico */}
      </div>
      
      <div className="supervisão-cards-container"> {/* Contêiner dos cartões */}
        <div className="info-card-supervisão"> {/* Cartão da missão */}
          <div className="icon-supervisão"> {/* Ícone da missão */}
            <FaBullseye />
          </div>
          <div className="title-supervisão">Our Mission</div> {/* Título da missão */}
          <div className="description-supervisão">Lorem ipsum is simply dummy text of the printing and typesetting industry.</div> {/* Descrição da missão */}
        </div>
        
        <div className="info-card-supervisão"> {/* Cartão sobre quem somos */}
          <div className="icon-supervisão"> {/* Ícone de identidade */}
            <FaUsers />
          </div>
          <div className="title-supervisão">Who we are</div> {/* Título sobre quem somos */}
          <div className="description-supervisão">Lorem ipsum is simply dummy text of the printing and typesetting industry.</div> {/* Descrição sobre quem somos */}
        </div>
        
        <div className="info-card-supervisão"> {/* Cartão da visão */}
          <div className="icon-supervisão"> {/* Ícone de visão */}
            <FaEye />
          </div>
          <div className="title-supervisão">Our Vision</div> {/* Título da visão */}
          <div className="description-supervisão">Lorem ipsum is simply dummy text of the printing and typesetting industry.</div> {/* Descrição da visão */}
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
