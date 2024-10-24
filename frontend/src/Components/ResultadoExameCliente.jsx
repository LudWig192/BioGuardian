import React from 'react';
import '../Style/ResultadoExameCliente.css'; // Verifique se o caminho está correto
import Hemograma from "../Imagens/Hemograma.png";
import Glicemia from "../Imagens/GLICOSE.png";
import Colesterol from "../Imagens/Colesterol.jpeg";
import pessoa1 from "../Imagens/Bom.png";
import pessoa2 from "../Imagens/Bom.png";
import pessoa3 from "../Imagens/Bom.png";

const NewsCards = () => {
    const articles = [
        {
            date: "19 Julho, 2020",
            title: "Resultados de Hemograma",
            description: "O hemograma é um resultado essencial que fornece informações sobre a sua saúde geral.",
            image: Hemograma,
            person: { name: "João Silva", photo: pessoa1 },
        },
        {
            date: "20 Julho, 2020",
            title: "Resultado de Glicemia",
            description: "O resultado de glicemia é fundamental para monitorar os níveis de açúcar no sangue.",
            image: Glicemia,
            person: { name: "Maria Oliveira", photo: pessoa2 },
        },
        {
            date: "21 Julho, 2020",
            title: "Colesterol",
            description: "Os resultados do exame de colesterol ajudam a avaliar o risco de doenças cardíacas.",
            image: Colesterol,
            person: { name: "Carlos Santos", photo: pessoa3 },
        }
    ];

    return (
        <div className="cardsResultadoCliente-container">
            <div className="cardsResultadoCliente-header">Acompanhe os resultados de exames</div>
            <div className="cardsResultadoCliente">
                {articles.map((article, index) => (
                    <div key={index} className="cardsResultadoCliente-card">
                        <img src={article.image} alt="Article" className="cardsResultadoCliente-image" />
                        <div className="cardsResultadoCliente-content">
                            <div className="person-resultadoCliente-info">
                                <div className="person-resultadoCliente-ball">
                                    <img src={article.person.photo} alt={article.person.name} className="person-photo" />
                                </div>
                                <span className="person-resultadoCliente-name">{article.person.name}</span>
                            </div>
                            <span className="cardsResultadoCliente-date">{article.date}</span>
                            <div className="cardsResultadoCliente-title">{article.title}</div>
                            <span className="cardsResultadoCliente-text">{article.description}</span>
                            <div className="cardsResultadoCliente-button-container">
                                <a href="#" className="cardsResultadoCliente-link">LEIA MAIS</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsCards;
