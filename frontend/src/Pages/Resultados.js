import React from 'react';
import ResultPage from '../Components/Resultados';
import NavbarCCC from '../Components/Navegacao-medico';
import Footer from "../Components/Footer-Medico";
function App() {
    return (
        <div className="App">
            <NavbarCCC/>
            <ResultPage />
            <Footer />
        </div>
    );
}

export default App;
