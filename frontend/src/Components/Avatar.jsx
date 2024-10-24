// src/Componentes/Avatar.jsx
import React, { useState } from 'react';
import '../Style/Avatar.css';
import Medico from '../Imagens/Calvo-removebg-preview.png';
import { FaBell } from "react-icons/fa";
import { TbMessageCircleFilled } from "react-icons/tb";
import { QRCodeSVG } from 'qrcode.react';

const Switch = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(prevState => !prevState);
    };

    return (
        <label className="avatar-switch">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChange} />
            <span className="avatar-slider"></span>
        </label>
    );
};

const SwitchWithIconsAndAvatar = ({ notificationCount, latestPatient }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showQRCode, setShowQRCode] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };

    const toggleQRCode = () => {
        setShowQRCode(prev => !prev);
    };

    const qrData = "https://example.com"; // Modifique conforme necessário

    return (
        <div className="avatar-container">
            <Switch />
            <div className="avatar-right-items">
                <div className="avatar-icons">
                    <TbMessageCircleFilled className="avatar-icon" onClick={toggleQRCode} />
                    <div className="avatar-notification-icon" onClick={toggleDropdown}>
                        <FaBell className="avatar-icon" />
                        {notificationCount > 0 && (
                            <span className="avatar-notification-count">{notificationCount}</span>
                        )}
                        {isDropdownOpen && latestPatient && (
                            <div className="avatar-dropdown">
                                <p><strong>Paciente adicionado:</strong></p>
                                <p><strong>Nome:</strong> {latestPatient.paciente}</p>
                                <p><strong>Tipo de Exame:</strong> {latestPatient.procedimentos}</p>
                                <p><strong>Data:</strong> {latestPatient.agendamento}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="avatar-avatar">
                    <img src={Medico} alt="Avatar" />
                </div>
                {showQRCode && (
                    <div className="avatar-qr-code">
                        <QRCodeSVG value={qrData} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SwitchWithIconsAndAvatar;
