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
        <div className="satisfaction-rate-satisfacao">
            <h3 className="satisfaction-title-satisfacao">Taxa de Satisfação dos Funcionários</h3>
            <div className="rate-container-satisfacao">
                <div className="rate-circle-satisfacao">
                    <div className="rate-fill-satisfacao" style={{ '--rate': rate + '%' }}></div>
                    <span className="rate-percentage-satisfacao">{rate}%</span>
                </div>
                <div className="rate-icon-satisfacao">
                    <FaSmile size={60} color="#54a3f0" />
                </div>
            </div>
            <p className="rate-description-satisfacao">{description}</p>
            <div className="rate-bar-satisfacao">
                <div className="filled-bar-satisfacao" style={{ width: `${satisfactionRate}%` }}></div>
            </div>
        </div>
    );
};

export default SatisfactionRate;
