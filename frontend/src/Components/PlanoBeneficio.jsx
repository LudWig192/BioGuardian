import React from 'react';
import "../Style/PlanoBeneficio.css";

const Planos = () => {
  return (
    <b><div className="pricing-plans">
      <div className="plan">
        <h2 className='textocor'>Plano Sozinho</h2>
        <p>quantidade de pessoas no plano 1 ou 2</p>
        <ul>
          <li>Acesso a MadIA</li>
          <li>Pulseira e o Guardião</li>

          <li>Suporte básico</li>
        </ul>
        <button>Assinar Agora</button>
      </div>
      <div className="plan">
        <h2>Plano Familiar</h2>
        <p>Para empresas que precisam de mais recursos e suporte.</p>
        <ul>
          <li>3-6 pessoas</li>
          <li>Prioridade ao atendimento</li>
          <li>Suporte prioritário</li>
        </ul>
        <button>Assinar Agora</button>
      </div>
    </div></b>
  );
};

export default Planos;