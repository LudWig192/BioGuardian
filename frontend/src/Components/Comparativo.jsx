import React from 'react';
import '../Style/Comparativo.css';

// Dados dos benefícios
const beneficios = [
    {
        hospital: 'Hospital das Clínicas',
        salario: 'R$ 20.000',
        beneficios: [
            'Plano de Saúde',
            'Bônus por Performance',
            'Férias de 30 dias',
            'Auxílio Educação',
        ],
    },
    {
        hospital: 'Hospital de Câncer',
        salario: 'R$ 25.000',
        beneficios: [
            'Plano de Saúde',
            'Vale Alimentação',
            'Bônus Anual',
            'Férias de 30 dias',
        ],
    },
    {
        hospital: 'Clínica São Pedro',
        salario: 'R$ 22.000',
        beneficios: [
            'Plano de Saúde',
            'Auxílio Transporte',
            'Bônus por Metas',
            'Férias de 30 dias',
        ],
    },
];

// Componente de Comparativo de Benefícios
const ComparativoBeneficios = () => {
    return (
        <div className="comparativo-beneficios">
            <h2>Comparativo de Benefícios</h2>
            <table className="beneficios-table">
                <thead>
                    <tr>
                        <th>Hospital</th>
                        <th>Salário</th>
                        <th>Benefícios</th>
                    </tr>
                </thead>
                <tbody>
                    {beneficios.map((item, index) => (
                        <tr key={index}>
                            <td>{item.hospital}</td>
                            <td>{item.salario}</td>
                            <td>
                                <ul>
                                    {item.beneficios.map((beneficio, idx) => (
                                        <li key={idx} className="beneficio-item">{beneficio}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ComparativoBeneficios;
