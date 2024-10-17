import React from "react";
import "../Style/MapsBeneficio.css";

const ContactFormMap = () => {
  return (
    <div className="MapsBeneficio">
      <div className="MapsBeneficio-content">
        <div className="MapsBeneficio-form">
          <div className="MapsBeneficio-title">Get in Touch</div>
          <div className="MapsBeneficio-description">
            We are available 24/7 by fax, e-mail or by phone. You can also use our
            quick contact form to ask a question about our services that we
            regularly provide.
          </div>
          <div className="MapsBeneficio-form-container">
            <div className="MapsBeneficio-form-group">
              <div className="MapsBeneficio-service">
                <span>Select a Service:</span>
                <div className="MapsBeneficio-service-dropdown">
                  <span>Service 1</span>
                  {/* Você pode adicionar mais serviços ou uma lógica de seleção aqui */}
                </div>
              </div>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="MapsBeneficio-form-group">
              <input type="date" placeholder="Date of Birth" />
              <input type="tel" placeholder="Phone" />
            </div>
            <textarea className="MapsBeneficio-textarea" placeholder="Your Message"></textarea>
            <div className="MapsBeneficio-form-group">
              <input type="email" placeholder="E-mail" />
              <button className="MapsBeneficio-button" type="submit">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
        <div className="MapsBeneficio-map">
          {/* Mapa com localização em São Paulo */}
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2363676714983!2d-46.63610828448884!3d-23.567750684674053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce585e86b7b7af%3A0x35ce99885d2f1204!2sSão%20Paulo%20-%20SP%2C%20Brazil!5e0!3m2!1sen!2sus!4v1697462765231!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactFormMap;
