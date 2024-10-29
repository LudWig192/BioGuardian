// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
// import '../Style/RevisaoCliente.css';

// // Dados de avaliações
// const data = [
//     { estrela: '1 ★', total: 10 },
//     { estrela: '2 ★', total: 5 },
//     { estrela: '3 ★', total: 15 },
//     { estrela: '4 ★', total: 20 },
//     { estrela: '5 ★', total: 50 },
// ];

// // Componente principal
// const RevisaoCliente = () => {
//     const totalAvaliacoes = data.reduce((acc, item) => acc + item.total, 0);

//     return (
//         <div className="revisao-cliente-container">
//             <h3 className="revisao-cliente-title">Revisão de Clientes</h3>
//             <p className="revisao-cliente-average">Total de Avaliações: {totalAvaliacoes}</p>

//             <div className="chart-container">
//                 <ResponsiveContainer width="100%" height={300}>
//                     <BarChart data={data}>
//                         <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
//                         <XAxis dataKey="estrela" stroke="#666" />
//                         <YAxis />
//                         <Tooltip />
//                         <Bar dataKey="total" fill="#4CAF50" />
//                     </BarChart>
//                 </ResponsiveContainer>
//             </div>

//             <div className="revisao-cliente-star-line">
//                 {Array.from({ length: 5 }, (_, i) => (
//                     <span
//                         key={i}
//                         className={`star ${data[4].total >= i + 1 ? 'filled' : 'empty'}`}
//                     >
//                         ★
//                     </span>
//                 ))}
//             </div>

//             <p className="revisao-cliente-message">Obrigado por confiar em nós!</p>
//         </div>
//     );
// };

// export default RevisaoCliente;
