import React from 'react';
import { FaHeartbeat, FaShieldAlt, FaSync, FaUserCheck } from 'react-icons/fa'; // Ícones do React Icons
import '../Style/PulseiraHome.css';
import Pulseira from "../Imagens/Pulseira.png";

const AppComponent = () => {
    return (
        <div className="my-app-container">
            <div className="mainAppContainer">
                <div className="mockupContainer">
                    <div className="phoneDisplay">
                        <div className="screenArea">
                            <img src={Pulseira} alt="App preview" className="phone-image" />
                        </div>
                    </div>
                </div>
                <div className="appDescription">
                    <div className="app-title">Descubra os Benefícios da Nossa Pulseira</div>
                    <div className="app-description-text">
                        A pulseira oferece tecnologia de ponta para monitorar sua saúde e bem-estar de forma prática e eficiente.
                    </div>
                    <div className="statisticsContainer">
                        <div className="statisticItem">
                            <FaHeartbeat size={50} className="stat-icon" />
                            <div className="stat-text">
                                <span className="stat-value">Monitoramento Contínuo</span>
                                <span className="stat-description">Acompanhe sua frequência cardíaca em tempo real</span>
                            </div>
                        </div>
                        <div className="statisticItem">
                            <FaShieldAlt size={50} className="stat-icon" />
                            <div className="stat-text">
                                <span className="stat-value">Segurança Avançada</span>
                                <span className="stat-description">Proteção dos seus dados de saúde</span>
                            </div>
                        </div>
                        <div className="statisticItem">
                            <FaSync size={50} className="stat-icon" />
                            <div className="stat-text">
                                <span className="stat-value">Sincronização Rápida</span>
                                <span className="stat-description">Conecte-se facilmente ao seu smartphone</span>
                            </div>
                        </div>
                        <div className="statisticItem">
                            <FaUserCheck size={50} className="stat-icon" />
                            <div className="stat-text">
                                <span className="stat-value">Acompanhamento Personalizado</span>
                                <span className="stat-description">Relatórios adaptados às suas necessidades de saúde</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppComponent;
