import React from 'react';
import '../Style/UnidadeBene.css';
import Institito from "../Imagens/instituto.jpeg";
import Santa from "../Imagens/santa_casa.jpeg";
import Israelita from "../Imagens/einstein.jpeg";

const CardComponent = () => {
    return (
        <div className="card-container2">
            <div className="card">
                <div className="card-img">
                    <img src={Institito} alt="Imagem de Exemplo 1" />
                </div>
                <div className="card-text">
                    <p className="card-title">Instituto Central</p>
                    <p className="card-details">Inaugurado em abril de 1944, o Instituto Central deu origem ao HCFMUSP. Pioneiro em procedimentos médico-hospitalares, sua estrutura concentra a maior parte das especialidades médicas e multiprofissionais.</p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                    <img src={Santa} alt="Imagem de Exemplo 2" />
                </div>
                <div className="card-text">
                    <p className="card-title">Hospital Santa Casa</p>
                    <p className="card-details">Fundada há 460 anos, a Irmandade da Santa Casa de Misericórdia de São Paulo é uma instituição filantrópica, privada e laica, considerada um dos mais importantes centros de referência hospitalar do Brasil.</p>
                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src={Israelita} alt="Imagem de Exemplo 3" />
                </div>
                <div className="card-text">
                    <p className="card-title">Hospital israelita albert einstein</p>
                    <p className="card-details">O conjunto de soluções de engenharia clínica e de recursos digitais possibilita a realização de cirurgias minimamente invasivas guiadas por imagem, combinadas ou não com procedimentos convencionais.</p>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
