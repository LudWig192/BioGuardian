import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import "../Style/Navbar.css";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'responsive' : ''}`}>
            <div className="navbar-left">
                <Link to="/HomeCliente">
                    <img src={require("../Imagens/logo-removebg-preview-removebg-preview.png")} alt="Logo" className="logo" />
                </Link>
            </div>

            <div className="navbar-center">
                <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
                    <li><Link to="/HomeCliente" className="nav-link">Home</Link></li>
                    <li><Link to="/Exames" className="nav-link">Exames</Link></li>
                    <li><Link to="/Unidades" className="nav-link">Unidades</Link></li>
                    <li><Link to="/Agendamento" className="nav-link">Agendamentos</Link></li>
                    <li><Link to="/Contato" className="nav-link">Contato</Link></li>
                </ul>
            </div>

            <div className="navbar-right">
                <IconButton onClick={handleAvatarClick}>
                    <span className="avatar-letter">A</span>
                    <ArrowDropDownIcon />
                </IconButton>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} component={Link} to="/perfil">
                        <AccountCircleIcon className="dropdown-icon" /> Ver Perfil
                    </MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/login">
                        <LoginIcon className="dropdown-icon" /> Sair
                    </MenuItem>
                </Menu>
            </div>

            <div className="menu-icon" onClick={toggleMobileMenu}>
                <MenuIcon />
            </div>
        </nav>
    );
};

export default Navbar;
