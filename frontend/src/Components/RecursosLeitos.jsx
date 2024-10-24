// import React, { useState } from 'react';
// import '../Style/RecursosLeitos.css';

// const RecursosLeitos = () => {
//     const [leitos, setLeitos] = useState([]);
//     const [numeroLeito, setNumeroLeito] = useState('');
//     const [status, setStatus] = useState('');

//     const adicionarLeito = () => {
//         if (numeroLeito && status) {
//             const novoLeito = { numero: numeroLeito, status };
//             setLeitos([...leitos, novoLeito]);
//             setNumeroLeito('');
//             setStatus('');
//         } else {
//             alert("Por favor, preencha todos os campos.");
//         }
//     };

//     return (
//         <div className="recursos-leitos-container">
//             <h2>Gestão de Leitos</h2>
//             <div className="form">
//                 <input
//                     type="text"
//                     placeholder="Número do Leito"
//                     value={numeroLeito}
//                     onChange={(e) => setNumeroLeito(e.target.value)}
//                 />
//                 <select value={status} onChange={(e) => setStatus(e.target.value)}>
//                     <option value="">Selecione o Status</option>
//                     <option value="Disponível">Disponível</option>
//                     <option value="Ocupado">Ocupado</option>
//                     <option value="Em Manutenção">Em Manutenção</option>
//                 </select>
//                 <button onClick={adicionarLeito}>Adicionar Leito</button>
//             </div>
//             <div className="leitos-container">
//                 {leitos.map((leito, index) => (
//                     <div className="leito-box" key={index}>
//                         <h3>Leito {leito.numero}</h3>
//                         <p>Status: <strong>{leito.status}</strong></p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default RecursosLeitos;
