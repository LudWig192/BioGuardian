import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MenuIcon from '@mui/icons-material/Menu';

import "../Style/Navbar.css";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        console.log('Dropdown aberto:', !isDropdownOpen); 
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-menu') && !event.target.closest('.enter-button')) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'responsive' : ''}`}>
            <div className="navbar-left">
                <Link to="/">
                    <img src={require("../Imagens/logo-removebg-preview-removebg-preview.png")} alt="Logo" className="logo" />
                </Link>
            </div>

            <div className="navbar-center">
                <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/Beneficio" className="nav-link">Benefício</Link></li>
                    <li><Link to="/Servico" className="nav-link">Serviço</Link></li>
                </ul>
            </div>

            <div className="navbar-right">
                <div className="navbar-button" onClick={toggleDropdown}>
                    <button className="enter-button">
                        Entrar <ArrowDropDownIcon />
                    </button>
                </div>
                {isDropdownOpen && (
                    <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                        <Link to="/Login" className="dropdown-item">
                            <LoginIcon className="dropdown-icon" /> Login
                        </Link>
                        <Link to="/cadastro" className="dropdown-item">
                            <PersonAddIcon className="dropdown-icon" /> Cadastrar
                        </Link>
                    </div>
                )}
            </div>

            <div className="menu-icon" onClick={toggleMobileMenu}>
                <MenuIcon />
            </div>
        </nav>
    );
};

export default Navbar;
