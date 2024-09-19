import React from 'react';

const CadastroItem = ({ cadastro, onDelete }) => {
  return (
    <tr>
      <td>{cadastro.id}</td>
      <td>{cadastro.nome}</td>
      <td>{cadastro.email}</td>
      <td>
        <button onClick={() => onDelete(cadastro.id)}>Excluir</button>
      </td>
    </tr>
  );
};

export default CadastroItem;

