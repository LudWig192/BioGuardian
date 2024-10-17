import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faAmbulance, faLaptop, faHospitalAlt } from '@fortawesome/free-solid-svg-icons';
import '../Style/ServiçoCardHome.css';

const iconMap = {
  'Certified Doctors': faUserMd,
  'Emergency': faAmbulance,
  'Technology': faLaptop,
  'Ambulance': faHospitalAlt,
};

const ExpertiseCard = ({ title }) => {
  return (
    <div className="expertise-card">
      <div className="icon-placeholder">
        <FontAwesomeIcon icon={iconMap[title]} style={{ fontSize: '24px' }} />
      </div>
      <div className="expertise-title">{title}</div>
      <div className="expertise-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </div>
  );
};

export default ExpertiseCard;
