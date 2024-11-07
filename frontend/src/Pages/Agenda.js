import React, { useEffect, useState } from 'react';
import ResponsiveTable from '../Components/Agenda.jsx';
import ButtonGroup from '../Components/Botoes.jsx';
import SwitchWithIconsAndAvatar from '../Components/Avatar.jsx';
import NavbarMedico from '../Components/Navegacao-medico';
import FooterMedico from "../Components/Footer-Medico"
import '../Style/Agenda.css'


const Agenda = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [notificationCount, setNotificationCount] = useState(0);
    const [latestPatient, setLatestPatient] = useState(null);


    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/agenda');
            if (!response.ok) throw new Error('Erro ao buscar dados');
            const data = await response.json();

            const formattedData = data.map(item => ({
                ...item,
                agendamento: new Date(item.agendamento).toLocaleDateString('pt-BR'),
            }));

            setData(formattedData);
            setFilteredData(formattedData);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 5000);
        return () => clearInterval(intervalId);
    }, []);

    const handleEdit = async (editedItem) => {
        try {
            const response = await fetch(`http://localhost:3001/agenda/${editedItem.idAgenda}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editedItem),
            });

            if (!response.ok) throw new Error('Erro ao atualizar');

            const updatedItem = await response.json();
            setData(data.map(item => item.idAgenda === updatedItem.idAgenda ? updatedItem : item));
            setFilteredData(data.map(item => item.idAgenda === updatedItem.idAgenda ? updatedItem : item));
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (idAgenda) => {
        try {
            const response = await fetch(`http://localhost:3001/agenda/${idAgenda}`, {
                method: 'DELETE',
            });

            if (!response.ok) throw new Error('Erro ao deletar');

            const updatedData = data.filter(item => item.idAgenda !== idAgenda);
            setData(updatedData);
            setFilteredData(updatedData);
        } catch (error) {
            console.error(error);
        }
    };

    const handleAdd = async (newItem) => {
        try {
            const response = await fetch('http://localhost:3001/agenda', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newItem),
            });

            if (!response.ok) throw new Error('Erro ao adicionar agendamento');

            const createdItem = await response.json();
            const newData = [...data, createdItem];
            setData(newData);
            setFilteredData(newData);
            setNotificationCount(prevCount => prevCount + 1);
            setLatestPatient(newItem);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDateRangeChange = (newRange) => {
        const filtered = data.filter(item => {
            return new Date(item.agendamento) >= new Date(newRange.start) && new Date(item.agendamento) <= new Date(newRange.end);
        });
        setFilteredData(filtered);
    };

    const handleStatusFilterChange = (newStatus) => {
        const filtered = data.filter(item => item.status === newStatus);
        setFilteredData(filtered);
    };

    const handlePlanFilterChange = (newPlan) => {
        const filtered = data.filter(item => item.tipoPlano === newPlan);
        setFilteredData(filtered);
    };


    return (
        <div className='Agenda-tudo'>
            <div className="App">
                <>
                    <NavbarMedico />
                    <SwitchWithIconsAndAvatar
                        notificationCount={notificationCount}
                        latestPatient={latestPatient}
                    />
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
                </>
                <FooterMedico />
            </div>
        </div>
    );
};

export default Agenda;
