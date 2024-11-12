import React, { useState } from "react";
import Painel from '../Components/Painel';
import Medicos from "../Components/Medico";
import Avaliacoes from "../Components/AvaliacaoCliente";
import Calendar from "../Components/CalendarioAgendamento";
import '../Style/AgendamentoPage.css';
import NavbarCCC from '../Components/Navegacao-CCC'
import FooterCCC from "../Components/Footer-CCC"


function App() {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    return (
        <>
            <NavbarCCC />
            <div className="App">
                <header className="App-header">
                    <Painel />
                    <Medicos selectedDate={selectedDate} />
                    <div className="avaliacoes-calendario-wrapper">
                        <div className="avaliacoes-wrapper">
                            <Avaliacoes />
                        </div>
                        <div className="calendario-wrapper">
                            <Calendar onDateSelect={handleDateSelect} />
                        </div>
                    </div>
                </header>
                <FooterCCC />
            </div>
        </>
    );
}

export default App;
