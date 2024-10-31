import React, { useState, useEffect } from "react";
import axios from "axios";

//IMPORTE ESTILIZAÇÃO AQ
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
        <div>
            <table border={2} cellPadding={5} cellSpacing={5}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Senha</th>
                        <th>Ações</th>
                        {/* Adicione mais colunas, se necessário */}
                    </tr>
                </thead>
                <tbody>
                    {cadastros.map((cadastro) => (
                        <tr key={cadastro.idLogin}>
                            <td>{cadastro.idLogin}</td>
                            <td>{cadastro.email}</td>
                            <td>{cadastro.senha}</td>
                            <td>
                                <button
                                    variant="danger"
                                    onClick={() => handleExcluirUsuario(cadastro.idLogin)}
                                >
                                    Excluir
                                </button>
                            </td>
                            {/* Renderizar outras colunas, se necessário */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelaLogin;