import React from 'react';
import { FaHeartbeat, FaAmbulance, FaHospital, FaUserMd, FaBookOpen } from 'react-icons/fa';
import '../Style/DiagnosticsHome.css';

const OnlineLearningSection = () => {
    return (
        <div className="online-learning-section">
            <div className="online-learning-people-grid">
                {/* Imagem incorporada diretamente no componente */}
                <img 
                    className="online-learning-person"
                    src={require('../Imagens/BeneficioHome.png')} 
                    alt="Benefícios do Plano de Saúde"
                />
            </div>
            <div className="online-learning-info-list">
                <div className="online-learning-info-title">Benefícios do Nosso Plano de Saúde</div>
                
                <div className="online-learning-info-item">
                    <FaHeartbeat className="online-learning-icon" />
                    <div className="online-learning-info-text">Atendimento Médico 24/7</div>
                </div>
                <div className="online-learning-info-item">
                    <FaHospital className="online-learning-icon" />
                    <div className="online-learning-info-text">Monitoramento de Saúde em Tempo Real</div>
                </div>
                <div className="online-learning-info-item">
                    <FaAmbulance className="online-learning-icon" />
                    <div className="online-learning-info-text">Alertas de Emergência</div>
                </div>
                <div className="online-learning-info-item">
                    <FaUserMd className="online-learning-icon" />
                    <div className="online-learning-info-text">Acesso a Hospitais de Referência</div>
                </div>
                <div className="online-learning-info-item">
                    <FaBookOpen className="online-learning-icon" />
                    <div className="online-learning-info-text">Cuidados Personalizados</div>
                </div>
            </div>
        </div>
    );
};

export default OnlineLearningSection;
