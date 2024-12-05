import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Style/AvaliacaoCliente.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
 import Thiago from '../Imagens/Thiago.jpeg';
 import Bruna from '../Imagens/Bruna.jpeg';
 import Tatiana from '../Imagens/Tatiana.jpeg';
 import Caio from '../Imagens/Caio.jpeg';

const reviews = [
    {
        id: 1,
        patientName: 'Thiago Almeida',
        doctorName: 'Dr. João Silva',
        rating: 5,
        comment: 'Excelente atendimento! O Dr. João foi muito atencioso e esclareceu todas as minhas dúvidas.',
         photo: Thiago,
    },
    {
        id: 2,
        patientName: 'Bruna Souza',
        doctorName: 'Dra. Maria Oliveira',
        rating: 5,
        comment: 'A Dra. Maria é uma profissional incrível. O cuidado e a atenção dela me fizeram sentir muito à vontade.',
         photo: Bruna,
    },
    {
        id: 3,
        patientName: 'Caio Santos',
        doctorName: 'Dr. Carlos Ferreira',
        rating: 5,
        comment: 'Médico extremamente competente e dedicado. Recomendo a todos que precisarem de atendimento!',
         photo: Caio,
    },
    {
        id: 4,
        patientName: 'Tatiana Costa',
        doctorName: 'Dra. Ana Clara',
        rating: 5,
        comment: 'A Dra. Ana foi maravilhosa! Me deixou tranquila durante todo o processo e demonstrou muito conhecimento.',
         photo: Tatiana,
    },
];

const Avaliacoes = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className="avaliacoes-container">
            <h2 className="avaliacoes-title">Avaliações dos nossos clientes</h2>
            <p className="avaliacoes-description">Veja o que nossos pacientes estão dizendo sobre nós!</p>
            <Slider {...settings}>
                {reviews.map(({ id, patientName, doctorName, rating, comment, photo }) => (
                    <div key={id} className="avaliacao-card">
                        <div className="avaliacao-info">
                            <img src={photo} alt={patientName} className="avaliacao-photo" />
                            <div className="avaliacao-patient-details">
                                <p className="avaliacao-patient-name">{patientName}</p>
                                <p className="avaliacao-doctor-name">Dr(a). {doctorName}</p>
                            </div>
                        </div>
                        <div className="avaliacao-rating-container">
                            <p className="avaliacao-rating">
                                {[...Array(5)].map((_, index) => (
                                    <FontAwesomeIcon
                                        key={index}
                                        icon={index < rating ? solidStar : regularStar}
                                        className="avaliacao-star-icon"
                                    />
                                ))}
                            </p>
                            <p className="avaliacao-comment">"{comment}"</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Avaliacoes;