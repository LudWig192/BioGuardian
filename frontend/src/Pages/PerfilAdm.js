import React from 'react';
import UserProfile from '../Components/PerfilAdm';
import StatsOverview from '../Components/VisaoGeralAdm';
import PostDensityChart from '../Components/GraficoPerfilAdm';
import GeolocationChart from '../Components/Geocalizacao';
import BestPosts from '../Components/PostagensAdm';
import '../Style/PerfilAdmPage.css';
import NavegacaoAdm from '../Components/Navegacao-adm';
import FooterAdm from "../Components/Footer-adm";


const PerfilAdmHospitalar = () => {
    return (
        <>
            <NavegacaoAdm />
            <div className="perfil-adm-hospitalar">
                <div className="perfil-adm-hospitalar__left-panel">
                    <UserProfile />
                </div>
                <div className="perfil-adm-hospitalar__right-panel">
                    <StatsOverview />
                    <div className="perfil-adm-hospitalar__charts">
                        <PostDensityChart />
                        <GeolocationChart />
                    </div>
                    <BestPosts />

                </div>
            </div>
            <FooterAdm />
        </>
    );
};

export default PerfilAdmHospitalar;
