import React from "react";
import "../Style/PlanoBeneficio.css";

const PricingOptions = () => {
  return (
    <div className="planoBeneficio-pricing-container">
      <div className="planoBeneficio-pricing-title">PRICING</div>
      <div className="planoBeneficio-pricing-options">
        {/* Available Options */}
        <div className="planoBeneficio-available-options">
          <div>AVAILABLE OPTIONS</div>
          <div className="planoBeneficio">
            <div>Diagnostic Services</div>
            <div>Number of Patients</div>
            <div>Dental Services</div>
            <div>Additional Services</div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="planoBeneficio-pricing-card planoBeneficio-most-popular">
          <div className="planoBeneficio-badge">MOST POPULAR</div>
          <div className="planoBeneficio">BASIC</div>
          <div className="planoBeneficio-price">$32.89<span>/monthly</span></div>
          <div className="planoBeneficio">
            <div>Laboratory Analysis</div>
            <div>2 Patients</div>
            <div className="planoBeneficio-not-included">Ophthalmology</div>
          </div>
          <button className="planoBeneficio-button">BUY NOW!</button>
        </div>

        <div className="planoBeneficio-pricing-card">
          <div className="planoBeneficio">STANDARD</div>
          <div className="planoBeneficio-price">$76.89<span>/monthly</span></div>
          <div className="planoBeneficio">
            <div>Ultrasound</div>
            <div>5 Patients</div>
            <div>Surgery</div>
          </div>
          <button className="planoBeneficio-button">BUY NOW!</button>
        </div>

        <div className="planoBeneficio-pricing-card">
          <div className="planoBeneficio">PREMIUM</div>
          <div className="planoBeneficio-price">$89.89<span>/monthly</span></div>
          <div className="planoBeneficio">
            <div>X-ray</div>
            <div>10 Patients</div>
            <div>Manual Therapy</div>
          </div>
          <button className="planoBeneficio-button">BUY NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default PricingOptions;
