import React from 'react';
import UserProfile from '../Components/PerfilAdm';
import StatsOverview from '../Components/VisaoGeralAdm';
import PostDensityChart from '../Components/GraficoPerfilAdm';
import GeolocationChart from '../Components/Geocalizacao';
import BestPosts from '../Components/PostagensAdm';
import '../Style/PerfilAdmPage.css'; 

const PerfilAdmHospitalar = () => {
    return (
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
    );
};

export default PerfilAdmHospitalar;
