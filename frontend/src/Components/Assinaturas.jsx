// ASSINATURAS

import React from 'react';
import "../Style/Assinatura.css";

const Inscricao = () => {
  return (
    <div className="subscription-plans">
      <div className="plan">
        <h2>Plano Básico</h2>
        <ul>
          <li>1 Usuário</li>
          <li>10 GB de armazenamento</li>
          <li>Suporte básico</li>
        </ul>
        <button className="subscribe-button">Assinar</button>
      </div>
      <div className="plan">
        <h2>Plano Premium</h2>
        <ul>
          <li>Até 10 Usuários</li>
          <li>100 GB de armazenamento</li>
          <li>Suporte prioritário</li>
        </ul>
        <button className="subscribe-button">Assinar</button>
      </div>
    </div>
  );
};

export default Inscricao;
