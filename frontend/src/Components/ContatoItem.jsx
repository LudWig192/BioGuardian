import React from 'react';

const CadastroItem = ({ cadastro, onDelete }) => {
  return (
    <tr>
      <td>{cadastro.idContato}</td>
      <td>{cadastro.nome}</td>
      <td>{cadastro.email_ou_telefone}</td>
      <td>{cadastro.mensagem}</td>
      <td>
        <button onClick={() => onDelete(cadastro.idContato)}>Excluir</button>
      </td>
    </tr>
  );
};

export default CadastroItem;

