import React, { useState } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../Style/Footer.css";

const Footer1 = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email enviado: ${email}`);
        setEmail("");
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h3>Contato</h3>
                    <div className="footer-text">Comprometidos com a saúde e bem-estar, oferecemos cuidados médicos de excelência.</div>
                    <div className="emergency-contact">
                        <div className="contact-item emergency">Emergência: (11) 99999-0000</div>
                        <div className="contact-item service">Serviço ao Cliente: (11) 88888-0000</div>
                        <div className="contact-item doctor">Médico Disponível: (11) 77777-0000</div>
                    </div>
                </div>
                <div className="footer-column">
                    <h3>Nossos Serviços</h3>
                    <div className="footer-text">Consultas, exames e tratamentos personalizados para atender suas necessidades.</div>
                </div>
                <div className="footer-column">
                    <h3>Informações Úteis</h3>
                    <div className="footer-info">
                    <div className="footer-text">Salario</div>
                        <div className="footer-text">Funcionarios</div>
                        <div className="footer-text">Registro</div>
                        <div className="footer-text">Clientes</div>
                        <div className="footer-text">Administrador</div>


                    </div>
                </div>
                <div className="footer-column email1">
                    <h3>Contato</h3>
                    <form onSubmit={handleSubmit} className="footer-form">
                        <input
                            type="email"
                            placeholder="Seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Enviar</button>
                    </form>
                    <div className="footer-icons">
                        <a href="https://www.facebook.com" className="facebook" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=seu_numero" className="whatsapp" target="_blank" rel="noopener noreferrer">
                            <WhatsAppIcon />
                        </a>
                        <a href="https://www.instagram.com" className="instagram" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon />
                        </a>
                        <a href="https://www.linkedin.com" className="linkedin" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom footer-text">
                &copy; 2024 Bioguardian. Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer1;
