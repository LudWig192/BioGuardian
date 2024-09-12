// Anuncio.js
import React from 'react';
import "../Style/Anuncio.css";

const Anuncio = () => {
  return (
    <div className="anuncio-container">
      <div className="anuncio-texto">
        <h1>Bem-vindo ao Hospital</h1>
        <p>
          No Hospital Exemplo, nossa missão é oferecer cuidados de saúde excepcionais e
          atendimento personalizado. Com uma equipe de profissionais altamente qualificados e
          tecnologias de ponta, estamos comprometidos com o seu bem-estar e recuperação.
        </p>
        <p>
          Oferecemos uma ampla gama de serviços médicos, incluindo atendimento de emergência,
          consultas especializadas, e tratamentos avançados. Entre em contato conosco para mais
          informações e agendamentos.
        </p>
      </div>
      <div className="anuncio-foto">
        <img className='foto1' src="https://images.pexels.com/photos/4483327/pexels-photo-4483327.jpeg" alt="Hospital Exemplo" />
      </div>
    </div>
  );
};

export default Anuncio;