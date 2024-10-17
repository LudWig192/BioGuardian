import React from 'react';
import '../Style/ExameHome.css';
import ExameSangue from "../Imagens/Exame_de_Sangue.png"; // Substitua com as imagens corretas
import ExameUrina from "../Imagens/Exame_de_Urina.jpg";
import ExameImagem from "../Imagens/Exame_de_Imagem.jpeg"




const CareDeliveryModels = () => {
  return (
    <div className="care-delivery-container exames-Home">
      <div className="banner-exame-home">
        <h6 className="subtitle-exame">Como funciona nossos Exames?</h6>
        <h6 className="main-title-exame">Precisão e Agilidade nos Resultados dos Exames</h6>
      </div>

      <div className="cards-container-ExameHome">
        <div className="card-exame-home">
          <img src={ExameSangue} alt="Exame de Sangue" className="card-img-exame" />
          <div className="card-text-overlay-exame">
            <h6>Exame de Sangue</h6>
            <div className="card-description-exame">
              Realizamos análises detalhadas de sangue com resultados rápidos e precisos, auxiliando no diagnóstico de várias condições de saúde.
            </div>
          </div>
        </div>

        <div className="card-exame-home">
          <img src={ExameUrina} alt="Exame de Urina" className="card-img-exame" />
          <div className="card-text-overlay-exame">
            <h6>Exame de Urina</h6>
            <div className="card-description-exame">
              O exame de urina fornece informações valiosas sobre sua saúde com resultados confiáveis e uma entrega rápida.
            </div>
          </div>
        </div>

        <div className="card-exame-home">
          <img src={ExameImagem} alt="Exame de Imagem" className="card-img-exame" />
          <div className="card-text-overlay-exame">
            <h6>Exame de Imagem</h6>
            <div className="card-description-exame">
              Oferecemos exames de imagem de alta qualidade que garantem diagnósticos precisos e resultados em tempo ágil.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareDeliveryModels;
