import React from 'react';
import '../Style/EstatiticasCardsAdm.css';

const projects = [
    { id: 1, name: 'Atualização de Prontuários Eletrônicos', startDate: '01/10/2023', dueDate: '30/10/2023', status: 'Concluído', assignee: 'Dr. Alice Mendes' },
    { id: 2, name: 'Treinamento da Equipe de Enfermagem', startDate: '15/09/2023', dueDate: '15/10/2023', status: 'Pendente', assignee: 'Enf. João Silva' },
    { id: 3, name: 'Implementação de Telemedicina', startDate: '01/10/2023', dueDate: '01/12/2023', status: 'Em Andamento', assignee: 'Carlos Eduardo' },
    { id: 4, name: 'Campanha de Vacinação', startDate: '01/11/2023', dueDate: '30/11/2023', status: 'Em Breve', assignee: 'Ana Paula' },
    { id: 5, name: 'Revisão de Protocolos de Segurança', startDate: '05/09/2023', dueDate: '20/09/2023', status: 'Liberado', assignee: 'Dr. Alice Mendes' },
];

const LatestProjects = () => {
    return (
        <div className="latest-projects-container">
            <h2>Projetos Recentes</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome do Projeto</th>
                        <th>Data de Início</th>
                        <th>Data de Conclusão</th>
                        <th>Status</th>
                        <th>Responsável</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project.id}>
                            <td>{project.id}</td>
                            <td>{project.name}</td>
                            <td>{project.startDate}</td>
                            <td>{project.dueDate}</td>
                            <td className={`status ${project.status.toLowerCase().replace(/\s+/g, '-')}`}>{project.status}</td>
                            <td>{project.assignee}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LatestProjects;
