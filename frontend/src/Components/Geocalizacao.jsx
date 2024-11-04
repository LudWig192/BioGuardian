import React, { useEffect, useState } from 'react';
import '../Style/Geocalizacao.css';
import { FaSmile } from 'react-icons/fa';

const SatisfactionRate = () => {
    const satisfactionRate = 85;
    const description = "A taxa de satisfação dos funcionários reflete o clima organizacional e o engajamento da equipe. Uma taxa alta é um sinal positivo para o hospital.";

    const [rate, setRate] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRate((prevRate) => {
                if (prevRate < satisfactionRate) {
                    return prevRate + 1;
                } else {
                    clearInterval(interval);
                    return satisfactionRate;
                }
            });
        }, 20);
        return () => clearInterval(interval);
    }, [satisfactionRate]);

    return (
        <div className="satisfaction-rate">
            <h3 className="satisfaction-title">Taxa de Satisfação dos Funcionários</h3>
            <div className="rate-container">
                <div className="rate-circle">
                    <div className="rate-fill" style={{ '--rate': rate + '%' }}></div>
                    <span className="rate-percentage">{rate}%</span>
                </div>
                <div className="rate-icon">
                    <FaSmile size={60} color="#54a3f0" />
                </div>
            </div>
            <p className="rate-description">{description}</p>
            <div className="rate-bar">
                <div className="filled-bar" style={{ width: `${satisfactionRate}%` }}></div>
            </div>
        </div>
    );
};

export default SatisfactionRate;
