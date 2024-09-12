import React, { useState } from 'react';
import '../Style/SliderCards1.css';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  // ID DO CARD
  const slides = [
    { name: 'Nome 1', topics: ['Lorem 1', 'Lorem 2', 'Lorem 3'], img: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Nome 2', topics: ['Lorem A', 'Lorem B', 'Lorem C'], img: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'Nome 3', topics: ['Lorem X', 'Lorem Y', 'Lorem Z'], img: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Nome 4', topics: ['Lorem D', 'Lorem E', 'Lorem F'], img: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { name: 'Nome 5', topics: ['Lorem G', 'Lorem H', 'Lorem I'], img: 'https://randomuser.me/api/portraits/men/5.jpg' },
  ];

  const transitionDuration = 500; // Tempo de transição em milissegundos

  const nextSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setTimeout(() => setTransitioning(false), transitionDuration);
  };

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    setTimeout(() => setTransitioning(false), transitionDuration);
  };

  // CARD
  return (
    <div className="slider-container">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <div className="slider">
        <div className="carousel">
          {slides.map((slide, index) => {
            const angle = (index - currentIndex + slides.length) % slides.length * 120;
            const scale = index === currentIndex ? 1.2 : 0.8;
            const zIndex = index === currentIndex ? 2 : 1;
            return (
              <div
                key={index}
                className="card"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(250px) scale(${scale})`,
                  zIndex: zIndex,
                }}
              >
                <img src={slide.img} alt={`Foto de Perfil ${index + 1}`} className="profile-pic" />
                <div className="content">
                  <h2>{slide.name}</h2>
                  <ul>
                    {slide.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                  <button className="card-button">Saiba Mais</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Slider;
