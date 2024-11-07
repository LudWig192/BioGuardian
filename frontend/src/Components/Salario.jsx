import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaSync, FaMoneyBillAlt } from 'react-icons/fa';
import '../Style/Salario.css';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const initialData = [
    { name: 'Cirurgião', SalarioDiurno: 25000, SalarioNoturno: 28000 },
    { name: 'Ortopedista', SalarioDiurno: 23000, SalarioNoturno: 24000 },
    { name: 'Cardiologista', SalarioDiurno: 26000, SalarioNoturno: 27000 },
    { name: 'Pediatra', SalarioDiurno: 19000, SalarioNoturno: 21000 },
    { name: 'Dermatologista', SalarioDiurno: 20000, SalarioNoturno: 22000 },
    { name: 'Anestesista', SalarioDiurno: 24000, SalarioNoturno: 25000 },
    { name: 'Neurologista', SalarioDiurno: 22000, SalarioNoturno: 23000 },
    { name: 'Psiquiatra', SalarioDiurno: 21000, SalarioNoturno: 22000 },
    { name: 'Oftalmologista', SalarioDiurno: 20000, SalarioNoturno: 21500 },
];

const formatCurrency = (value) => {
    return `R$ ${value.toLocaleString('pt-BR')}`;
};

const SalarioGrafico = () => {
    const [showSalarioDiurno, setShowSalarioDiurno] = useState(true);

    const toggleSalario = () => {
        setShowSalarioDiurno(!showSalarioDiurno);
    };

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(initialData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Salários');
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const dataBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(dataBlob, 'salarios_profissoes.xlsx');
    };

    return (
        <div className="grafico-container-analise">
            <div className="grafico-header-analise">
                <h2 className="grafico-title-analise">
                    Salários por Profissão Médica
                    <FaSync className="toggle-icon-analise" onClick={toggleSalario} title="Alternar Salário" />
                </h2>
                <button className="download-button-analise" onClick={exportToExcel}>Exportar para Excel</button>
            </div>
            <p className="period-analise">Período: 1 Março - 14 Março</p>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={initialData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                    <XAxis dataKey="name" stroke="#333" />
                    <YAxis stroke="#333" />
                    <Tooltip formatter={(value) => formatCurrency(value)} />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey={showSalarioDiurno ? "SalarioDiurno" : "SalarioNoturno"}
                        stroke={showSalarioDiurno ? "#007bff" : "#17a2b8"}
                        name={showSalarioDiurno ? "Salário Diurno" : "Salário Noturno"}
                        strokeWidth={2}
                        animationDuration={500}
                    />
                </LineChart>
            </ResponsiveContainer>

            <div className="analise-salarios-analise">
                <h3 className="analise-title-analise">Análise de Salários</h3>
                <ul>
                    <li className="analise-item-analise"><FaMoneyBillAlt className="money-icon-analise" /><strong>Média Salarial:</strong> {formatCurrency(23000)}</li>
                    <li className="analise-item-analise"><FaMoneyBillAlt className="money-icon-analise" /><strong>Maior Salário:</strong> {formatCurrency(30000)} (Neurologista)</li>
                    <li className="analise-item-analise"><FaMoneyBillAlt className="money-icon-analise" /><strong>Aumento Médio:</strong> 5% em relação ao ano passado</li>
                </ul>
            </div>
        </div>
    );
};

export default SalarioGrafico;
