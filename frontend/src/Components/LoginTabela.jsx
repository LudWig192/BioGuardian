import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Style/TabelLogin.css';

const TabelaLogin = () => {
    const [cadastros, setCadastros] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("http://localhost:3001/Login");
                setCadastros(data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
            }
        };

        fetchData();
    }, []);

    const handleExcluirUsuario = async (idLogin) => {
        try {
            await axios.delete(`http://localhost:3001/Login/${idLogin}`);
            // Atualiza a lista de cadastros após a exclusão
            const { data } = await axios.get("http://localhost:3001/Login");
            setCadastros(data);
            console.log("Usuário excluído com sucesso!");
        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
        }
    };

    return (
        <div className="tabela-login-container">
            <table className="tabela-login">
                <thead className="tabela-login-thead">
                    <tr>
                        <th className="tabela-login-th">ID</th>
                        <th className="tabela-login-th">Email</th>
                        <th className="tabela-login-th">Senha</th>
                        <th className="tabela-login-th">Ações</th>
                    </tr>
                </thead>
                <tbody className="tabela-login-tbody">
                    {cadastros.map((cadastro) => (
                        <tr key={cadastro.idLogin} className="tabela-login-tr">
                            <td className="tabela-login-td">{cadastro.idLogin}</td>
                            <td className="tabela-login-td">{cadastro.email}</td>
                            <td className="tabela-login-td">{cadastro.senha}</td>
                            <td className="tabela-login-td">
                                <button
                                    className="tabela-login-button"
                                    variant="danger"
                                    onClick={() => handleExcluirUsuario(cadastro.idLogin)}
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

export default TabelaLogin;