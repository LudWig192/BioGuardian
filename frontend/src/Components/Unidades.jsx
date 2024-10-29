import React from 'react';
import "../Style/Unidades.css";
import { FaMapMarkerAlt } from 'react-icons/fa';
import hospitalImage from '../Imagens/ABC.jpeg';
import Brasil from '../Imagens/BRASIL.jpeg';
import Ana from '../Imagens/SANTA ANA.jpeg';
import UPA from '../Imagens/UPA.jpeg';
import Municipal from '../Imagens/MUNICIPAL.jpeg';
import Luiz from '../Imagens/LUIZ.jpeg';
import Bartira from '../Imagens/BARTIRA.jpeg';
import Mario from '../Imagens/MARIO COVAS.jpeg';

const Card = ({ imageSrc, title, mapLink }) => (
  <div className="hospital-card-container">
    <img className="hospital-card-image" src={imageSrc} alt={title} />
    <div className="hospital-card-icon-container">
      <a href={mapLink} target="_blank" rel="noopener noreferrer" className="hospital-card-icon">
        <FaMapMarkerAlt size={18} />
      </a>
    </div>
    <div className="hospital-card-title">{title}</div>
  </div>
);

const cardData = [
  { imageSrc: hospitalImage, title: 'Hospital ABC', mapLink: 'https://maps.app.goo.gl/r4wbzBsKoJDrvx977' },
  { imageSrc: Brasil, title: 'Hospital Brasil', mapLink: 'https://maps.app.goo.gl/LbGAkfH6AQWDkAeKA' },
  { imageSrc: Ana, title: 'Hospital Santa Ana', mapLink: 'https://maps.app.goo.gl/kt1Ef5aaHEzSn2y56' },
  { imageSrc: UPA, title: 'Hospital Albert Sabin UPA', mapLink: 'https://maps.app.goo.gl/uLgYo4Qf6Rv9Frs87' },
  { imageSrc: Municipal, title: 'Pronto Socorro Municipal', mapLink: 'https://maps.app.goo.gl/joq89FGPLzLcMjuWA' },
  { imageSrc: Luiz, title: 'Hospital São Luiz', mapLink: 'https://maps.app.goo.gl/gLFRDo5aKUHz8XNo8' },
  { imageSrc: Bartira, title: 'Hospital Bartira', mapLink: 'https://maps.app.goo.gl/LHsmnjfae5MnXzz66' },
  { imageSrc: Mario, title: 'Hospital Estadual Mário Covas', mapLink: 'https://maps.app.goo.gl/bcfRVvjT3b4UXwpa8' },
];

const CardGallery = () => (
  <div className="hospital-card-gallery">
    {cardData.map((card) => (
      <Card key={card.title} imageSrc={card.imageSrc} title={card.title} mapLink={card.mapLink} />
    ))}
  </div>
);

export default CardGallery;
