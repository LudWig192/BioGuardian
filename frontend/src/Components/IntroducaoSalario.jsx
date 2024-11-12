import React from 'react';
import '../Style/IntroducaoSalario.css';

const Introduction = () => {
    return (
        <div className="introduction-container-visao_geral">
            <h2 className="introduction-title-visao_geral">Visão Geral dos Salários dos Médicos</h2>
            <div className="introduction-text-visao_geral">
                A remuneração dos profissionais de saúde é um aspecto crucial que reflete não apenas o valor do trabalho médico, mas também as dinâmicas do mercado de saúde. Nesta seção, apresentamos um gráfico detalhado que ilustra as tendências salariais dos médicos ao longo dos anos, permitindo uma análise clara das variações e comparações entre diferentes especialidades.
            </div>
            <div className="introduction-note-visao_geral">
                Compreender os salários é essencial para profissionais da saúde, gestores e instituições, ajudando a tomar decisões informadas sobre carreira, recrutamento e retenção de talentos. Utilize os filtros disponíveis para personalizar os dados exibidos de acordo com suas necessidades específicas.
            </div>
        </div>
    );
};

export default Introduction;
