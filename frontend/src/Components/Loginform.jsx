import React, { useEffect, useState } from 'react';
import '../Style/Login.css';
import { useNavigate, Link } from 'react-router-dom';
import Google from '../Imagens/google.svg'
import Apple from '../Imagens/apple.svg'

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
    useEffect(() => {
        if (error) {
            alert(error);
        }
    }, [error]);

    const [sequencia, setSequencia] = useState('');
    const codigoSecreto = 'wwssadadba';

    const handleKeyPress = (event) => {
        const teclaPressionada = event.key;
        setSequencia(prev => prev + teclaPressionada);

        if (sequencia + teclaPressionada === codigoSecreto) {
            navigate('/interrogacao');
        }

        if (sequencia.length >= codigoSecreto.length) {
            setSequencia('');
        }
    };

    useEffect(() => {
        window.addEventListener('keypress', handleKeyPress);

        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };
    }, [sequencia]);

    return (
        <div className='login-tudo'>
            <div className='Login-container'>
                <h2 className='login-titulo'>Faça Login com</h2>
                <div className='Login-Media'>
                    <button className='Login-Media-button'>
                        <img src={Google} alt='' className='media-icon' />
                    </button>
                    <button className='Login-Media-button'>
                        <img src={Apple} alt='' className='media-icon' />
                    </button>
                </div>

                <p className='separador'><span>Ou</span></p>

                <form onSubmit={handleLogin} action='#' className='login-form'>
                    <div className="login-input-wrapper">
                        <input type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            required
                        />
                        <i class="material-symbols-outlined">
                            mail
                        </i>
                    </div>

                    <div className="login-input-wrapper">
                        <input
                            type="password"
                            name="senha"
                            placeholder="Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className="form-control"
                            required
                        />
                        <i class="material-symbols-rounded">
                            lock
                        </i>
                    </div>

                    <button type="submit" className="login-btn">Entrar</button>
                </form>

                <p className='Login-redi-cada'>Não tem<Link to="/Cadastro">Cadastro?</Link></p>
            </div>
        </div>
    );
};

export default LoginForm;