import React, { useState } from 'react';
import ResponsiveTable from '../Componentes/Agenda';
import Botoes from '../Componentes/botoes.jsx';
import Avatar from "../Componentes/Avatar.jsx";

const App = () => {
    const [data, setData] = useState([
        { id: 1, agendamento: '2024-08-15', paciente: 'João Silva', status: 'Confirmado', procedimentos: 'Exame de sangue', tipoPlano: 'Padrão' },
        { id: 2, agendamento: '2024-08-16', paciente: 'Maria Oliveira', status: 'Pendente', procedimentos: 'Consulta', tipoPlano: 'Premium' },
        { id: 3, agendamento: '2024-08-17', paciente: 'Pedro Santos', status: 'Cancelado', procedimentos: 'Radiografia', tipoPlano: 'Padrão' },
        { id: 4, agendamento: '2024-08-18', paciente: 'Karoline Costa', status: 'Confirmado', procedimentos: 'Consulta médica', tipoPlano: 'Básico' },
        { id: 5, agendamento: '2024-08-19', paciente: 'Carlos Almeida', status: 'Pendente', procedimentos: 'Exame de visão', tipoPlano: 'Premium' },
        { id: 6, agendamento: '2024-08-20', paciente: 'Beatriz Lima', status: 'Confirmado', procedimentos: 'Ultrassonografia', tipoPlano: 'Padrão' },
        { id: 7, agendamento: '2024-08-21', paciente: 'Marcos Pereira', status: 'Cancelado', procedimentos: 'Consulta ortopédica', tipoPlano: 'Básico' },
        { id: 8, agendamento: '2024-08-22', paciente: 'Larissa Silva', status: 'Confirmado', procedimentos: 'Exame de sangue', tipoPlano: 'Premium' },
        { id: 9, agendamento: '2024-08-23', paciente: 'Gustavo Santos', status: 'Pendente', procedimentos: 'Radiografia', tipoPlano: 'Padrão' }
    ]);

    const handleEdit = (editedItem) => {
        setData(data.map(item => item.id === editedItem.id ? editedItem : item));
    };

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const handleAdd = (newItem) => {
        setData([...data, { ...newItem, id: Date.now() }]);
    };

    return (
        <div className="App">
            <Avatar />
            <h1 className='animated-heading'>Agenda Médica</h1>
            <Botoes />
            <ResponsiveTable
                data={data}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onAdd={handleAdd}
            />
        </div>
    );
};

export default App;