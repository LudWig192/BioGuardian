import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Style/ClienteTab.css'

const TabelaCadastro = () => {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/cadastros");
        setCadastros(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (idCadastro) => {
    try {
      await axios.delete(`http://localhost:3001/cadastros/${idCadastro}`);
      const { data } = await axios.get("http://localhost:3001/cadastros");
      setCadastros(data);
      console.log("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  return (
    <div className="tabela-cadastro-container">
      <table className="tabela-cadastro">
        <thead className="tabela-cadastro-thead">
          <tr>
            <th className="tabela-cadastro-th">ID</th>
            <th className="tabela-cadastro-th">Nome</th>
            <th className="tabela-cadastro-th">Email</th>
            <th className="tabela-cadastro-th">Senha</th>
            <th className="tabela-cadastro-th">Ações</th>
          </tr>
        </thead>
        <tbody className="tabela-cadastro-tbody">
          {cadastros.map((cadastro) => (
            <tr key={cadastro.idCadastro} className="tabela-tr">
              <td className="tabela-cadastro-td" data-label="ID">{cadastro.idCadastro}</td>
              <td className="tabela-cadastro-td" data-label="Nome">{cadastro.nome}</td>
              <td className="tabela-cadastro-td" data-label="Email">{cadastro.email}</td>
              <td className="tabela-cadastro-td" data-label="Senha">{cadastro.senha}</td>
              <td className="tabela-cadastro-td" data-label="Ações">
                <button
                  className="tabela-button"
                  onClick={() => handleExcluirUsuario(cadastro.idCadastro)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaCadastro;