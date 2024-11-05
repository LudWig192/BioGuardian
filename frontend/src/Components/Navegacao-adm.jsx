import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import "../Style/Navbar.css";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(prevState => !prevState);
    };

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/";
    };

    <li onClick={handleLogout} className="dropdown-item">Logout</li>

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="navbar-logo">
                    <Link to="">
                        <img src={require("../Imagens/logo-removebg-preview-removebg-preview.png")} alt="Logo" className="logo" />
                    </Link>
                </div>
                <ul className="navbar-links">
                    <li>
                        <Link to="/PerfilAdm" className="nav-link">
                            <HomeIcon className="icon" /> <span>Home</span>
                        </Link>
                    </li>


                    <li>
                        <Link to="/Funcionarios" className="nav-link">
                            <InfoIcon className="icon" /> <span>Funcionarios</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Clientes" className="nav-link">
                            <LocalMallIcon className="icon" /> <span>Clientes</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Salario" className="nav-link">
                            <ContactMailIcon className="icon" /> <span>Salario do medico</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Registros" className="nav-link">
                            <LocalMallIcon className="icon" /> <span>Registros</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <div className="user-info">
                    <span className="user-name">Admin</span>
                </div>
                <div className="user-avatar" onClick={toggleDropdown}>
                    <img
                        src={require("../Imagens/Calvo-removebg-preview.png")}
                        alt="User Avatar"
                        className="avatar"
                    />
                    {dropdownOpen && (
                        <div className="dropdown-menu">
                            <ul>
                                <li onClick={handleLogout} className="dropdown-item">Sair</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
