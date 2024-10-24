import React from "react";
import Banner from "../Components/BannerServiço";
import Icons from "../Components/IconsServiço";
import BannerMini from "../Components/MiniBannerServiço";
import Suporte from "../Components/SuportServiço";
import Medico from "../Components/MedicoServiço";
import Animação from "../Components/TecnologiaServiço";
import "../Style/ServicoPage.css";

const Unidades = () => {
    return (
        <div className="servico-page">
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
