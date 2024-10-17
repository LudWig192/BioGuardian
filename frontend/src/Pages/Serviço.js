import React from "react";
import Banner from "../Components/BannerServiço";
import Icons from "../Components/IconsServiço";
import BannerMini from "../Components/MiniBannerServiço";
import Suporte from "../Components/SuportServiço";
import Medico from "../Components/MedicoServiço";
import Animação from "../Components/TecnologiaServiço"



const Unidades = () => {
    return (
        <>
        <Banner />
        <Icons />
        <BannerMini />
        <Suporte />
        <Animação />
        <Medico />

        </>
    );
};

export default Unidades;