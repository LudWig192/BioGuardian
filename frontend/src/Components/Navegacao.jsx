import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocalMallIcon from '@mui/icons-material/LocalMall';

// Estilização CSS
import "../Style/Navbar.css";

const Navbar = () => {
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
                        <Link to="/Contato" className="nav-link">
                            <ContactMailIcon className="icon" /> <span>Contato</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Exames" className="nav-link">
                            <LocalMallIcon className="icon" /> <span>Exames</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Login" className="nav-link">
                            <LocalMallIcon className="icon" /> <span>Planos</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/HomeCliente" className="nav-link">
                            <LocalMallIcon className="icon" /> <span>HomeCliente</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Serviço" className="nav-link">
                            <LocalMallIcon className="icon" /> <span>Serviço</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <div className="user-avatar">
                    <img
                        src={require("../Imagens/Calvo-removebg-preview.png")} // Insira a imagem do usuário aqui
                        alt="User Avatar"
                        className="avatar"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
