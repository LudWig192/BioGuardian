import React from "react";
import UnidadesComponent from "../Components/Unidades";
import '../Style/Unidades.css';
import NavbarCCC from '../Components/Navegacao-CCC'
import FooterCCC from '../Components/Footer-CCC'
const Unidades = () => {
    return (
        <>
            <div>
                <NavbarCCC />
                <h2 className="hospital-title-h2 animated-title">
                    Conheça mais sobre as nossas unidades <span>hospitalares</span> espalhadas pelo Brasil!
                </h2>
                <h3 className="hospital-title-h3 animated-title">
                    Unidades parceiras em São Paulo:
                </h3>
                <UnidadesComponent />
                <FooterCCC />
            </div>

        </>
    );
};

export default Unidades;
