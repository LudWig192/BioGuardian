import React from "react";
import UnidadesComponent from "../Components/Unidades";
import '../Style/Unidades.css';

const Unidades = () => {
    return (
        <>
            <div>
                <h2 className="hospital-title-h2 animated-title">
                    Conheça mais sobre as nossas unidades <span>hospitalares</span> espalhadas pelo Brasil!
                </h2>
                <h3 className="hospital-title-h3 animated-title">
                    Unidades parceiras em São Paulo:
                </h3>
                <UnidadesComponent />
            </div>
            {/* <Duvidas /> */}
        </>
    );
};

export default Unidades;
