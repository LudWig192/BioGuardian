import React from 'react';
import '../Style/Testemunho.css';
import Deolaine from '../Imagens/Deolaine.jpg';
import Marcos from '../Imagens/Marcos.png';
import Alice from '../Imagens/Alice.jpg';

const testemunhos = [
    {
        nome: 'Dra. Deolane Freitas',
        especialidade: 'Pediatria',
        salario: 'R$ 20.000',
        depoimento: 'A remuneração é justa, considerando a carga de trabalho e a responsabilidade.',
        foto: Deolaine,
    },
    {
        nome: 'Dr. Marcos Henrique',
        especialidade: 'Cirurgia Geral',
        salario: 'R$ 25.000',
        depoimento: 'Consegui aumentar meu salário em 30% nos últimos dois anos com dedicação e especialização.',
        foto: Marcos,
    },
    {
        nome: 'Dra. Alice Martins',
        especialidade: 'Neurologia',
        salario: 'R$ 30.000',
        depoimento: 'A alta demanda na minha área refletiu positivamente no meu salário.',
        foto: Alice,
    },
];

const Testemunhos = () => {
    return (
        <div className="testemunhos">
            <h2>Depoimentos de Nossos Profissionais</h2>
            <div className="testemunhos-container">
                {testemunhos.map((testemunho, index) => (
                    <div key={index} className="testemunho-card">
                        <img src={testemunho.foto} alt={testemunho.nome} className="foto-medico" />
                        <h3>{testemunho.nome}</h3>
                        <p><strong>Especialidade:</strong> {testemunho.especialidade}</p>
                        <p><strong>Salário:</strong> {testemunho.salario}</p>
                        <p className="depoimento">"{testemunho.depoimento}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testemunhos;
