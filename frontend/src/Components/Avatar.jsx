// src/Componentes/Avatar.jsx
import React, { useState } from 'react';
import '../Style/Avatar.css';
import Medico from '../Imagens/Calvo-removebg-preview.png';
import { FaBell } from "react-icons/fa";
import { TbMessageCircleFilled } from "react-icons/tb";
import { TfiAgenda } from "react-icons/tfi";
import { QRCodeSVG } from 'qrcode.react'; // Importa o QRCodeSVG

// Componente Switch
const Switch = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(prevState => !prevState);
    };

    return (
        <label className="switch">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
            />
            <span className="slider"></span>
        </label>
    );
};

// Componente Principal
const SwitchWithIconsAndAvatar = ({ notificationCount, latestPatient }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showQRCode, setShowQRCode] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };

    const toggleQRCode = () => {
        setShowQRCode(prev => !prev);
    };

    // Dados para o QR Code
    const qrData = "https://example.com"; // Modifique conforme necessário

    return (
        <div className="container">
            <Switch />
            <div className="right-items">
                <div className="icons">
                    <TfiAgenda className="icon" />
                    <TbMessageCircleFilled className="icon" onClick={toggleQRCode} />
                    <div className="notification-icon" onClick={toggleDropdown}>
                        <FaBell className="icon" />
                        {notificationCount > 0 && (
                            <span className="notification-count">{notificationCount}</span>
                        )}
                        {isDropdownOpen && latestPatient && (
                            <div className="dropdown">
                                <p><strong>Paciente adicionado:</strong></p>
                                <p><strong>Nome:</strong> {latestPatient.paciente}</p>
                                <p><strong>Tipo de Exame:</strong> {latestPatient.procedimentos}</p>
                                <p><strong>Data:</strong> {latestPatient.agendamento}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="avatar">
                    <img src={Medico} alt="Avatar" />
                </div>
                {showQRCode && (
                    <div className="qr-code">
                        <QRCodeSVG value={qrData} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SwitchWithIconsAndAvatar;