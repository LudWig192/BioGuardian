import React from 'react';
import '../Style/IconsBeneficio.css';
import { FaStethoscope, FaEye, FaClinicMedical, FaXRay, FaShieldAlt, FaVial } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaStethoscope />,
            title: 'MONITORAMENTO DE SAÚDE',
            description: 'Uma assinatura que utiliza inteligência artificial para monitorar a saúde de indivíduos e famílias, analisando históricos médicos e sintomas relevantes.',
        },
        {
            icon: <FaShieldAlt />,
            title: 'AUXÍLIO MÉDICO EM EMERGÊNCIAS',
            description: 'Atendimentos médicos em casa, realizados por profissionais capacitados em casos de emergência, garantindo cuidados imediatos.',
        },
        {
            icon: <FaClinicMedical />,
            title: 'SERVIÇOS AMBULATORIAIS',
            description: 'Oferecemos acompanhamento e cuidados para pacientes que necessitam de check-ups regulares, promovendo a prevenção de doenças.',
        },
        {
            icon: <FaEye />,
            title: 'PROCEDIMENTOS OPHTALMOLOGIA',
            description: 'Realizamos diversos procedimentos oculares com oftalmologistas qualificados, visando a saúde e bem-estar dos seus olhos.',
        },
        {
            icon: <FaXRay />,
            title: 'RADIOLOGIA E MAMOGRAFIA',
            description: 'Serviços de radiologia, incluindo raios-X e mamografias, com tecnologia de ponta para diagnósticos precisos.',
        },
        {
            icon: <FaVial />,
            title: 'SERVIÇOS DE LABORATÓRIO',
            description: 'Nossos serviços laboratoriais oferecem resultados rápidos e confiáveis, auxiliando no diagnóstico e tratamento.',
        },
    ];

    return (
        <div className="BeneficioIcons-container"> 
            <div className="BeneficioIcons-title">NOSSOS SERVIÇOS</div> 
            <div className="BeneficioIcons-description"> 
                Nossos pacientes têm acesso a uma ampla gama de serviços, tanto no local quanto através de parcerias. Oferecemos cuidados de saúde excepcionais e diagnósticos de alta qualidade com equipamentos de ponta. Conheça mais sobre nossos serviços abaixo.
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
