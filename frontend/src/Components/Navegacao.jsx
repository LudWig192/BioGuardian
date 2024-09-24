import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//IMPORTS
import Logo from "../Imagens/logo-removebg-preview-removebg-preview.png"

//ICONES
import {
  faHome,
  faInfoCircle,
  faSignOutAlt,
  faUser,
  faTools,
  faEnvelope,
  faBlog,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

//Estilização CSS
import "../Style/Navbar.css";


const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getAvatarUrl = () => {
    const placeholder =
      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
    return placeholder;
  };

  const handleUserClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLoginLogout = () => {
    setIsAuthenticated(!isAuthenticated);
    setShowMenu(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        {/* Botão do menu de hambúrguer para mobile */}
        <button
          className="hamburger-menu"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Menu de navegação (exibido dependendo da largura da tela) */}
        <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <img src={Logo} className="imagem"/>
          <Link to="/" className="nav-item" title="Home">
            <FontAwesomeIcon icon={faHome} className="icon" /> Home
          </Link>
          <Link to="/HomeMedico" className="nav-item" title="About">
            <FontAwesomeIcon icon={faInfoCircle} className="icon" /> About
          </Link>
          <Link to="/services" className="nav-item" title="Services">
            <FontAwesomeIcon icon={faTools} className="icon" /> Services
          </Link>
          <Link to="/contact" className="nav-item" title="Contact">
            <FontAwesomeIcon icon={faEnvelope} className="icon" /> Contact
          </Link>
          <Link to="/blog" className="nav-item" title="Blog">
            <FontAwesomeIcon icon={faBlog} className="icon" /> Blog
          </Link>
        </div>
      </div>

      {/* Seção de usuário */}
      <div className="user-section">
        <img
          src={getAvatarUrl()}
          alt="User Avatar"
          className="user-image"
          onClick={handleUserClick}
          aria-expanded={showMenu}
          aria-haspopup="true"
        />
        {showMenu && (
          <div className="user-menu" role="menu">
            <button onClick={handleLoginLogout} className="menu-button">
              {isAuthenticated ? (
                <>
                  <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faUser} /> Login
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
