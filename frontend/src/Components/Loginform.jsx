import React, { useState } from 'react';
import '../Style/Login.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, senha }),
                mode: 'cors',
            });

            if (response.ok) {
                // Se o login for bem-sucedido
                setIsLoggedIn(true);
                setError('');

                // Login especifico
                if (email === 'Adm@medley.com' && senha === 'admin123') {
                    navigate('/Funcionarios'); // Rota específica para admin
                } else if (email === 'Medico@medley.com' && senha === 'medico123') {
                    navigate('/Agenda'); // Rota específica para médico
                } else {
                    navigate('/Unidades'); // Rota padrão para outros logins
                }
                // Se o login falhar
                setError('Email ou senha incorretos!');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setError('Erro ao conectar com o servidor.');
        }
    };
    return (
        <div className="Background-2">
            <div className="container">
                <div className="form-container">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin} className="custom-form">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            required
                        />
                        <input
                            type="password"
                            name="senha"
                            placeholder="Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className="form-control"
                            required
                        />
                        <button type="submit" className="btn-primary">Salvar</button>
                    </form>
                    <div className="red-cdsto">
                        <p>Não tem <span className="link-text"><Link to="/Cadastro">Cadastro?</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
