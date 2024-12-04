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
                console.error("Erro ao buscar usuários:", error);
            }
        };

        fetchData();
    }, []);

    const handleExcluirUsuario = async (idLogin) => {
        try {
            await axios.delete(`http://localhost:3001/Login/${idLogin}`);
            const { data } = await axios.get("http://localhost:3001/Login");
            setCadastros(data);
            console.log("Usuário excluído com sucesso!");
        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
        }
    };

    return (
        <div className="tabela-login-container">
            <div className="tabela-login-header">
                <h2 className="tabela-login-title">Lista de Logins</h2>
            </div>
            <table className="tabela-login">
                <thead className="tabela-login-thead">
                    <tr className="tabela-login-header-row">
                        <th className="tabela-login-th">ID</th>
                        <th className="tabela-login-th">Email</th>
                        <th className="tabela-login-th">Senha</th>
                        <th className="tabela-login-th">Ações</th>
                    </tr>
                </thead>
                <tbody className="tabela-login-body">
                    {cadastros.map((cadastro) => (
                        <tr key={cadastro.idLogin} className="tabela-login-row">
                            <td className="tabela-login-td" data-label="ID">{cadastro.idLogin}</td>
                            <td className="tabela-login-td" data-label="Email">{cadastro.email}</td>
                            <td className="tabela-login-td" data-label="Senha">{cadastro.senha}</td>
                            <td className="tabela-login-td" data-label="Ações">
                                <div className="tabela-login-actions">
                                    <button
                                        className="tabela-login-button"
                                        onClick={() => handleExcluirUsuario(cadastro.idLogin)}
                                    >
                                        Excluir
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelaLogin;
