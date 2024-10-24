import React from 'react';
import '../Style/PostagensAdm.css';

const MelhoresPostagens = () => {
    return (
        <div className="best-posts">
            <div className="best-post">
                <h3>Procedimento Mais Realizado</h3>
                <p>1.200 Procedimentos</p>
            </div>
            <div className="best-post">
                <h3>Consultas Realizadas</h3>
                <p>3.400 Consultas</p>
            </div>
            <div className="best-post">
                <h3>Taxa de Satisfação</h3>
                <p>95% Satisfeitos</p>
            </div>
        </div>
    );
};

export default MelhoresPostagens;
