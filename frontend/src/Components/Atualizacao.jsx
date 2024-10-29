// import React, { useState } from 'react';
// import '../Style/Atualizacao.css'; 
// import Andrew from '../Imagens/Andrew.jpeg';
// import Enfermeira from '../Imagens/medica.jpeg';
// import Angela from '../Imagens/Cirurgia.jpeg';
// import { FaBell } from 'react-icons/fa'; 

// const Atualizacao = () => {
//     const [showUpdates, setShowUpdates] = useState(true); 

//     const updates = [
//         { name: "Dr. Andrew Thomas", action: "atendeu o paciente João Silva", time: "25 segundos atrás", photo: Andrew },
//         { name: "Enfermeira James Bond", action: "administrou medicamento ao paciente Maria Oliveira", time: "30 minutos atrás", photo: Enfermeira },
//         { name: "Dra. Angela Freitas", action: "realizou cirurgia no paciente Pedro Santos", time: "2 horas atrás", photo: Angela },
//     ];

//     const toggleUpdates = () => {
//         setShowUpdates(!showUpdates);
//     };

//     return (
//         <div className={`atualizacao-container ${showUpdates ? 'active' : ''}`}>
//             <h3 className="atualizacao-title">
//                 Atualizações
//                 <button onClick={toggleUpdates} className="atualizacao-notify-button" aria-label="Notificações">
//                     <FaBell className="atualizacao-notify-icon" />
//                     <span className="notification-count">3</span>
//                 </button>
//             </h3>
//             {showUpdates && (
//                 <ul className="atualizacao-list animate">
//                     {updates.map((update, index) => (
//                         <li key={index} className="atualizacao-item">
//                             <img src={update.photo} alt={update.name} className="atualizacao-photo" />
//                             <span className="atualizacao-text">
//                                 <strong className="atualizacao-name">{update.name}</strong> {update.action} <span className="atualizacao-time">{update.time}</span>
//                             </span>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default Atualizacao;
