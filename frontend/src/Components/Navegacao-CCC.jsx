// IMPORT BIBLIOTECAS AQ
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import "../Style/Navbar.css";

const NavbarCCC = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/";
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
                            <li onClick={handleLogout} className="dropdown-item">Sair</li>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavbarCCC;
