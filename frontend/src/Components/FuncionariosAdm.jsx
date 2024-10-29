import React from 'react';
import '../Style/FuncionariosAdm.css';
import Ana from '../Imagens/DrAna.jpg';
import Alice from '../Imagens/Alice.jpg';
import Joao from '../Imagens/JoaoEnfer.jpeg';
import Laura from '../Imagens/Laura.jpg';

// Mapeamento das cores para cada papel
const roleColors = {
    neurologia: "#5472f0", 
    "enfermeiro-chefe": "#6854f0", 
    fisioterapeuta: "#5472f0", 
    administradora: "#6854f0" 
};

const users = [
    {
        name: "Dra. Alice Martins",
        email: "alice.Martins@hospital.com",
        role: "Neurologia",
        image: Alice
    },
    {
        name: "Enf. João Machado",
        email: "joao.silva@hospital.com",
        role: "Enfermeiro Chefe",
        image: Joao
    },
    {
        name: "Laura Santos",
        email: "Laura.Santos@hospital.com",
        role: "Fisioterapeuta",
        image: Laura
    },
    {
        name: "Ana Costa",
        email: "Ana.Costa@hospital.com",
        role: "Administradora",
        image: Ana
    }
];

const UserProfile = () => {
    return (
        <div className="user-profiles-container">
            {users.map((user, index) => (
                <div key={index} className="user-profile-card">
                    <img src={user.image} alt={user.name} className="user-profile-image" />
                    <div className="user-profile-info">
                        <h4 className="user-profile-name">{user.name}</h4>
                        <p className="user-profile-email">{user.email}</p>
                        <span
                            className={`user-profile-role user-profile-role--${user.role.toLowerCase().replace(" ", "-")}`}
                            style={{ color: roleColors[user.role.toLowerCase().replace(" ", "-")] }}
                        >
                            {user.role}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserProfile;
