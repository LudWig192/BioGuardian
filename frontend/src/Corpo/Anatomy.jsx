// BIBLIOTECAS
import React, { useState } from 'react';
import 'sweetalert2/dist/sweetalert2.min.css';
import { BodyComponent } from 'reactjs-human-body';

// COMPONENTES
import TabelaProblemas from '../Components/TabelaCorpo';
import showAlertWithCountdown from '../Components/Alert';

// ESTILIZAÇÃO
import '../Style/Anatomia.css';


const problemasPorParte = {
  head: [
    { cor: 'red', descricao: 'Dor de cabeça Grave' },
    { cor: 'yellow', descricao: 'Dor de cabeça Leve' },
    { cor: 'green', descricao: 'Dor de cabeça Moderado' }
  ],
  leftArm: [
    { cor: 'red', descricao: 'Fratura no braço esquerdo Grave' },
    { cor: 'yellow', descricao: 'Fratura no braço esquerdo Leve' },
    { cor: 'green', descricao: 'Fratura no braço esquerdo Moderado' }
  ],
  rightArm: [
    { cor: 'red', descricao: 'Fratura no braço direito Grave' },
    { cor: 'yellow', descricao: 'Fratura no braço direito Leve' },
    { cor: 'green', descricao: 'Fratura no braço direito Moderado' }
  ],
  leftLeg: [
    { cor: 'red', descricao: 'Entorse no tornozelo esquerdo Grave' },
    { cor: 'yellow', descricao: 'Entorse no tornozelo esquerdo Leve' },
    { cor: 'green', descricao: 'Entorse no tornozelo esquerdo Moderado' }
  ],
  rightLeg: [
    { cor: 'red', descricao: 'Entorse no tornozelo direito Grave' },
    { cor: 'yellow', descricao: 'Entorse no tornozelo direito Leve' },
    { cor: 'green', descricao: 'Entorse no tornozelo direito Moderado' }
  ],
  torso: [
    { cor: 'red', descricao: 'Dor nas costas Grave' },
    { cor: 'yellow', descricao: 'Dor nas costas Leve' },
    { cor: 'green', descricao: 'Dor nas costas Moderado' }
  ],
  neck: [
    { cor: 'red', descricao: 'Dor no pescoço Grave' },
    { cor: 'yellow', descricao: 'Dor no pescoço Leve' },
    { cor: 'green', descricao: 'Dor no pescoço Moderado' }
  ],
  rightFoot: [
    { cor: 'red', descricao: 'Lesão no pé direito Grave' },
    { cor: 'yellow', descricao: 'Lesão no pé direito Leve' },
    { cor: 'green', descricao: 'Lesão no pé direito Moderado' }
  ],
  leftFoot: [
    { cor: 'red', descricao: 'Lesão no pé esquerdo Grave' },
    { cor: 'yellow', descricao: 'Lesão no pé esquerdo Leve' },
    { cor: 'green', descricao: 'Lesão no pé esquerdo Moderado' }
  ],
  shoulder: [
    { cor: 'red', descricao: 'Dor no ombro Grave' },
    { cor: 'yellow', descricao: 'Dor no ombro Leve' },
    { cor: 'green', descricao: 'Dor no ombro Moderado' }
  ],
  knee: [
    { cor: 'red', descricao: 'Dor no joelho Grave' },
    { cor: 'yellow', descricao: 'Dor no joelho Leve' },
    { cor: 'green', descricao: 'Dor no joelho Moderado' }
  ],
  chest: [
    { cor: 'red', descricao: 'Dor no peitoral Grave' },
    { cor: 'yellow', descricao: 'Dor no peitoral Leve' },
    { cor: 'green', descricao: 'Dor no peitoral Moderado' }
  ],
  stomach: [
    { cor: 'red', descricao: 'Dor no abdômen Grave' },
    { cor: 'yellow', descricao: 'Dor no abdômen Leve' },
    { cor: 'green', descricao: 'Dor no abdômen Moderado' }
  ],
  rightHand: [
    { cor: 'red', descricao: 'Dor na mão direita Grave' },
    { cor: 'yellow', descricao: 'Dor na mão direita Leve' },
    { cor: 'green', descricao: 'Dor na mão direita Moderado' }
  ],
  leftHand: [
    { cor: 'red', descricao: 'Dor na mão esquerda Grave' },
    { cor: 'yellow', descricao: 'Dor na mão esquerda Leve' },
    { cor: 'green', descricao: 'Dor na mão esquerda Moderado' }
  ]
};


const nomeParteCorpo = {
  head: 'Cabeça',
  leftArm: 'Braço Esquerdo',
  rightArm: 'Braço Direito',
  leftLeg: 'Perna Esquerda',
  rightLeg: 'Perna Direita',
  torso: 'Torso',
  neck: 'Pescoço',
  rightFoot: 'Pé Direito',
  leftFoot: 'Pé Esquerdo',
  shoulder: 'Ombro',
  knee: 'Joelho',
  chest: 'Peitoral',
  stomach: 'Abdômen',
  rightHand: 'Mão Direita',
  leftHand: 'Mão Esquerda'
};

export default function App() {
  const [colorMap, setColorMap] = useState({});
  const [problemas, setProblemas] = useState([]);
  const [parteCorpo, setParteCorpo] = useState('');


  const onClick = (id) => {
    setColorMap(prevColorMap => {
      const currentColorIndex = prevColorMap[id] || 0;
      const newColorIndex = (currentColorIndex + 1) % 3;
      const novaCor = ['red', 'yellow', 'green'][newColorIndex];


      const newColorMap = { ...prevColorMap, [id]: newColorIndex };


      const element = document.getElementById(id);
      if (element) {
        const paths = element.querySelectorAll('path');
        paths.forEach(path => path.style.fill = novaCor); // Aplica a nova cor
      } else {
        console.error(`Elemento com id ${id} não encontrado!`);
      }


      const novosProblemas = problemasPorParte[id]?.filter(p => p.cor === novaCor) || [];
      setProblemas(novosProblemas);
      setParteCorpo(nomeParteCorpo[id] || '');
      if (novaCor === 'red') {
        showAlertWithCountdown(
          `Problema na ${nomeParteCorpo[id] || 'parte do corpo'}`,
          novosProblemas.map(p => p.descricao).join(', '),
          10
        );
      }

      return newColorMap;
    });
  };

  return (
    <div className="app-container">
      <BodyComponent onClick={onClick} />
      <TabelaProblemas problemas={problemas} parteCorpo={parteCorpo} />
    </div>
  );
}