import React from "react";
import "../Style/PerfilUsuarioRegistros.css";
import Adm from "../Imagens/Who_is_this_guy.jpeg";

const UserProfile = () => {
    return (
        <div className="custom-user-profile_registro_examesss">
            <img
                src={Adm}
                alt="User Avatar"
                className="custom-avatar_registro_examesss"
            />
            <div className="custom-user-info_registro_examesss">
                <h4 className="custom-user-name_registro_examesss">Admin</h4>
                <p className="custom-user-email_registro_examesss">Adm@bioguardian.com</p>
            </div>
        </div>
    );
};

export default UserProfile;