import React from 'react';
import '../Style/IconsBeneficio.css';
import { FaStethoscope, FaEye, FaClinicMedical, FaXRay, FaShieldAlt, FaVial } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaStethoscope />,
            title: 'MONITORAMENTO DE SAÚDE',
            description: 'Assinatura que utiliza inteligência artificial para monitorar a saúde de indivíduos e famílias, analisando históricos médicos e sintomas.',
        },
        {
            icon: <FaShieldAlt />,
            title: 'AUXÍLIO MÉDICO EM EMERGÊNCIAS',
            description: 'Atendimentos médicos em casa, realizados por profissionais capacitados, garantindo cuidados imediatos.',
        },
        {
            icon: <FaClinicMedical />,
            title: 'SERVIÇOS AMBULATORIAIS',
            description: 'Acompanhamento e cuidados para pacientes que necessitam de check-ups regulares, promovendo a prevenção de doenças.',
        },
        {
            icon: <FaEye />,
            title: 'PROCEDIMENTOS OFTALMOLOGIA',
            description: 'Procedimentos oculares realizados por oftalmologistas qualificados, visando a saúde dos seus olhos.',
        },
        {
            icon: <FaXRay />,
            title: 'RADIOLOGIA E MAMOGRAFIA',
            description: 'Serviços de radiologia, incluindo raios-X e mamografias, com tecnologia de ponta para diagnósticos precisos.',
        },
        {
            icon: <FaVial />,
            title: 'SERVIÇOS DE LABORATÓRIO',
            description: 'Serviços laboratoriais que oferecem resultados rápidos e confiáveis para auxiliar no diagnóstico e tratamento.',
        },
    ];

    return (
        <div className="BeneficioIcons-container"> 
            <div className="BeneficioIcons-title">SERVIÇOS</div> 
            <div className="BeneficioIcons-description"> 
                Oferecemos uma variedade de serviços com cuidados excepcionais e diagnósticos de alta qualidade. Conheça mais sobre nossos serviços abaixo.
            </div>
            <div className="BeneficioIcons-services"> 
                {services.map((beneficio, index) => (
                    <div key={index} className="BeneficioIcons-serviceItem"> 
                        <div className="BeneficioIcon">{beneficio.icon}</div>
                        <div className="BeneficioIcons-serviceTitle">{beneficio.title}</div> 
                        <div className="BeneficioIcons-serviceDescription">{beneficio.description}</div> 
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
