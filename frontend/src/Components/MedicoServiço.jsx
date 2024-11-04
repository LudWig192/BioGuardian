import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../Style/MedicoServiço.css';
import Medica from "../Imagens/Medico24h1 (1).png";
import Medico from "../Imagens/Medico24h1 (3).png";
import SegundaMedica from "../Imagens/Medico24h1 (2).png";

const SpecialistCard = () => {
  const specialists = [
    {
      image: Medica,
      name: 'Dra. Ana Souza',
      title: 'Fisioterapeuta 24h',
      description: 'Experiente em fornecer serviços de terapia física e reabilitação, disponível 24 horas.',
      socialMedia: [
        { icon: <FaFacebookF />, link: 'https://facebook.com' },
        { icon: <FaTwitter />, link: 'https://twitter.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' },
      ],
    },
    {
      image: Medico,
      name: 'Dr. Carlos Almeida',
      title: 'Médico Central 24h',
      description: 'Especialista em saúde geral, disponível 24 horas para emergências.',
      socialMedia: [
        { icon: <FaFacebookF />, link: 'https://facebook.com' },
        { icon: <FaTwitter />, link: 'https://twitter.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' },
      ],
    },
    {
      image: SegundaMedica,
      name: 'Dr. Maria Mendes',
      title: 'Cardiologista 24h',
      description: 'Especialista em saúde do coração e tratamentos cardiovasculares, disponível 24 horas.',
      socialMedia: [
        { icon: <FaFacebookF />, link: 'https://facebook.com' },
        { icon: <FaTwitter />, link: 'https://twitter.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' },
      ],
    },
  ];

  return (
    <div className="medicoServiço-container">
      <div className="medicoServiço-header">Conheça Nossos Profissionais 24h</div>
      <div className="medicoServiço-cards-container">
        {specialists.map((specialist, index) => (
          <div key={index} className={`profissional-card medicoServiço ${specialist.title.includes('Central') ? 'medico-central' : ''}`}>
            <div className="avatar-container-medicoServiço">
              <img src={specialist.image} alt={specialist.name} className="avatar medicoServiço" />
            </div>
            <div className="info-medicoServiço">
              <div className="medicoServiço-name">{specialist.name}</div>
              <div className="medicoServiço-title">{specialist.title}</div>
              <div className="medicoServiço-description">{specialist.description}</div>
            </div>
            <div className="medicoServiço-media">
              {specialist.socialMedia.map((icon, i) => (
                <a
                  key={i}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="medicoServiço-icon"
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialistCard;
