// IMPORT BIBLIOTECAS AQ
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import "../Style/NavbarCCC.css";

const NavbarCCC = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="navbar-logo">
                    <Link to="/">
                        <img src={require("../Imagens/logo-removebg-preview-removebg-preview.png")} alt="Logo" className="logo" />
                    </Link>
                </div>
                <ul className="navbar-links">
                    <li>
                        <Link to="/HomeCliente" className="nav-link">
                            <HomeIcon className="icon" /> <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Agendamento" className="nav-link">
                            <InfoIcon className="icon" /> <span>Agendamento</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Exames" className="nav-link">
                            <LocalMallIcon className="icon" /> <span>Exames</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Resultados" className="nav-link">
                            <LocalMallIcon className="icon" /> <span>Resultado</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Contato" className="nav-link">
                            <ContactMailIcon className="icon" /> <span>Contato</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Unidades" className="nav-link">
                            <LocalMallIcon className="icon" /> <span>Unidades</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="navbar-right">
                <div className="user-avatar" onClick={toggleDropdown}>
                    <img
                        src={require("../Imagens/Calvo-removebg-preview.png")} 
                        alt="User Avatar"
                        className="avatar"
                    />
                    {dropdownOpen && (
                        <div className="dropdown-menu">
                            <Link to="/perfil" className="dropdown-item">Perfil</Link>
                            <Link to="/configuracoes" className="dropdown-item">Configurações</Link>
                            <Link to="/logout" className="dropdown-item">Sair</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavbarCCC;
