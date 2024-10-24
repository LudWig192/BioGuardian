import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../Style/TabelaCliente.css'; // Arquivo CSS para o estilo

const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card EspecialidadesCliente-professional">
      <div className="employee-header EspecialidadesCliente-header">
        <div className="employee-avatar EspecialidadesCliente-avatar">
          <span>{employee.initials}</span>
        </div>
        <div className="employee-info EspecialidadesCliente-info">
          <div className="EspecialidadesCliente-name">{employee.name}</div>
          <div className="EspecialidadesCliente-role">{employee.role}</div>
        </div>
      </div>
      <div className="employee-details EspecialidadesCliente-details">
        <div className="EspecialidadesCliente-department">
          <FontAwesomeIcon icon={faBuilding} /> {employee.department}
        </div>
        <div className="EspecialidadesCliente-office">
          <FontAwesomeIcon icon={faBuilding} /> {employee.office}
        </div>
        <div className="EspecialidadesCliente-phone">
          <FontAwesomeIcon icon={faPhone} /> {employee.phone}
        </div>
        <div className="EspecialidadesCliente-email">
          <FontAwesomeIcon icon={faEnvelope} /> {employee.email}
        </div>
      </div>
    </div>
  );
};

const EmployeeDirectory = () => {
  const employees = [
    {
      initials: 'AC',
      name: 'Andrew Colson',
      role: 'IT Manager',
      department: 'IT',
      office: 'Main Building',
      phone: '(123) 456-7890',
      email: 'andrew.colson@company.com',
    },
    {
      initials: 'BH',
      name: 'Bryan Hack',
      role: 'Product Manager',
      department: 'Delivery',
      office: 'Building 2',
      phone: '(234) 567-8901',
      email: 'bryan.hack@company.com',
    },
    {
      initials: 'DC',
      name: 'Dun Cloean',
      role: 'Sales',
      department: 'Sales',
      office: 'Main Building',
      phone: '(345) 678-9012',
      email: 'dun@company.com',
    },
    {
      initials: 'DU',
      name: 'Demo User',
      role: 'Delivery',
      department: 'Delivery',
      office: 'Building 3',
      phone: '(456) 789-0123',
      email: 'demo@company.com',
    }
  ];

  return (
    <div className="employee-directory EspecialidadesCliente-directory">
      <div className="EspecialidadesCliente-title">Employee Directory</div>
      <div className="employee-list EspecialidadesCliente-list">
        {employees.map((employee) => (
          <EmployeeCard key={employee.name} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeDirectory;
