//BIBLIOTECAS:
import React from 'react';

//COMPONENTES:


//ESTILIZAÇÃO:
import '../Style/Tabelaproblemas.css';
 

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
      </div>
    </div>
  );
}

export default TabelaProblemas;