import React from 'react';
import '../Style/ResultadoExameCliente.css';
import Hemograma from "../Imagens/Hemograma_Completo.webp";
import ExameUrina from "../Imagens/Exame_Urina2.jpg";
import ExamePediatrico from "../Imagens/Exame_Pediatrico2.jpeg";
import pessoa1 from "../Imagens/Bom.png";
import pessoa2 from "../Imagens/Bom.png";
import pessoa3 from "../Imagens/Bom.png";

const NewsCards = () => {
    const articles = [
        {
            date: "24 Novembro 2024",
            title: "Hemograma Completo",
            description: "O hemograma completo avalia componentes do sangue, como glóbulos vermelhos e brancos. É essencial para detectar anemia, infecções e problemas de coagulação, sendo recomendado periodicamente para a saúde geral.",
            image: Hemograma,
            person: { name: "João Silva", photo: pessoa1 },
        },
        {
            date: "2 Novembro 2024",
            title: "Exame de Urina",
            description: "O exame de urina é um teste que identifica infecções urinárias e problemas renais. Ele revela substâncias anormais que podem indicar condições subjacentes, sendo comum em check-ups de saúde.",
            image: ExameUrina,
            person: { name: "Maria Oliveira", photo: pessoa2 },
        },
        {
            date: "10 Dezembro 2024",
            title: "Exame Pediátrico",
            description: "Os exames pediátricos monitoram o desenvolvimento e a saúde das crianças, avaliando crescimento e função imunológica. Exames regulares ajudam a detectar doenças precocemente e garantir a saúde infantil.",
            image: ExamePediatrico, // Imagem do exame pediátrico
            person: { name: "Carlos Santos", photo: pessoa3 },
        },
    ];

    return (
        <div className="cardsResultadoCliente-container">
            <div className="cardsResultadoCliente-header">Exames Marcados pelo Medico</div>
            <div className="cardsResultadoCliente">
                {articles.map((article, index) => (
                    <div key={index} className="cardsResultadoCliente-card">
                        <img src={article.image} alt="Article" className="cardsResultadoCliente-image" />
                        <div className="cardsResultadoCliente-content">
                            <div className="person-resultadoCliente-info">
                                <div className="avatarResultadoCliente">
                                    {article.person.name.charAt(0)}{article.person.name.charAt(article.person.name.indexOf(' ') + 1)} {/* Exibe as iniciais do nome */}
                                </div>
                                <span className="person-resultadoCliente-name">{article.person.name}</span>
                            </div>
                            <span className="cardsResultadoCliente-date">{article.date}</span>
                            <div className="cardsResultadoCliente-title">{article.title}</div>
                            <span className="cardsResultadoCliente-text">{article.description}</span>
                            <div className="cardsResultadoCliente-button-container">
                                <a href="#" className="cardsResultadoCliente-link">Acessar</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsCards;
