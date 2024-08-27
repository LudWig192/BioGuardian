import React from "react";
import UnidadesComponent from "../Components/Unidades";
import '../Style/Unidades.css';
// import Duvidas from '../Componentes/duvidas.jsx';

const Unidades = () => {
    return (
        <>
            <div>
                <h2>Conheça mais sobre as nossas unidades <span>hospitalares</span> espalhadas pelo Brasil!</h2>
                <h3 className="animated-heading">Unidades parceiras em São Paulo:</h3>
                <UnidadesComponent />
            </div>
            {/* <Duvidas /> */}
        </>
    );
};

export default Unidades;