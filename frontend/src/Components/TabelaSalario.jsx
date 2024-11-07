import React from 'react';
import { FaUserMd } from 'react-icons/fa'; 
import '../Style/TabelaSalario.css';
import Deolaine from '../Imagens/Deolaine.jpg';
import Marcos from '../Imagens/Marcos.png';
import Alice from '../Imagens/Alice.jpg';

const medicos = [
    {
        nome: 'Deolaine Freitas',
        especialidade: 'Cardiologia',
        salario: 580,
        status: 'Aprovado',
        data: '2 de novembro, às 12:00',
        imagem: Deolaine
    },
    {
        nome: 'Marcos Henrique',
        especialidade: 'Cirurgia Geral',
        salario: 1000,
        status: 'Aprovado',
        data: '6 de março, às 22:00',
        imagem: Marcos
    },
    {
        nome: 'Alice Martins',
        especialidade: 'Neurologia',
        salario: 3844,
        status: 'Aprovado',
        data: '6 de março, às 14:00',
        imagem: Alice
    }
];

const PainelMedicos = () => {
    return (
        <div className="painel-medicos-destaque">
            <h2>
                <FaUserMd className="icon-destaque" />
                Médicos Destaque do Mês
            </h2>
            {medicos.map((medico, index) => (
                <div key={index} className="linha-medico-destaque">
                    <div className="informacao-medico-destaque">
                        <div className="icone-medico-destaque">
                            <img src={medico.imagem} alt={`Imagem de ${medico.nome}`} />
                        </div>
                        <div className="dados-medico-destaque">
                            <div className="nome-medico-destaque">{medico.nome}</div>
                            <div className="especialidade-destaque">{medico.especialidade}</div>
                            <div className="salario-destaque">R$ {medico.salario.toFixed(2)}</div>
                            <div className="data-destaque">{medico.data}</div>
                        </div>
                    </div>
                    <div className={`status-destaque ${medico.status.toLowerCase()}`}>{medico.status}</div>
                </div>
            ))}
        </div>
    );
};

export default PainelMedicos;
