
import React from 'react';
import "../Style/Unidades.css";
import { FaMapMarkerAlt } from 'react-icons/fa';
import hospitalImage from '../Imagens/ABC.jpeg';
import Brasil from '../Imagens/BRASIL.jpeg';
import Ana from '../Imagens/SANTA ANA.jpeg';
import UPA from '../Imagens/UPA.jpeg';
import municipal from '../Imagens/MUNICIPAL.jpeg';
import Luiz from '../Imagens/LUIZ.jpeg';
import Bartira from '../Imagens/BARTIRA.jpeg';
import Mario from '../Imagens/MARIO COVAS.jpeg';

const Card = ({ imageSrc, title, mapLink }) => (
 
  <div className="card-container">
    <img className="card-image" src={imageSrc} alt={title} />
    <div className="card-icon-container">
      <a href={mapLink} target="_blank" rel="noopener noreferrer" className="card-icon">
        <FaMapMarkerAlt size={24} />
      </a>
    </div>
    <div className="card-title">{title}</div>
  </div>
  
);

const cardData = [
  { imageSrc: hospitalImage, title: 'Hospital abc', mapLink: 'https://maps.app.goo.gl/r4wbzBsKoJDrvx977' },
  { imageSrc: Brasil, title: 'Hospital Brasil', mapLink: 'https://maps.app.goo.gl/LbGAkfH6AQWDkAeKA' },
  { imageSrc: Ana, title: 'Hospital Santa Ana ', mapLink: 'https://maps.app.goo.gl/kt1Ef5aaHEzSn2y56' },
  { imageSrc: UPA, title: 'Hospital albert sabin UPA', mapLink: 'https://maps.app.goo.gl/uLgYo4Qf6Rv9Frs87' },
  { imageSrc: municipal, title: 'Pronto socorro municipal', mapLink: 'https://maps.app.goo.gl/joq89FGPLzLcMjuWA' },
  { imageSrc: Luiz, title: 'Hospital São Luiz', mapLink: 'https://maps.app.goo.gl/gLFRDo5aKUHz8XNo8' },
  { imageSrc: Bartira, title: 'Hospital bartira', mapLink: 'https://maps.app.goo.gl/LHsmnjfae5MnXzz66' },
  { imageSrc: Mario, title: 'Hospital estadual Mário Covas', mapLink: 'https://maps.app.goo.gl/bcfRVvjT3b4UXwpa8' },
];

const CardGallery = () => (
  <div className="card-gallery">
    {cardData.map((card) => (
      <Card key={card.title} imageSrc={card.imageSrc} title={card.title} mapLink={card.mapLink} />
    ))}
  </div>
);

export default CardGallery;