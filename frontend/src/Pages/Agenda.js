import React, { useState } from 'react';
import ResponsiveTable from '../Components/Agenda.jsx';
import ButtonGroup from '../Components/Botoes.jsx';
import SwitchWithIconsAndAvatar from '../Components/Avatar.jsx';
import Slider from '../Components/Slider_Card.jsx';
const Agenda = () => {
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

    const [filteredData, setFilteredData] = useState(data);
    const [isDateDescending, setIsDateDescending] = useState(false);
    const [notificationCount, setNotificationCount] = useState(0);
    const [latestPatient, setLatestPatient] = useState(null);

    const handleEdit = (editedItem) => {
        setData(data.map(item => item.id === editedItem.id ? editedItem : item));
        setFilteredData(data.map(item => item.id === editedItem.id ? editedItem : item));
    };

    const handleDelete = (id) => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
        setFilteredData(updatedData);
    };

    const handleAdd = (newItem) => {
        const newData = [...data, { ...newItem, id: Date.now() }];
        setData(newData);
        setFilteredData(newData);
        setNotificationCount(prevCount => prevCount + 1);
        setLatestPatient(newItem);
    };

    const handleDateRangeChange = (startDate, endDate) => {
        const sortedData = [...data].sort((a, b) => {
            const dateA = new Date(a.agendamento);
            const dateB = new Date(b.agendamento);
            return isDateDescending
                ? dateB - dateA
                : dateA - dateB;
        });
        setFilteredData(sortedData);
        setIsDateDescending(!isDateDescending);
    };

    const handleStatusFilterChange = (status) => {
        const filtered = status === ''
            ? data
            : data.filter(item => item.status === status);
        setFilteredData(filtered);
    };

    const handlePlanFilterChange = (plan) => {
        const filtered = plan === ''
            ? data
            : data.filter(item => item.tipoPlano === plan);
        setFilteredData(filtered);
    };

    return (
        <div className="App">
            <SwitchWithIconsAndAvatar
                notificationCount={notificationCount}
                latestPatient={latestPatient} />
            <h1 className='animated-heading'>Agenda Médica</h1>
            <ButtonGroup
                onDateRangeChange={handleDateRangeChange}
                onStatusFilterChange={handleStatusFilterChange}
                onPlanFilterChange={handlePlanFilterChange}
                data={data}
            />
            <ResponsiveTable
                data={filteredData}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onAdd={handleAdd}
            />

            <Slider />
        </div>
    );
};

export default Agenda;