import React from 'react';
import '../Style/VisaoGeralAdm.css';

const StatsOverview = () => {
    return (
        <div className="stats-overview">
            <div className="stat">
                <h3>Consultas Realizadas (Últimos 30 Dias)</h3>
                <p>1,428</p>
            </div>
            <div className="stat">
                <h3>Pacientes Atendidos (Últimos 30 Dias)</h3>
                <p>12.8k</p>
            </div>
            <div className="stat">
                <h3>Leitos Ocupados (Últimos 30 Dias)</h3>
                <p>32</p>
            </div>
            <div className="stat">
                <h3>Novas Internações (Últimos 30 Dias)</h3>
                <p>343</p>
            </div>
            <div className="stat">
                <h3>Alta Hospitalar (Últimos 30 Dias)</h3>
                <p>14.5k</p>
            </div>
            <div className="stat">
                <h3>Reinternações (Últimos 30 Dias)</h3>
                <p>11.7%</p>
            </div>
        </div>
    );
};

export default StatsOverview;
