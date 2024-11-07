import React from 'react';
import '../Style/Painel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProcedures, faUserMd, faUserNurse, faAmbulance } from '@fortawesome/free-solid-svg-icons';

const Painel = () => {
    return (
        <div className="painel-agendamento">
            <h1 className="titulo-agendamento">Dashboard Hospitalar</h1>
            <div className="linha-cartoes-agendamento">
                <div className="cartao-paciente-agendamento">
                    <div className="icone-cartao-agendamento">
                        <FontAwesomeIcon icon={faProcedures} size="3x" />
                    </div>
                    <div className="conteudo-cartao-agendamento">
                        <h2>230</h2>
                        <p>Total de Pacientes</p>
                    </div>
                </div>

                <div className="cartao-medico-agendamento">
                    <div className="icone-cartao-agendamento">
                        <FontAwesomeIcon icon={faUserMd} size="3x" />
                    </div>
                    <div className="conteudo-cartao-agendamento">
                        <h2>150</h2>
                        <p>Médicos</p>
                    </div>
                </div>

                <div className="cartao-enfermeiro-agendamento">
                    <div className="icone-cartao-agendamento">
                        <FontAwesomeIcon icon={faUserNurse} size="3x" />
                    </div>
                    <div className="conteudo-cartao-agendamento">
                        <h2>130</h2>
                        <p>Enfermeiros</p>
                    </div>
                </div>

                <div className="cartao-emergencia-agendamento">
                    <div className="icone-cartao-agendamento">
                        <FontAwesomeIcon icon={faAmbulance} size="3x" />
                    </div>
                    <div className="conteudo-cartao-agendamento">
                        <h2>30</h2>
                        <p>Emergências</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Painel;