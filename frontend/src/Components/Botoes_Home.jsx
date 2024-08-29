// Buttons.js

import React from 'react';
import "../Style/Botao_Home.css"

const Buttons = () => {
  return (
    <div className="button-container">
      <div className="button-row">
        <button className="animated-button">Botão 1</button>
        <button className="animated-button">Botão 2</button>
        <button className="animated-button">Botão 3</button>
      </div>
      <div className="button-row">
        <button className="animated-button">Botão 4</button>
        <button className="animated-button">Botão 5</button>
        <button className="animated-button">Botão 6</button>
      </div>
    </div>
  );
};

export default Buttons;