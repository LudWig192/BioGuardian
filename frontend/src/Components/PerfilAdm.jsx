import React from 'react';
import '../Style/PerfilAdm.css';
import DrAna from '../Imagens/DrAna.jpg'; 

const UserProfile = () => {
    return (
        <div className="user-profile">
            <img src={DrAna} alt="Dr. Ana Costa" className="profile-pic" />
            <h2 className="profile-name">Dr. Ana Costa</h2>
            <span className="username">@dr.anacosta</span>
            <span className="position">Administradora Hospitalar</span>
            <div className="bio">
                Dr. Ana Costa é uma administradora hospitalar com mais de 10 anos de experiência em gestão de operações e melhorias na qualidade do atendimento ao paciente. Ela é apaixonada por implementar estratégias que otimizam o desempenho hospitalar e a satisfação dos pacientes.
            </div>
            <div className="tags">
                <h4>Áreas de Especialização</h4>
                <ul>
                    <li>Gestão Hospitalar</li>
                    <li>Qualidade no Atendimento</li>
                    <li>Eficiência Operacional</li>
                    <li>Liderança</li>
                </ul>
            </div>
            <div className="location">
                <h4>Localização</h4>
                <span>Rio de Janeiro, Brasil</span>
            </div>
        </div>
    );
};

export default UserProfile;
