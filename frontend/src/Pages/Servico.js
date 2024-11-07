import React from "react";
import Banner from "../Components/BannerServiço";
import Icons from "../Components/IconsServiço";
import BannerMini from "../Components/MiniBannerServiço";
import Suporte from "../Components/SuportServiço";
import Medico from "../Components/MedicoServiço";
import Animação from "../Components/TecnologiaServiço";
import "../Style/ServicoPage.css";
import NavbarCSC from '../Components/Navegacao'
import Footer from "../Components/Footer"

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
            <Footer />
        </div>
    );
};

export default Unidades;
