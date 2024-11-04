import React from 'react';
import '../Style/Painel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProcedures, faUserMd, faUserNurse, faAmbulance } from '@fortawesome/free-solid-svg-icons';

const Painel = () => {
    return (
        <div className='painel-tudo'>
            <div className="painel-container">
                <h1 className="painel-title">Dashboard Hospitalar</h1>
                <div className="painel-cards">
                    <div className="card">
                        <div className="card-icon">
                            <FontAwesomeIcon icon={faProcedures} size="3x" />
                        </div>
                        <div className="card-content">
                            <h2>230</h2>
                            <p>Total de Pacientes</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-icon">
                            <FontAwesomeIcon icon={faUserMd} size="3x" />
                        </div>
                        <div className="card-content">
                            <h2>150</h2>
                            <p>Médicos</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-icon">
                            <FontAwesomeIcon icon={faUserNurse} size="3x" />
                        </div>
                        <div className="card-content">
                            <h2>130</h2>
                            <p>Enfermeiros</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-icon">
                            <FontAwesomeIcon icon={faAmbulance} size="3x" />
                        </div>
                        <div className="card-content">
                            <h2>30</h2>
                            <p>Emergências</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Painel;
