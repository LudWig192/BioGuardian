import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faHeartbeat, faCheck } from '@fortawesome/free-solid-svg-icons';
import '../Style/PlanoBeneficio.css';

const PricingPlans = () => {
  return (
    <div className="PlanoCliente-PricingPlans"> 
      <div className="PlanoBeneficio-title">Planos de Saúde BioGuardian</div>
      <div className="PlanoBeneficio-cards">
        <div className="PricingCard-PlanoBeneficio">
          <div className="Card-header-PlanoBeneficio">
            <FontAwesomeIcon icon={faHeartbeat} className="Card-icon-PlanoBeneficio" />
            <div className="Card-title-PlanoBeneficio">Plano Individual</div>
            <div className="Card-subscription-PlanoBeneficio">Assinatura anual</div>
          </div>
          <div className="Card-price-PlanoBeneficio">R$ 120,00/mês</div>
          <div className="Card-value-description-PlanoBeneficio">
            Avalie a saúde do seu dia a dia com nosso plano individual.
          </div>
          <div className="Card-features-PlanoBeneficio">
            <div>
              <FontAwesomeIcon icon={faCheck} className="feature-icon-PlanoBeneficio" />
              Aparelho que identifica anomalias
            </div>
            <div>
              <FontAwesomeIcon icon={faCheck} className="feature-icon-PlanoBeneficio" />
              Acesso a médicos 24 horas
            </div>
            <div>
              <FontAwesomeIcon icon={faCheck} className="feature-icon-PlanoBeneficio" />
              Relatórios de saúde mensais
            </div>
            <div>
              <FontAwesomeIcon icon={faCheck} className="feature-icon-PlanoBeneficio" />
              Consultas online ilimitadas
            </div>
          </div>
          <button className="Card-button-PlanoBeneficio">Assine Agora</button>
        </div>
        <div className="PricingCard-PlanoBeneficio">
          <div className="Card-header-PlanoBeneficio">
            <FontAwesomeIcon icon={faStethoscope} className="Card-icon-PlanoBeneficio" />
            <div className="Card-title-PlanoBeneficio">Plano Familiar</div>
            <div className="Card-subscription-PlanoBeneficio">Assinatura anual</div>
          </div>
          <div className="Card-price-PlanoBeneficio">R$ 200,00/mês</div>
          <div className="Card-value-description-PlanoBeneficio">
            Cuidando de toda a sua família com tecnologia de ponta.
          </div>
          <div className="Card-features-PlanoBeneficio">
            <div>
              <FontAwesomeIcon icon={faCheck} className="feature-icon-PlanoBeneficio" />
              Pulseira e aparelho que identificam anomalias
            </div>
            <div>
              <FontAwesomeIcon icon={faCheck} className="feature-icon-PlanoBeneficio" />
              Acesso a médicos 24 horas
            </div>
            <div>
              <FontAwesomeIcon icon={faCheck} className="feature-icon-PlanoBeneficio" />
              Relatórios de saúde mensais
            </div>
            <div>
              <FontAwesomeIcon icon={faCheck} className="feature-icon-PlanoBeneficio" />
              Consultas online ilimitadas
            </div>
            <div>
              <FontAwesomeIcon icon={faCheck} className="feature-icon-PlanoBeneficio" />
              Atendimento domiciliar em emergências
            </div>
          </div>
          <button className="Card-button-PlanoBeneficio">Assine Agora</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
