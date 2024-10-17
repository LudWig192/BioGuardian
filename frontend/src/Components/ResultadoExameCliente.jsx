import React from 'react';
import '../Style/ResultadoExameCliente.css';

const ResultadoExameCard = ({ image, category, lessons, rating, title, author, price, oldPrice }) => {
    return (
        <div className="resultadoexame-card">
            <img src={image} alt={title} className="resultadoexame-image" />
            <div className="resultadoexame-content">
                <span className={`resultadoexame-category ${category.toLowerCase().replace(" & ", "-").replace(" ", "-")}`}>
                    {category}
                </span>
                <div className="resultadoexame-info">
                    <span className="lessons">{lessons} Lesson</span>
                    <span className="rating">⭐ {rating}</span>
                </div>
                <div className="resultadoexame-title">{title}</div>
                <div className="resultadoexame-author">{author}</div>
                <div className="resultadoexame-pricing">
                    <span className="resultadoexame-price">${price}</span>
                    {oldPrice && <span className="resultadoexame-old-price">${oldPrice}</span>}
                </div>
                <button className="resultadoexame-details-button">Know Details ➔</button>
            </div>
        </div>
    );
};

const ResultadoExameSection = () => {
    return (
        <div className="resultadoexame-section">
            <div className="resultadoexame-nav">
                <div className="resultadoexame-title-heading">Choose The Right Online Resultado Exame For You</div>
                <div className="resultadoexame-description">You don't have to struggle alone, you've got our assistance and help.</div>
                <div className="resultadoexame-categories">
                    <div className="resultadoexame-category-item">See All</div>
                    <div className="resultadoexame-category-item">Art & Design</div>
                    <div className="resultadoexame-category-item">Development</div>
                    <div className="resultadoexame-category-item">Business</div>
                    <div className="resultadoexame-category-item">Marketing</div>
                    <div className="resultadoexame-category-item">UX Design</div>
                </div>
            </div>
            <div className="resultadoexame-list">
                <ResultadoExameCard
                    image="https://via.placeholder.com/300x150"
                    category="Art & Design"
                    lessons="43"
                    rating="4.5"
                    title="Become a product Manager learn the skills & job."
                    author="Jim Séchan"
                    price="32.00"
                    oldPrice="60.00"
                />
                <ResultadoExameCard
                    image="https://via.placeholder.com/300x150"
                    category="Art & Design"
                    lessons="72"
                    rating="4.6"
                    title="Fundamentals of music theory Learn new"
                    author="Barry Tone"
                    price="32.00"
                    oldPrice="68.00"
                />
                <ResultadoExameCard
                    image="https://via.placeholder.com/300x150"
                    category="Development"
                    lessons="14"
                    rating="4.3"
                    title="Strategy law and organization Foundation"
                    author="Elon Gated"
                    price="36.00"
                    oldPrice="55.00"
                />
            </div>
        </div>
    );
};

export default ResultadoExameSection;
