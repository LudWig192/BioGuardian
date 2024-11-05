import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import "../Style/Navbar.css";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(prevState => !prevState);
    };

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
                        <Link to="/" className="nav-link">
                            <HomeIcon className="icon" /> <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Beneficio" className="nav-link">
                            <InfoIcon className="icon" /> <span>Benefício</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Servico" className="nav-link">
                            <LocalMallIcon className="icon" /> <span>Serviços</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <div className="user-info">
                    <span className="user-name">Usuário</span>
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
                                <li><Link to="/Cadastro">Cadastro</Link></li>
                                <li><Link to="/Login">Login</Link></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
