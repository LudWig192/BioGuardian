import React from "react";
import "../Style/PerfilUsuarioRegistros.css";
import Adm from "../Imagens/lucky-removebg-preview.png";

const UserProfile = () => {
    return (
        <div className="custom-user-profile">
            <img
                src={Adm}
                alt="User Avatar"
                className="custom-avatar"
            />
            <div className="custom-user-info">
                <h4 className="custom-user-name">Lucky Riveluvia</h4>
                <p className="custom-user-email">lucky@gmail.com</p>
            </div>
        </div>
    );
};

export default UserProfile;
