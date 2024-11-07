import React from 'react';
import '../Style/DicasCliente.css'; 
import { FaAppleAlt, FaDumbbell, FaStethoscope, FaUsers, FaBed, FaGlassWhiskey } from 'react-icons/fa';

const ElderlyCareSolutions = () => {
  const services = [
    {
      dicascliente: 1,
      icon: <FaGlassWhiskey />,
      title: 'Mantenha-se Hidratado',
      description: 'Beba pelo menos 2 litros de água por dia para manter o corpo hidratado e funcionando bem.',
    },
    {
      dicascliente: 2,
      icon: <FaAppleAlt />,
      title: 'Alimente-se de Forma Saudável',
      description: 'Inclua frutas, verduras e grãos integrais na sua dieta diária para garantir a nutrição adequada.',
    },
    {
      dicascliente: 3,
      icon: <FaDumbbell />,
      title: 'Exercícios Regulares',
      description: 'Pratique atividades físicas pelo menos 30 minutos por dia para fortalecer o coração e os músculos.',
    },
    {
      dicascliente: 4,
      icon: <FaStethoscope />,
      title: 'Consulte um Médico',
      description: 'Visite seu médico regularmente para monitorar sua saúde e fazer exames preventivos.',
    },
    {
      dicascliente: 5,
      icon: <FaUsers />,
      title: 'Mantenha-se Socialmente Ativo',
      description: 'Participe de atividades em grupo para fortalecer vínculos sociais e melhorar o bem-estar emocional.',
    },
    {
      dicascliente: 6,
      icon: <FaBed />,
      title: 'Durma Bem',
      description: 'Garanta 7-8 horas de sono de qualidade por noite para promover a recuperação e a saúde mental.',
    }
  ];

  return (
    <section className="dicasclienteicons"> 
      <div className="dicasclienteicons-title">Dicas para Melhorar a Saúde</div> 
      <div className="dicasclientes-cards"> 
        {services.map(service => (
          <div key={service.dicascliente} className="dicascliente-card"> 
            <div className="icon-dicascliente">{service.icon}</div> 
            <div className="title-dicascliente">{service.title}</div> 
            <div className="description-dicascliente">{service.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ElderlyCareSolutions;
