//BIBLIOTECAS
import React from 'react';

//COMPONENTES
import UserProfile from '../Components/UserProfile2';
import Vitals from '../Components/Vitals';
import TestReports from '../Components/TestReports';
import Prescriptions from '../Components/Prescriptions';

//ESTILIZAÇÃO
import '../Pages/Style/App.css';

function PerfilCliente() {
  return (
    <div className="container">
      <div className="left-panel">
        <UserProfile />
      </div>
      <div className="right-panel">
        <Vitals />
        <TestReports />
        <Prescriptions />
      </div>
    </div>
  );
}

export default PerfilCliente;