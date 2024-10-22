import React from 'react';
import '../Style/Paciente.css';

function UserProfile() {
  return (
    <div className="user-profile-container">
      <div className="user-profile">
        <div className="profile-photo-section">
          <img src="user-image-url" alt="User" className="user-photo" />
          <div className="profile-name">
            <h3>Marcos </h3>
            <p>Age: 36</p>
          </div>
          <button className="update-button">Update</button>
        </div>
        <div className="info-section">
          <h4>Information:</h4>
          <div className="info-details">
            <p><strong>Gênero:</strong> Masculino</p>
            <p><strong>Tipo Sanguineo:</strong> O+ (Positive)</p>
            <p><strong>Alergias:</strong> Milk, Penicillin</p>
            <p><strong>Doenças:</strong> Diabetes</p>
            <p><strong>Altura:</strong> 1.78m</p>
            <p><strong>Peso:</strong> 65 kg</p>
            <p><strong>Paciente ID:</strong> 208898786</p>
            <p><strong>Ultima consulta:</strong> 25° Outubro 2019</p>
          </div>
        </div>
      </div>
    </div>
  );
}
blur
export default UserProfile;