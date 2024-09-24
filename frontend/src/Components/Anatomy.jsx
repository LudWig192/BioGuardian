import React, { useState } from 'react';
import 'sweetalert2/dist/sweetalert2.min.css';
// import { BodyComponent } from 'reactjs-human-body';
import TabelaProblemas from '../Components/TabelaCorpo.jsx';
import showAlertWithCountdown from '../Components/Alert.jsx';
import '../Style/Anatomia.css';

const problemasPorParte = {
  head: [
    { cor: 'red', descricao: 'Dor de cabeça leve' },
    { cor: 'yellow', descricao: 'Dor de cabeça moderada' },
    { cor: 'green', descricao: 'Dor de cabeça grave' }
  ],
  leftArm: [
    { cor: 'red', descricao: 'Fratura no braço esquerdo leve' },
    { cor: 'yellow', descricao: 'Fratura no braço esquerdo moderada' },
    { cor: 'green', descricao: 'Fratura no braço esquerdo grave' }
  ],
  rightArm: [
    { cor: 'red', descricao: 'Fratura no braço direito leve' },
    { cor: 'yellow', descricao: 'Fratura no braço direito moderada' },
    { cor: 'green', descricao: 'Fratura no braço direito grave' }
  ],
  leftLeg: [
    { cor: 'red', descricao: 'Entorse no tornozelo esquerdo leve' },
    { cor: 'yellow', descricao: 'Entorse no tornozelo esquerdo moderada' },
    { cor: 'green', descricao: 'Entorse no tornozelo esquerdo grave' }
  ],
  rightLeg: [
    { cor: 'red', descricao: 'Entorse no tornozelo direito leve' },
    { cor: 'yellow', descricao: 'Entorse no tornozelo direito moderada' },
    { cor: 'green', descricao: 'Entorse no tornozelo direito grave' }
  ],
  torso: [
    { cor: 'red', descricao: 'Dor nas costas leve' },
    { cor: 'yellow', descricao: 'Dor nas costas moderada' },
    { cor: 'green', descricao: 'Dor nas costas grave' }
  ],
  neck: [
    { cor: 'red', descricao: 'Dor no pescoço leve' },
    { cor: 'yellow', descricao: 'Dor no pescoço moderada' },
    { cor: 'green', descricao: 'Dor no pescoço grave' }
  ],
  rightFoot: [
    { cor: 'red', descricao: 'Lesão no pé direito leve' },
    { cor: 'yellow', descricao: 'Lesão no pé direito moderada' },
    { cor: 'green', descricao: 'Lesão no pé direito grave' }
  ],
  leftFoot: [
    { cor: 'red', descricao: 'Lesão no pé esquerdo leve' },
    { cor: 'yellow', descricao: 'Lesão no pé esquerdo moderada' },
    { cor: 'green', descricao: 'Lesão no pé esquerdo grave' }
  ],
  shoulder: [
    { cor: 'red', descricao: 'Dor no ombro leve' },
    { cor: 'yellow', descricao: 'Dor no ombro moderada' },
    { cor: 'green', descricao: 'Dor no ombro grave' }
  ],
  knee: [
    { cor: 'red', descricao: 'Dor no joelho leve' },
    { cor: 'yellow', descricao: 'Dor no joelho moderada' },
    { cor: 'green', descricao: 'Dor no joelho grave' }
  ],
  chest: [
    { cor: 'red', descricao: 'Dor no peitoral leve' },
    { cor: 'yellow', descricao: 'Dor no peitoral moderada' },
    { cor: 'green', descricao: 'Dor no peitoral grave' }
  ],
  stomach: [
    { cor: 'red', descricao: 'Dor no abdômen leve' },
    { cor: 'yellow', descricao: 'Dor no abdômen moderada' },
    { cor: 'green', descricao: 'Dor no abdômen grave' }
  ],
  rightHand: [
    { cor: 'red', descricao: 'Dor na mão direita leve' },
    { cor: 'yellow', descricao: 'Dor na mão direita moderada' },
    { cor: 'green', descricao: 'Dor na mão direita grave' }
  ],
  leftHand: [
    { cor: 'red', descricao: 'Dor na mão esquerda leve' },
    { cor: 'yellow', descricao: 'Dor na mão esquerda moderada' },
    { cor: 'green', descricao: 'Dor na mão esquerda grave' }
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
      {/* <BodyComponent onClick={onClick} /> */}
      <TabelaProblemas problemas={problemas} parteCorpo={parteCorpo} />
    </div>
  );
}
