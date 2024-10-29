import React, { useState } from 'react';
import '../Style/Login.css';
import { useNavigate, Link } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
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
            });

            if (response.ok) {
                const user = await response.json();

                if (user.role === 'admin') {
                    navigate('/PerfilAdm');
                } else if (user.role === 'medico') {
                    navigate('/HomeMedico');
                } else {
                    navigate('/HomeCliente'); 
                }
                setError(''); 
            } else {
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
                        {error && <p className="error-message">{error}</p>}
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