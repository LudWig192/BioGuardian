import React from 'react';
import '../Style/Tabelaproblemas.css'; 
import Coracao from '../Components/Coracao'; 

function TabelaProblemas({ problemas, parteCorpo }) {
  return (
    <div className="tabela-container">
      <h2>Problemas na Parte do Corpo: {parteCorpo}</h2>
      <table className="tabela-problemas">
        <thead>
          <tr>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {problemas.length > 0 ? (
            problemas.map((problema, index) => (
              <tr key={index}>
                <td>{problema.descricao}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="1">Nenhum problema encontrado para esta parte do corpo.</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="heartbeat-container">
        <Coracao /> 
      </div>
    </div>
  );
}

export default TabelaProblemas;