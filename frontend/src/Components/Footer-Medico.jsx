import React, { useState } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../Style/Footer-medico.css";

const Footer1 = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email enviado: ${email}`);
        setEmail("");
    };

    return (
        <footer className="footer-medico">
            <div className="footer-content-medico">
                <div className="footer-column-medico">
                    <h3 className="footer-title-medico">Contato</h3>
                    <div className="footer-text-medico">Comprometidos com a saúde e bem-estar, oferecemos cuidados médicos de excelência.</div>
                    <div className="emergency-contact-medico">
                        <div className="contact-item-emergency-medico">Emergência: (11) 99999-0000</div>
                        <div className="contact-item-service-medico">Serviço ao Cliente: (11) 88888-0000</div>
                        <div className="contact-item-doctor-medico">Médico Disponível: (11) 77777-0000</div>
                    </div>
                </div>
                <div className="footer-column-medico">
                    <h3 className="footer-title-medico">Nossos Serviços</h3>
                    <div className="footer-text-medico">Consultas, exames e tratamentos personalizados para atender suas necessidades.</div>
                </div>
                <div className="footer-column-medico">
                    <h3 className="footer-title-medico">Informações Úteis</h3>
                    <div className="footer-info-medico">
                        <div className="footer-text-medico">Home</div>
                        <div className="footer-text-medico">Agenda</div>
                        <div className="footer-text-medico">Resultado de Exames</div>
                    </div>
                </div>
                <div className="footer-column-email-medico">
                    <h3 className="footer-title-medico">Contato</h3>
                    <form onSubmit={handleSubmit} className="footer-form-medico">
                        <input
                            type="email"
                            placeholder="Seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="footer-input-email-medico"
                        />
                        <button type="submit" className="footer-submit-button-medico">Enviar</button>
                    </form>
                    <div className="footer-icons-medico">
                        <a href="https://www.facebook.com" className="facebook-medico" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=seu_numero" className="whatsapp-medico" target="_blank" rel="noopener noreferrer">
                            <WhatsAppIcon />
                        </a>
                        <a href="https://www.instagram.com" className="instagram-medico" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon />
                        </a>
                        <a href="https://www.linkedin.com" className="linkedin-medico" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-medico footer-text-medico">
                &copy; 2024 Bioguardian. Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer1;
