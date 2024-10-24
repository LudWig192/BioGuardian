import React from 'react';
import '../Style/SuporteSalario.css';

const MentalHealthSupport = () => {
    return (
        <div className="mental-health-support">
            <h2 className="title">Apoio Psicológico e Saúde Mental</h2>
            <div className="description">
                A profissão médica é desafiadora e frequentemente estressante. Os médicos enfrentam longas horas de trabalho, a pressão de decisões críticas e a responsabilidade pelo bem-estar de seus pacientes. É fundamental que os profissionais de saúde cuidem de sua saúde mental e busquem apoio quando necessário.
            </div>
            <h4 className="resources-title">Recursos Disponíveis</h4>
            <ul className="resources-list">
                <li className="resource-item">Programas de apoio psicológico nas instituições de saúde</li>
                <li className="resource-item">Grupos de suporte para médicos</li>
                <li className="resource-item">Consultas com psicólogos ou terapeutas especializados em saúde</li>
                <li className="resource-item">Aplicativos de meditação e bem-estar</li>
                <li className="resource-item">Workshops e seminários sobre gerenciamento do estresse</li>
            </ul>
            <h4 className="importance-title">Importância do Cuidado com a Saúde Mental</h4>
            <div className="importance-description">
                Cuidar da saúde mental não é apenas importante para o bem-estar pessoal, mas também para a qualidade do atendimento prestado aos pacientes. Médicos mentalmente saudáveis estão mais aptos a tomar decisões eficazes e a se relacionar de maneira empática com seus pacientes.
            </div>
            <div className="call-to-action">
                Não hesite em procurar apoio. Sua saúde mental é uma prioridade!
            </div>
        </div>
    );
};

export default MentalHealthSupport;
