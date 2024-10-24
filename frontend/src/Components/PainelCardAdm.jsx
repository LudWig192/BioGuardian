import React from 'react';
import '../Style/PainelCardAdm.css';

const DashboardCards = () => {
    return (
        <div className="cards_adm-container">
            <div className="card_adm">
                <h3 className="card_adm-title">Total de Pacientes</h3>
                <div className="circle-progress_adm circle-progress-red">120</div>
                <div className="card_adm-info">
                    <p className="card_adm-value">25</p>
                    <span className="card_adm-subtext">Pacientes atendidos hoje</span>
                </div>
            </div>

            <div className="card_adm">
                <h3 className="card_adm-title">Consultas Agendadas</h3>
                <div className="progress-bar_adm progress-bar-green">
                    <div className="progress_adm" style={{ width: '75%' }}></div>
                    <span className="progress_adm-percentage">75%</span>
                </div>
                <div className="card_adm-info">
                    <p className="card_adm-value">30</p>
                    <span className="card_adm-subtext">Consultas agendadas hoje</span>
                </div>
            </div>

            <div className="card_adm">
                <h3 className="card_adm-title">Taxa de Ocupação</h3>
                <div className="circle-progress_adm circle-progress-yellow">85</div>
                <div className="card_adm-info">
                    <p className="card_adm-value">45%</p>
                    <span className="card_adm-subtext">Ocupação total do hospital</span>
                </div>
            </div>

            <div className="card_adm">
                <h3 className="card_adm-title">Internações Recentes</h3>
                <div className="progress-bar_adm progress-bar-pink">
                    <div className="progress_adm" style={{ width: '40%' }}></div>
                    <span className="progress_adm-percentage">40%</span>
                </div>
                <div className="card_adm-info">
                    <p className="card_adm-value">20</p>
                    <span className="card_adm-subtext">Internações realizadas hoje</span>
                </div>
            </div>
        </div>
    );
};

export default DashboardCards;
