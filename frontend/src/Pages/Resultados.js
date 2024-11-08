import React from 'react';
import ResultPage from '../Components/Resultados';
import NavbarCCC from '../Components/Navegacao-medico';
import FooterMedico from "../Components/Footer-Medico";
function App() {
    return (
        <div className="App">
            <NavbarCCC/>
            <ResultPage />
            <FooterMedico />
        </div>
    );
}

export default App;
