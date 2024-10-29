import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import '../Style/Resultados.css';

const ResultPage = () => {
    const patientsData = [
        { candidateName: 'João Silva', examDate: '2024-08-22', location: 'Sala 101, Edifício A', scores: { general: 85, category1: 90, category2: 80 }, contactEmail: 'bioguardian@exame.com', phone: '(11) 1234-5678' },
        { candidateName: 'Maria Oliveira', examDate: '2024-08-23', location: 'Sala 202, Edifício A', scores: { general: 78, category1: 82, category2: 74 }, contactEmail: 'hospitalabc@exame.com', phone: '(14) 4438-5599' },
        { candidateName: 'Pedro Santos', examDate: '2024-07-24', location: 'Sala 303, Edifício G', scores: { general: 90, category1: 88, category2: 92 }, contactEmail: 'hospitalbrasil@exame.com', phone: '(11) 2127-6666' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < patientsData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const examData = patientsData[currentIndex];

    return (
        <div className="result-page-container">
            <header className="result-page-header">
                <h1>Resultados do Exame</h1>
            </header>
            <main className="result-page-content">
                <div className="result-transition-wrapper">
                    <TransitionGroup>
                        <CSSTransition key={currentIndex} timeout={300} classNames="fade">
                            <div className="result-info">
                                <section className="candidate-info">
                                    <h2>Informações do Candidato</h2>
                                    <p><strong>Nome:</strong> {examData.candidateName}</p>
                                    <p><strong>Data do Exame:</strong> {examData.examDate}</p>
                                    <p><strong>Local:</strong> {examData.location}</p>
                                </section>

                                <section className="exam-results">
                                    <h2>Resultados</h2>
                                    <ul>
                                        <li><strong>Pontuação Geral:</strong> {examData.scores.general}</li>
                                        <li><strong>Categoria 1:</strong> {examData.scores.category1}</li>
                                        <li><strong>Categoria 2:</strong> {examData.scores.category2}</li>
                                    </ul>
                                </section>

                                <section className="contact-support">
                                    <h2>Contato</h2>
                                    <p><FaEnvelope /> <strong>Email:</strong> <a href={`mailto:${examData.contactEmail}`}>{examData.contactEmail}</a></p>
                                    <p><FaPhone /> <strong>Telefone:</strong> {examData.phone}</p>
                                </section>

                                <div className="navigation-buttons">
                                    <button onClick={handlePrev} disabled={currentIndex === 0}>◀ Anterior</button>
                                    <button onClick={handleNext} disabled={currentIndex === patientsData.length - 1}>Próximo ▶</button>
                                </div>

                                <div className="pagination-info">
                                    <p>{currentIndex + 1} de {patientsData.length}</p>
                                </div>
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </main>
            <footer className="result-page-footer">
                <p>Os resultados apresentados são confidenciais e destinados apenas ao candidato.</p>
            </footer>
        </div>
    );
};

export default ResultPage;
