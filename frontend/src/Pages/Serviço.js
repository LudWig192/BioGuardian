import React from "react";
import Banner from "../Components/BannerServiço";
import Icons from "../Components/IconsServiço";
import BannerMini from "../Components/MiniBannerServiço";
import Suporte from "../Components/SuportServiço";
import Medico from "../Components/MedicoServiço";
import Animação from "../Components/TecnologiaServiço";
import "../Style/ServicoPage.css";
import NavbarCSC from '../Components/Navegacao'
const Unidades = () => {
    return (
        <div className="servico-page">
            <NavbarCSC />
            <Banner />
            <Icons />
            <BannerMini />
            <Suporte />
            <Animação />
            <Medico />
        </div>
    );
};

export default Unidades;
