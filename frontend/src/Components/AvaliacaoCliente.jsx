import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Style/AvaliacaoCliente.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const reviews = [
    {
        id: 1,
        patientName: 'Tiano Almeida',
        doctorName: 'Dr. João Silva',
        rating: 5,
        comment: 'Excelente atendimento! O Dr. João foi muito atencioso e esclareceu todas as minhas dúvidas.',
        photo: 'url_da_foto_1.jpg', // Substitua pela URL da foto
    },
    // Adicione mais avaliações aqui
    {
        id: 2,
        patientName: 'Bruna Souza',
        doctorName: 'Dra. Maria Oliveira',
        rating: 5,
        comment: 'A Dra. Maria é uma profissional incrível. O cuidado e a atenção dela me fizeram sentir muito à vontade.',
        photo: 'url_da_foto_2.jpg', // Substitua pela URL da foto
    },
    {
        id: 3,
        patientName: 'Renner Santos',
        doctorName: 'Dr. Carlos Ferreira',
        rating: 5,
        comment: 'Médico extremamente competente e dedicado. Recomendo a todos que precisarem de atendimento!',
        photo: 'url_da_foto_3.jpg', // Substitua pela URL da foto
    },
    {
        id: 4,
        patientName: 'Tatiana Costa',
        doctorName: 'Dra. Ana Clara',
        rating: 5,
        comment: 'A Dra. Ana foi maravilhosa! Me deixou tranquila durante todo o processo e demonstrou muito conhecimento.',
        photo: 'url_da_foto_4.jpg', // Substitua pela URL da foto
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
        <div className="avaliacoes">
            <h2>Avaliações dos nossos clientes</h2>
            <p>Veja o que nossos pacientes estão dizendo sobre nós!</p>
            <Slider {...settings}>
                {reviews.map(({ id, patientName, doctorName, rating, comment, photo }) => (
                    <div key={id} className="card">
                        <div className="info">
                            <img src={photo} alt={patientName} className="photo" />
                            <div className="patient-details">
                                <p className="patient-name">{patientName}</p>
                                <p className="doctor-name">Dr(a). {doctorName}</p>
                            </div>
                        </div>
                        <div className="rating-container">
                            <p className="rating">
                                {[...Array(5)].map((_, index) => (
                                    <FontAwesomeIcon
                                        key={index}
                                        icon={index < rating ? solidStar : regularStar}
                                        className="star-icon"
                                    />
                                ))}
                            </p>
                            <p className="comment">"{comment}"</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Avaliacoes;
