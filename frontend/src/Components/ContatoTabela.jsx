import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Style/TabelLogin.css';

const TabelaLogin = () => {
    const [cadastros, setCadastros] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("http://localhost:3001/contato");
                setCadastros(data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error); 
            }
        };

        fetchData();
    }, []);

    const handleExcluirUsuario = async (idContato) => {
        try {
            await axios.delete(`http://localhost:3001/Login/${idContato}`);
            
            const { data } = await axios.get("http://localhost:3001/contato");
            setCadastros(data);
            console.log("Usuário excluído com sucesso!");
        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
        }
    };

    return (
        <div className="tabela-contato-container">
            <table className="tabela-contato">
                <thead className="tabela-contato-thead">
                    <tr>
                        <th className="tabela-contato-th">ID</th>
                        <th className="tabela-contato-th">Nome</th>
                        <th className="tabela-contato-th">Email ou telefone</th>
                        <th className="tabela-contato-th">Mensagem</th>
                    </tr>
                </thead>
                <tbody className="tabela-contato-tbody">
                    {cadastros.map((cadastro) => (
                        <tr key={cadastro.idLogin} className="tabela-contato-tr">
                            <td className="tabela-contato-td">{cadastro.iContato}</td>
                            <td className="tabela-contato-td">{cadastro.nome}</td>
                            <td className="tabela-contato-td">{cadastro.email_ou_telefone}</td>
                            <td className="tabela-contato-td">{cadastro.mensagem}</td>
                            <td className="tabela-contato-td">
                                <button
                                    className="tabela-contato-button"
                                    variant="danger"
                                    onClick={() => handleExcluirUsuario(cadastro.idContato)}
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