import React from 'react';
import '../Style/DicasCliente.css'; 
import { FaRegHandPaper, FaRegHospital, FaHeartbeat, FaRegComments, FaUserFriends, FaHome } from 'react-icons/fa';

const ElderlyCareSolutions = () => {
  const services = [
    {
      dicascliente: 1,
      icon: <FaRegHandPaper />,
      title: 'Personal Care Assistance',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit integer iaculis dui nibh vitae commodo.',
      readMore: 'Read More',
      highlighted: true
    },
    {
      dicascliente: 2,
      icon: <FaRegHospital />,
      title: 'Specialized Care',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit integer iaculis.',
      readMore: 'Read More',
      highlighted: false
    },
    {
      dicascliente: 3,
      icon: <FaHeartbeat />,
      title: 'Physical Wellness Care',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit integer iaculis.',
      readMore: 'Read More',
      highlighted: false
    },
    {
      dicascliente: 4,
      icon: <FaRegComments />,
      title: 'Health Consultation Care',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit integer iaculis.',
      readMore: 'Read More',
      highlighted: false
    },
    {
      dicascliente: 5,
      icon: <FaUserFriends />,
      title: 'Senior Citizen Care',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit integer iaculis.',
      readMore: 'Read More',
      highlighted: false
    },
    {
      dicascliente: 6,
      icon: <FaHome />,
      title: 'Residential Care',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit integer iaculis.',
      readMore: 'Read More',
      highlighted: false
    }
  ];

  return (
    <section className="dicasclienteicons"> 
      <div className="dicasclienteicons-title">Solutions for Quality Elderly Care</div> 
      <div className="dicasclienteicons-intro">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit integer iaculis dui nibh vitae commodo euismod tempor eu tempus urna et elementum lorem.
      </div>
      <div className="dicasclientes-cards"> 
        {services.map(service => (
          <div key={service.dicascliente} className={`dicascliente-card ${service.highlighted ? 'highlighted' : ''}`}> 
            <div className="icon-dicascliente">{service.icon}</div> 
            <div className="title-dicascliente">{service.title}</div> 
            <div className="description-dicascliente">{service.description}</div>
            <a href="#" className="read-dicascliente">{service.readMore}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ElderlyCareSolutions;
