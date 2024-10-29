// import React, { useState } from 'react';
// import '../Style/PedidoRecente.css'; // Atualize o caminho conforme necessário

// const SolicitacoesExames = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [solicitacoes, setSolicitacoes] = useState([
//         { nome: 'Maria Silva', id: 'REQ123456', data: '29 Set 2024', status: 'Pendente', exame: 'Hemograma' },
//         { nome: 'João Pereira', id: 'REQ123457', data: '29 Set 2024', status: 'Pendente', exame: 'Raio-X' },
//         { nome: 'Ana Costa', id: 'REQ123458', data: '29 Set 2024', status: 'Pendente', exame: 'Ultrassonografia' },
//         { nome: 'Lucas Oliveira', id: 'REQ123459', data: '29 Set 2024', status: 'Pendente', exame: 'Tomografia' },
//     ]);

//     const handleAction = (id, action) => {
//         setSolicitacoes(solicitacoes.map(solicitacao =>
//             solicitacao.id === id ? { ...solicitacao, status: action } : solicitacao
//         ));
//     };

//     const filteredSolicitacoes = solicitacoes.filter(solicitacao =>
//         solicitacao.nome.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="solicitacoes-exames-container">
//             <h3 className="solicitacoes-exames-title">Solicitações de Exames</h3>
//             <input
//                 type="text"
//                 placeholder="Pesquisar por nome..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="solicitacoes-exames-search-input"
//             />
//             <table className="solicitacoes-exames-table">
//                 <thead>
//                     <tr>
//                         <th>Nome do Paciente</th>
//                         <th>ID da Solicitação</th>
//                         <th>Data da Solicitação</th>
//                         <th>Exame</th>
//                         <th>Status</th>
//                         <th>Ações</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredSolicitacoes.map((solicitacao) => (
//                         <tr key={solicitacao.id}>
//                             <td>{solicitacao.nome}</td>
//                             <td>{solicitacao.id}</td>
//                             <td>{solicitacao.data}</td>
//                             <td>{solicitacao.exame}</td>
//                             <td className={`status ${solicitacao.status.toLowerCase()}`}>
//                                 {solicitacao.status}
//                             </td>
//                             <td>
//                                 {solicitacao.status === 'Pendente' && (
//                                     <>
//                                         <button
//                                             className="solicitacoes-exames-btn-approve"
//                                             onClick={() => handleAction(solicitacao.id, 'Aprovado')}
//                                         >
//                                             Aprovar
//                                         </button>
//                                         <button
//                                             className="solicitacoes-exames-btn-reject"
//                                             onClick={() => handleAction(solicitacao.id, 'Rejeitado')}
//                                         >
//                                             Rejeitar
//                                         </button>
//                                     </>
//                                 )}
//                                 {solicitacao.status === 'Aprovado' && (
//                                     <span className="status-indicator aprovado">Aprovado</span>
//                                 )}
//                                 {solicitacao.status === 'Rejeitado' && (
//                                     <span className="status-indicator rejeitado">Rejeitado</span>
//                                 )}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default SolicitacoesExames;
