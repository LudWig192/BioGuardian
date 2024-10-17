import React from 'react';
import '../Style/IconsBeneficio.css';
import { FaStethoscope, FaEye, FaClinicMedical, FaXRay, FaShieldAlt, FaVial } from 'react-icons/fa'; // Importação dos ícones

const Services = () => {
    const services = [
        {
            icon: <FaStethoscope />,
            title: 'GENERAL SURGERY',
            description: 'Our general surgeons focus on a variety of problems that can be treated with surgery.',
        },
        {
            icon: <FaEye />,
            title: 'OPHTHALMOLOGY PROCEDURES',
            description: 'MedClinic’s ophthalmologists provide high-quality eye health procedures to our patients.',
        },
        {
            icon: <FaClinicMedical />,
            title: 'OUTPATIENT SERVICES',
            description: 'Our outpatient services cover the needs of patients who require follow-up care & check-ups.',
        },
        {
            icon: <FaXRay />,
            title: 'RADIOLOGY AND MAMMOGRAMS',
            description: 'We provide a wide variety of radiology services including X-ray and mammography.',
        },
        {
            icon: <FaShieldAlt />,
            title: 'RESPIRATORY THERAPY',
            description: 'Our respiratory therapy services help patients breathe easy whether they\'re babies or adults.',
        },
        {
            icon: <FaVial />,
            title: 'LABORATORY SERVICES',
            description: 'We take great pride in providing the highest quality of laboratory services to our patients.',
        },
    ];

    return (
        <div className="BeneficioIcons-container"> 
            <div className="BeneficioIcons-title">OUR SERVICES</div> 
            <div className="BeneficioIcons-description"> 
                Our patients have access to a wide range of services right here on-site, as well as off-site through partnerships the Clinic has established. Besides offering great health care, our staff also provides high-quality diagnostics using cutting-edge medical equipment. Feel free to learn more about our services below.
            </div>
            <div className="BeneficioIcons-services"> 
                {services.map((service, index) => (
                    <div key={index} className="BeneficioIcons-serviceItem"> 
                        <div className="BeneficioIcon">{service.icon}</div>
                        <div className="BeneficioIcons-serviceTitle">{service.title}</div> 
                        <div className="BeneficioIcons-serviceDescription">{service.description}</div> 
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
