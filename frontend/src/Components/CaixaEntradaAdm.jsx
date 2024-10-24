import React from 'react';
import '../Style/CaixaEntradaAdm.css';

const messages = [
    { name: 'Dr. Alice Mendes', message: "Paciente João da Silva precisa de atenção.", time: '13:40 PM' },
    { name: 'Enf. João Silva', message: "Relatório de enfermagem do dia está pronto.", time: '13:34 PM' },
    { name: 'Ana Paula', message: "Agendamento de fisioterapia para a próxima semana.", time: '13:17 PM' },
    { name: 'Carlos Eduardo', message: "Documentos do novo paciente enviados.", time: '12:20 PM' },
    { name: 'Dr. Tomas', message: "A consulta de Maria foi cancelada.", time: '10:15 AM' },
];

const Inbox = () => {
    return (
        <div className="inbox-container">
            <h2>Caixa de Entrada</h2>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>
                        <div className="user">
                            <span className="name">{msg.name}</span>
                            <span className="message">{msg.message}</span>
                        </div>
                        <span className="time">{msg.time}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Inbox;
