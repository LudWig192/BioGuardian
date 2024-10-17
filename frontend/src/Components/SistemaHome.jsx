import React from 'react';
import '../Style/SistemaHome.css';

const FeaturedServices = () => {
  return (
    <div className="featured-services-container info-coracao">
      <h1 className="title info-coracao">FEATURED SERVICES</h1>
      <span className="subtitle info-coracao">We cover a big variety of medical services</span>

      <div className="main-content info-coracao">
        {/* Cards de serviços */}
        <div className="services-cards info-coracao">
          <div className="info-coracao">
            <img src="/icons/checkup.png" alt="Free Checkup" className="service-icon info-coracao" />
            <h3>Free Checkup</h3>
            <span>General Health Examination</span>
          </div>
          <div className="card info-coracao">
            <img src="/icons/cardio.png" alt="Cardio Exam" className="service-HomeSem info-coracao" /> 
            <h3>Cardio Exam</h3>
            <span>With High End Equipment</span>
          </div>
          <div className=" info-coracao "> 
            <img src="/icons/dna.png" alt="DNA Testing" className="service-HomeSem info-coracao" /> 
            <h3>DNA Testing</h3>
            <span>Advanced Genetics</span>
          </div>
        </div>

        {/* Seção de horário e taxas */}
        <div className="info-section info-coracao">
          <div className="working-hours info-coracao">
            <h2 className="section-title info-coracao">WORKING HOURS</h2>
            <div className="hours info-coracao">Monday: 08:00 - 20:00</div>
            <div className="hours info-coracao">Tuesday: 08:00 - 20:00</div>
            <div className="hours info-coracao">Wednesday: 08:00 - 20:00</div>
            <div className="hours info-coracao">Thursday: 08:00 - 20:00</div>
            <div className="hours info-coracao">Friday: 08:00 - 20:00</div>
            <div className="hours info-coracao">Saturday: 09:00 - 17:00</div>
            <div className="hours info-coracao">Sunday: 11:00 - 15:00</div>
          </div>

          <div className="fees-insurance info-coracao">
            <h2 className="section-HomeSem info-coracao">FEES & INSURANCE</h2> 
            <span className="description-HomeSem  info-coracao"> 
              For the convenience of our clients, the Melissa Medical Center and Major Insurance Providers have agreements
              to provide affordable rates.
            </span>
          </div>
        </div>
      </div>

      <button className="checkout-button info-coracao">Checkout All Medical Services</button>
    </div>
  );
};

export default FeaturedServices;