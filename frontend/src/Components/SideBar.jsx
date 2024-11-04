import React from 'react';
import { AppBar, Toolbar, IconButton, Tooltip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from 'react-router-dom';
import '../Style/Navbar.css';

const Navbar = () => {
    return (
        <AppBar position="static" className="navbar">
            <Toolbar>
                <Tooltip title="Home" arrow>
                    <IconButton color="inherit" component={Link} to="/">
                        <HomeIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Sobre" arrow>
                    <IconButton color="inherit" component={Link} to="/about">
                        <InfoIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Contato" arrow>
                    <IconButton color="inherit" component={Link} to="/contact">
                        <ContactMailIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Planos" arrow>
                    <IconButton color="inherit" component={Link} to="/plans">
                        <LocalMallIcon />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
  