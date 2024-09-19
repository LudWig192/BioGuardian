// import React, { useState } from 'react';
// import '../Style/Anatomia.css'; // Importe o arquivo CSS

// import { Button } from 'react-bootstrap';

// export default function Anatomia() {
//   // Estado para armazenar as cores das partes do corpo
//   const [colors, setColors] = useState({});

//   // Função para alternar a cor ao clicar em uma parte do corpo
//   const onClick = (id) => {
//     setColors((prevColors) => {
//       // Alterna a cor entre vermelho e verde
//       const currentColor = prevColors[id];
//       const newColor = currentColor === 'red' ? 'green' : 'red';
//       return { ...prevColors, [id]: newColor };
//     });
//   };

//   // Função para preparar os parâmetros para o BodyComponent
//   const getBodyComponentParams = () => {
//     const updatedParams = {};
//     Object.keys(colors).forEach((part) => {
//       updatedParams[part] = {
//         color: colors[part], // Define a cor para a parte específica
//       };
//     });
//     return updatedParams;
//   };

//   return (
//     <div className="container">
//       <Button variant="primary" className="button-styled" onClick={() => setColors({})}>
//         Clear Colors
//       </Button>
//       <div className="body-wrapper">
//         <BodyComponent
//           partsInput={getBodyComponentParams()} // Passa as cores para o BodyComponent
//           onClick={onClick} // Define a função de clique
//         />
//       </div>
//     </div>
//   );
// }
