import React, { useEffect } from 'react';
import '../Style/Modal_exames.css';

const Modal = ({ type, data, onClose, onChange, onSubmit }) => {
  useEffect(() => {
    document.body.classList.add('blur-background');

    return () => {
      document.body.classList.remove('blur-background');
    };
  }, []);

  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e); 
    }
  };

  const handleDelete = () => {
    if (onSubmit) {
      onSubmit(); 
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>
          {type === 'edit' ? 'Editar consulta' :
            type === 'delete' ? 'Excluir consulta?' :
              'Adicionar Novo Item'}
        </h2>

        {type === 'delete' ? (
          <div>
            <p>Tem certeza que deseja excluir o paciente {data.paciente}?</p>
            <div className="modal-buttons">
              <button onClick={handleDelete}>Excluir</button>
              <button type="button" onClick={onClose}>Cancelar</button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit}>
            {type === 'edit' || type === 'add' ? (
              <>
                <label>
                  Agendamento:
                  <input
                    type="date"
                    name="agendamento"
                    value={data.agendamento || ''}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Paciente:
                  <input
                    type="text"
                    name="paciente"
                    value={data.paciente || ''}
                    onChange={handleInputChange}
                    placeholder="Insira o nome do paciente"
                    required
                  />
                </label>
                <label>
                  Status:
                  <input
                    type="text"
                    name="status"
                    value={data.status || ''}
                    onChange={handleInputChange}
                    placeholder="Confirmado, pendente ou cancelado"
                    required
                  />
                </label>
                <label>
                  Procedimentos:
                  <input
                    type="text"
                    name="procedimentos"
                    value={data.procedimentos || ''}
                    onChange={handleInputChange}
                    placeholder="Insira os procedimentos"
                    required
                  />
                </label>
                <label>
                  Tipo de Plano:
                  <input
                    type="text"
                    name="tipoPlano"
                    value={data.tipoPlano || ''}
                    onChange={handleInputChange}
                    placeholder="Insira o tipo de plano"
                    required
                  />
                </label>
                <div className="modal-buttons">
                  <button type="submit">
                    {type === 'edit' ? 'Salvar' : 'Adicionar'}
                  </button>
                  <button type="button" onClick={onClose}>Fechar</button>
                </div>
              </>
            ) : null}
          </form>
        )}
      </div>
    </div>
  );
};

export default Modal;