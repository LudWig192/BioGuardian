import React from 'react';
import '../Style/ComentarioBeneficio.css';

const ClinicInfo = () => {
  return (
    <div className="beneficio-clinic-info-container">
      <div className="beneficio-services">
        <div className="beneficio-service-item">
          <i className="beneficio-icon">📖</i>
          <div className="beneficio-service-item-title">Easy Booking</div>
          <div className="beneficio-service-item-description">Get an appointment in a few clicks</div>
        </div>
        <div className="beneficio-service-item">
          <i className="beneficio-icon">👨‍⚕️</i>
          <div className="beneficio-service-item-title">Qualified Team</div>
          <div className="beneficio-service-item-description">25+ years of experience</div>
        </div>
        <div className="beneficio-service-item">
          <i className="beneficio-icon">📅</i>
          <div className="beneficio-service-item-title">Flexible Schedule</div>
          <div className="beneficio-service-item-description">Our doctors are always available</div>
        </div>
        <div className="beneficio-service-item">
          <i className="beneficio-icon">💰</i>
          <div className="beneficio-service-item-title">Best Price Guarantee</div>
          <div className="beneficio-service-item-description">No overpriced services</div>
        </div>
      </div>
      <div className="beneficio-about-clinic">
        <div className="beneficio-about-clinic-title">About Our Clinic</div>
        <div className="beneficio-about-clinic-description">
          Our main long-term goal is always achieving complex results for your dental health. 
          But in the process, we also keep the focus on giving you the best customer service. 
          We're always making our dental office as safe a place as possible!
        </div>
        <div className="beneficio-doctor-info">
          <img src="doctor-image.jpg" alt="Dr. Richard Smith" />
          <div>
            <div className="beneficio-doctor-info-title">Dr. Richard Smith</div>
            <div className="beneficio-doctor-info-description">Head Doctor, Orthodontist</div>
            <blockquote className="beneficio-blockquote">
              “I am a dedicated dental specialist with 20 years of experience trained in diagnosing and treating orthodontal and periodontal issues.”
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicInfo;
