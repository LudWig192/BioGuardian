import React from 'react';
import '../Style/ServiçoImagemHome.css';
import Image1 from "../Imagens/Medico2.jpg"

const ExpertiseImage = () => {
  return (
    <div className="expertise-image">
      <img src={Image1} alt="Enfermeira" />
    </div>
  );
};

export default ExpertiseImage;
