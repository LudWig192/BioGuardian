import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import '../Style/MedicoHome.css';
import Nutricionista from "../Imagens/Nutricionista (1).png";
import Psiquiatria from "../Imagens/Psiquiatria.png";
import Fono from "../Imagens/Fonodialoga.png";
import Fisioterapeuta from "../Imagens/Fisioteraupeta.png";

const MedicoHome = () => {
    const doctors = [
        {
            name: 'Dr. Ana Oliveira',
            role: 'Nutricionista',
            image: Nutricionista,
            socialLinks: [
                { url: '#', icon: <FaFacebook /> },
                { url: '#', icon: <FaTwitter /> },
            ],
        },
        {
            name: 'Dr. João Almeida',
            role: 'Psiquiatra',
            image: Psiquiatria,
            socialLinks: [
                { url: '#', icon: <FaFacebook /> },
                { url: '#', icon: <FaTwitter /> },
            ],
        },
        {
            name: 'Dr. Maria Santos',
            role: 'Fonoaudiólogo',
            image: Fono,
            socialLinks: [
                { url: '#', icon: <FaFacebook /> },
                { url: '#', icon: <FaTwitter /> },
            ],
        },
        {
            name: 'Dr. Lucas Pereira',
            role: 'Fisioterapeuta',
            image: Fisioterapeuta,
            socialLinks: [
                { url: '#', icon: <FaFacebook /> },
                { url: '#', icon: <FaTwitter /> },
            ],
        },
    ];

    return (
        <div className="doctorHome-medico-home">
            <div className="doctorHome-title">Conheça Nossos Médicos</div>
            <div className="doctorHome-doctors-list">
                {doctors.map((doctor, index) => (
                    <div className="doctorHome-doctor-card" key={index}>
                        <img src={doctor.image} alt={doctor.name} className="doctorHome-doctor-image" />
                        <div className="doctorHome-doctor-info">
                            <div className="doctorHome-doctor-name">{doctor.name}</div>
                            <div className="doctorHome-doctor-role">{doctor.role}</div>
                        </div>
                        <div className="doctorHome-doctor-overlay">
                            <div className="doctorHome-social-links">
                                {doctor.socialLinks.map((link, i) => (
                                    <div key={i} className="doctorHome-social-icon-container">
                                        <a href={link.url} className="doctorHome-social-icon">
                                            {link.icon}
                                        </a>
                                        <span className="doctorHome-social-text">{doctor.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MedicoHome;
