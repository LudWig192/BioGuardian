// src/components/SwiperComponent.jsx

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Importando o CSS do Swiper
import 'swiper/css/pagination'; // Importando CSS da paginação
import 'swiper/css/navigation'; // Importando CSS da navegação
import '../Style/CardCarroseul.css';

const SwiperComponent = () => {
  // Perfis dos usuários
  const profiles = [
    { id: 1, img: 'images/profile1.jpg', name: 'Someone Name', profession: 'Web Developer' },
    { id: 2, img: 'images/profile2.jpg', name: 'Someone Name', profession: 'Web Developer' },
    { id: 3, img: 'images/profile3.jpg', name: 'Someone Name', profession: 'Web Developer' },
    { id: 4, img: 'images/profile4.jpg', name: 'Someone Name', profession: 'Web Developer' },
    { id: 5, img: 'images/profile5.jpg', name: 'Someone Name', profession: 'Web Developer' },
    { id: 6, img: 'images/profile6.jpg', name: 'Someone Name', profession: 'Web Developer' },
  ];

  return (
    <section>
      <div className="swiper mySwiper container">
        <Swiper
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {profiles.map((profile) => (
            <SwiperSlide key={profile.id} className="swiper-slide card">
              <div className="card-content">
                <div className="image">
                  <img src={profile.img} alt={`Profile Image ${profile.id}`} />
                </div>
                <div className="media-icons">
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-github"></i>
                </div>
                <div className="name-profession">
                  <span className="name">{profile.name}</span>
                  <span className="profession">{profile.profession}</span>
                </div>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <div className="button">
                  <button className="aboutMe">About Me</button>
                  <button className="hireMe">Hire Me</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Botões de navegação */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-pagination"></div>
    </section>
  );
};

export default SwiperComponent;
