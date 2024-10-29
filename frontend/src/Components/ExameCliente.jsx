import React from 'react';
import '../Style/ExameCliente.css';
import Hemograma from "../Imagens/Hemograma.png";
import Glicemia from "../Imagens/GLICOSE.png";
import Colesterol from "../Imagens/Colesterol.jpeg";
import pessoa1 from "../Imagens/Bom.png";
import pessoa2 from "../Imagens/Bom.png";
import pessoa3 from "../Imagens/Bom.png";

const NewsCards = () => {
    const articles = [
        {
            date: "19 Novembro 2024",
            title: "Resultados de Hemograma",
            description: "O hemograma é um exame essencial que fornece informações sobre a sua saúde geral.",
            image: Hemograma,
            person: { name: "João Silva", photo: pessoa1 },
        },
        {
            date: "24 Novembro 2024",
            title: "Exame de Glicemia",
            description: "O exame de glicemia é fundamental para monitorar os níveis de açúcar no sangue.",
            image: Glicemia,
            person: { name: "Maria Oliveira", photo: pessoa2 },
        },
        {
            date: "21 Dezembro 2024",
            title: "Colesterol",
            description: "Os resultados do exame de colesterol ajudam a avaliar o risco de doenças cardíacas.",
            image: Colesterol,
            person: { name: "Carlos Santos", photo: pessoa3 },
        }
    ];

    return (
        <div className="cardsExameCliente-container">
            <div className="cardsExameCliente-header">Acompanhe os resultados de exames</div>
            <div className="cardsExameCliente">
                {articles.map((article, index) => (
                    <div key={index} className="cardsExameCliente-card">
                        <img src={article.image} alt="Article" className="cardsExameCliente-image" />
                        <div className="cardsExameCliente-content">
                            <div className="person-examecliente-info">
                                <div className="avatarExameCliente">
                                    {article.person.name.charAt(0)}{article.person.name.charAt(article.person.name.indexOf(' ') + 1)} {/* Exibe as iniciais do nome */}
                                </div>
                                <span className="person-examecliente-name">{article.person.name}</span>
                            </div>
                            <span className="cardsExameCliente-date">{article.date}</span>
                            <div className="cardsExameCliente-title">{article.title}</div>
                            <span className="cardsExameCliente-text">{article.description}</span>
                            <div className="cardsExameCliente-button-container">
                                <a href="#" className="cardsExameCliente-link">Acessar</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsCards;
