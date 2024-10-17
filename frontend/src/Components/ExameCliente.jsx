import React from 'react';
import '../Style/ExameCliente.css';

const NewsCards = () => {
    const articles = [
        {
            date: "19 July, 2020",
            title: "We believe in great idea and deeds",
            description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's...",
            image: "path/to/image1.jpg" // substitua pelo caminho real da imagem
        },
        {
            date: "20 July, 2020",
            title: "We believe in great idea and deeds",
            description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's...",
            image: "path/to/image2.jpg" // substitua pelo caminho real da imagem
        },
        {
            date: "19 July, 2020",
            title: "We believe in great idea and deeds",
            description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's...",
            image: "path/to/image3.jpg" // substitua pelo caminho real da imagem
        }
    ];

    return (
        <div className="cardsExameCliente-container">
            <div className="cardsExameCliente-header">Follow the latest articles & news</div>
            <div className="cardsExameCliente">
                {articles.map((article, index) => (
                    <div key={index} className="cardsExameCliente-card">
                        <img src={article.image} alt="Article" className="cardsExameCliente-image" />
                        <div className="cardsExameCliente-content">
                            <span className="cardsExameCliente-date">{article.date}</span>
                            <div className="cardsExameCliente-title">{article.title}</div>
                            <span className="cardsExameCliente-text">{article.description}</span>
                            <div className="cardsExameCliente-button-container">
                                <a href="#" className="cardsExameCliente-link">READ MORE</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsCards;
