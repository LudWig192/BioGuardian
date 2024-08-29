import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Medico from "../Imagens/Medico_Exame.jpg";
import '../Style/Exames.css';

const Exame = ({ nome, descricao, onClick }) => {
  return (
    <div className="exame-card" onClick={onClick}>
      <div className="exame-conteudo">
        <h2>{nome}</h2>
        <p>{descricao}</p>
      </div>
    </div>
  );
}

const Exames = () => {
  const [selectedExame, setSelectedExame] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const examesData = [
    { 
      id: 1, 
      nome: 'Exame de Coração', 
      descricao: 'O exame de coração pode incluir ECG (Eletrocardiograma) para registrar a atividade elétrica do coração, Teste de Esforço para avaliar a resposta do coração ao exercício físico, e Monitoramento Holter para monitorar a atividade elétrica do coração por um período prolongado.', 
      horario: '10:00 AM', 
      dia: 'Segunda-feira',
      recomendacoes: 'Evite comer grandes refeições 2 horas antes do exame. Evite bebidas alcoólicas e cafeína nas 24 horas anteriores.'
    },
    { 
      id: 2, 
      nome: 'Exame de Cérebro', 
      descricao: 'Este exame pode envolver técnicas como a Tomografia Computadorizada (TC) ou Ressonância Magnética (RM) para avaliar o cérebro e identificar condições como tumores, hemorragias ou outras anomalias.', 
      horario: '11:00 AM', 
      dia: 'Terça-feira',
      recomendacoes: 'Certifique-se de estar em jejum por pelo menos 4 horas antes do exame. Evite consumir bebidas alcoólicas e cafeína nas 24 horas anteriores.'
    },
    { 
      id: 3, 
      nome: 'Exame de Ressonância Magnética', 
      descricao: 'A Ressonância Magnética usa um campo magnético e ondas de rádio para criar imagens detalhadas dos órgãos e tecidos internos, útil para detectar e monitorar uma variedade de condições médicas.', 
      horario: '01:00 PM', 
      dia: 'Quarta-feira',
      recomendacoes: 'Use roupas leves e evite usar metais. Informe ao técnico se você tem algum implante metálico.'
    },
    { 
      id: 4, 
      nome: 'Exame de Alergia', 
      descricao: 'O exame de alergia inclui testes para identificar reações alérgicas a substâncias específicas, que podem ser feitos através de testes cutâneos ou exames de sangue.', 
      horario: '02:00 PM', 
      dia: 'Quinta-feira',
      recomendacoes: 'Evite usar medicamentos antihistamínicos por pelo menos 48 horas antes do exame. Informe o seu médico sobre qualquer medicamento que esteja tomando.'
    },
    { 
      id: 5, 
      nome: 'Exame de Pezinho', 
      descricao: 'Realizado em recém-nascidos, o exame de pezinho detecta condições metabólicas e genéticas raras através da análise de uma amostra de sangue do calcanhar do bebê.', 
      horario: '09:00 AM', 
      dia: 'Sexta-feira',
      recomendacoes: 'Não há preparação especial necessária para este exame.'
    },
    { 
      id: 6, 
      nome: 'Exame de Raio-X', 
      descricao: 'O exame de raio-x utiliza radiação para criar imagens dos ossos e órgãos internos, ajudando a diagnosticar fraturas, infecções e outras condições.', 
      horario: '03:00 PM', 
      dia: 'Segunda-feira',
      recomendacoes: 'Informe ao técnico se você está grávida ou se pode estar grávida. Use roupas leves e sem metais.'
    },
    { 
      id: 7, 
      nome: 'Exame de Visão', 
      descricao: 'Este exame avalia a acuidade visual e a saúde ocular, podendo incluir testes para medir a capacidade de enxergar em diferentes distâncias e detectar problemas como miopia, hipermetropia ou astigmatismo.', 
      horario: '10:00 AM', 
      dia: 'Terça-feira',
      recomendacoes: 'Não há preparação especial necessária para este exame. Leve seus óculos ou lentes de contato, se usar.'
    },
    { 
      id: 8, 
      nome: 'Exame de Ultrassom', 
      descricao: 'O ultrassom utiliza ondas sonoras de alta frequência para criar imagens dos órgãos e estruturas internas, sendo usado para monitorar a saúde fetal durante a gravidez e examinar órgãos internos.', 
      horario: '12:00 PM', 
      dia: 'Quarta-feira',
      recomendacoes: 'Beba bastante água antes do exame para encher a bexiga, se necessário.'
    },
    { 
      id: 9, 
      nome: 'Exame de Sangue', 
      descricao: 'O exame de sangue analisa amostras de sangue para detectar uma variedade de condições e doenças, como anemia, infecções, e alterações nos níveis de colesterol e glicose.', 
      horario: '04:00 PM', 
      dia: 'Quinta-feira',
      recomendacoes: 'Jejum de 8 horas pode ser necessário, dependendo do tipo de exame. Verifique com seu médico.'
    },
  ];

  const filteredExames = examesData.filter(exame =>
    exame.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (exame) => {
    setSelectedExame(exame);
  };

  const handleCloseModal = () => {
    setSelectedExame(null);
  };

  return (
    <div className="exames-page">
      <div className="search-container">
        <img src={Medico} alt="Imagem do Médico" className="search-image" />
        <div className="search-bar-container">
          <div className="search-bar-label">Pesquise um exame:</div>
          <input
            type="text"
            placeholder="Digite o exame..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="cards-container">
        {filteredExames.length > 0 ? (
          filteredExames.map(exame => (
            <Exame
              key={exame.id}
              nome={exame.nome}
              descricao={exame.descricao}
              onClick={() => handleCardClick(exame)}
            />
          ))
        ) : (
          <div className="no-results-message">Nenhum exame encontrado.</div>
        )}
      </div>


      {selectedExame && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-icon-container">
              <i className="bi bi-calendar-check"></i>
            </div>
            <h2>Detalhes do Exame</h2>
            <p>Você selecionou o exame de <strong>{selectedExame.nome}</strong></p>
            <p><strong>Horário:</strong> {selectedExame.horario}</p>
            <p><strong>Dia:</strong> {selectedExame.dia}</p>
            <p><strong>Recomendações:</strong> {selectedExame.recomendacoes}</p>
            <div className="modal-buttons">
              <button className="close-modal-btn" onClick={handleCloseModal}>Fechar</button>
            </div>
          </div>
          <div className="modal-overlay-background" onClick={handleCloseModal}></div>
        </div>
      )}
    </div>
  );
}

export default Exames;