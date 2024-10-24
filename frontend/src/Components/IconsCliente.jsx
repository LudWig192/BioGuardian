import '../Style/IconsCliente.css';
import { FaHeartbeat, FaUserMd, FaClipboardCheck, FaShieldAlt, FaStethoscope, FaUsers, FaHospital, FaLaptopMedical, FaComments } from 'react-icons/fa';

const clienteicons = [
  { title: 'Monitoramento de Saúde', subtitle: 'Assinatura para monitorar a saúde da família', icon: <FaHeartbeat />, highlighted: true },
  { title: 'Apoio Médico', subtitle: 'Atendimento médico emergencial em casa', icon: <FaUserMd />, highlighted: false },
  { title: 'Exames', subtitle: 'Realização de exames laboratoriais e de imagem', icon: <FaClipboardCheck />, highlighted: false },
  { title: 'Análise de Sintomas', subtitle: 'Detecção de anomalias com IA', icon: <FaShieldAlt />, highlighted: false },
  { title: 'Atendimento Personalizado', subtitle: 'Profissionais de saúde ao seu dispor', icon: <FaStethoscope />, highlighted: false },
  { title: 'Cirurgia', subtitle: 'Cirurgias realizadas por especialistas qualificados', icon: <FaHospital />, highlighted: false },
  { title: 'Suporte 24/7', subtitle: 'Assistência médica disponível a qualquer hora', icon: <FaUsers />, highlighted: false },
  { title: 'Relatórios de Saúde', subtitle: 'Acompanhamento contínuo da saúde', icon: <FaLaptopMedical />, highlighted: false },
  { title: 'Orientação Médica', subtitle: 'Consulta e esclarecimento de dúvidas', icon: <FaComments />, highlighted: false },
];

const PopularServices = () => {
  return (
    <div className="popular-iconcliente">
      <div className="iconcliente">Nossos Serviços Populares</div>
      <div className="services-iconcliente">
        {clienteicons.map((clienteicon, index) => (
          <div key={index} className={`iconcliente-card ${clienteicon.highlighted ? 'highlighted' : ''}`}>
            <div className="clienteicon-info-iconcliente">
              <div className="clienteicon-iconcliente">{clienteicon.icon}</div>
              <div>
                <div className="clienteicon-title-iconcliente">{clienteicon.title}</div>
                <div className="clienteicon-subtitle-iconcliente">{clienteicon.subtitle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularServices;
