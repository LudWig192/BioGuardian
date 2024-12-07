import React, { useState } from 'react';
import { BsFillHouseHeartFill } from 'react-icons/bs';
import { AiFillPrinter } from 'react-icons/ai';
import { GrDocumentExcel } from "react-icons/gr";
import "../Style/Botao.css";
import * as XLSX from 'xlsx';

const ButtonGroup = ({ onDateRangeChange, onStatusFilterChange, onPlanFilterChange, data }) => {

    const [statusFilter, setStatusFilter] = useState('');
    const [planFilter, setPlanFilter] = useState('');


    const handleStatusChange = () => {
        let newStatusFilter;
        if (statusFilter === '') {
            newStatusFilter = 'Confirmado';
        } else if (statusFilter === 'Confirmado') {
            newStatusFilter = 'Pendente';
        } else if (statusFilter === 'Pendente') {
            newStatusFilter = 'Cancelado';
        } else {
            newStatusFilter = '';
        }
        setStatusFilter(newStatusFilter);
        onStatusFilterChange(newStatusFilter);
    };

    const handlePlanChange = () => {
        let newPlanFilter;
        if (planFilter === '') {
            newPlanFilter = 'Individual';
        } else if (planFilter === 'Individual') {
            newPlanFilter = 'Familiar';
        } else if (planFilter === 'Familiar') {
            newPlanFilter = 'Individual';
        } else {
            newPlanFilter = '';
        }
        setPlanFilter(newPlanFilter);
        onPlanFilterChange(newPlanFilter);
    };

    const handleExportToExcel = () => {
        if (!data || !Array.isArray(data) || data.length === 0 || !data.every(item => typeof item === 'object' && item !== null)) {
            console.error('Invalid data for export.');
            return;
        }

        try {
            const ws = XLSX.utils.json_to_sheet(data, {
                header: ["id", "agendamento", "paciente", "status", "procedimentos", "tipoPlano"]
            });
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Agenda");
            XLSX.writeFile(wb, "agenda.xlsx");
        } catch (error) {
            console.error('Error creating or downloading the Excel file:', error);
        }
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className='button-tudo'>
            <div className="button-group">
                <div className="left-buttons">
                    <button className="border-left" onClick={handleStatusChange}>
                        {statusFilter === '' ? 'Status' : `Status: ${statusFilter}`}
                    </button>
                    <button className="border-left" onClick={handlePlanChange}>
                        {planFilter === '' ? 'Plano' : `Plano: ${planFilter}`}
                    </button>
                </div>
                <div className="right-buttons">
                    <button className="icon-button" onClick={handleExportToExcel}><GrDocumentExcel /></button>
                    <button className="icon-button" onClick={handlePrint}><AiFillPrinter /></button>
                </div>
            </div>
        </div>
    );
};

export default ButtonGroup;