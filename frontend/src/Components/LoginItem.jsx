import React from 'react';

const LoginItem = ({ cadastro, onDelete }) => {
  return (
    <tr>
      <td>{cadastro.idLogin}</td>
      <td>{cadastro.nome}</td>
      <td>{cadastro.email}</td>
      <td>
        <button onClick={() => onDelete(cadastro.idLogin)}>Excluir</button>
      </td>
    </tr>
  );
};

export default LoginItem;