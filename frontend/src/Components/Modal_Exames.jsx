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
    <div className="modalExames-overlay" onClick={onClose}>
      <div className="modalExames-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modalExames-content">
          <div className="modalExames-header">
            <h2 className="modalExames-title">
              {type === 'edit' ? 'Editar consulta' :
                type === 'delete' ? 'Excluir consulta?' :
                  'Adicionar Novo Item'}
            </h2>
          </div>
          <div className="modalExames-body">
            {type === 'delete' ? (
              <div>
                <p>Tem certeza que deseja excluir o paciente {data.paciente}?</p>
                <div className="modalExames-footer">
                  <button className="modalExames-btn" onClick={handleDelete}>Excluir</button>
                  <button
                    type="button"
                    className="modalExames-btn"
                    onClick={onClose}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="modalExames-form">
                {type === 'edit' || type === 'add' ? (
                  <>
                    <label className="modalExames-label">
                      Agendamento:
                      <input
                        type="date"
                        name="agendamento"
                        value={data.agendamento || ''}
                        onChange={handleInputChange}
                        required
                        className="modalExames-input"
                      />
                    </label>
                    <label className="modalExames-label">
                      Paciente:
                      <input
                        type="text"
                        name="paciente"
                        value={data.paciente || ''}
                        onChange={handleInputChange}
                        placeholder="Insira o nome do paciente"
                        required
                        className="modalExames-input"
                      />
                    </label>
                    <label className="modalExames-label">
                      Status:
                      <select
                        name="status"
                        value={data.status || ''}
                        onChange={handleInputChange}
                        required
                        className="modalExames-select"
                      >
                        <option value="" disabled>Selecione o status</option>
                        <option value="Confirmado">Confirmado</option>
                        <option value="Pendente">Pendente</option>
                        <option value="Cancelado">Cancelado</option>
                      </select>
                    </label>
                    <label className="modalExames-label">
                      Procedimentos:
                      <input
                        type="text"
                        name="procedimentos"
                        value={data.procedimentos || ''}
                        onChange={handleInputChange}
                        placeholder="Insira os procedimentos"
                        required
                        className="modalExames-input"
                      />
                    </label>
                    <label className="modalExames-label">
                      Tipo de Plano:
                      <select
                        name="tipoPlano"
                        value={data.tipoPlano || ''}
                        onChange={handleInputChange}
                        required
                        className="modalExames-select"
                      >
                        <option value="" disabled>Selecione o tipo de plano</option>
                        <option value="Individual">Individual</option>
                        <option value="Familiar">Familiar</option>
                      </select>
                    </label>
                    <div className="modalExames-footer">
                      <button type="submit" className="modalExames-btn">
                        {type === 'edit' ? 'Salvar' : 'Adicionar'}
                      </button>
                      <button
                        type="button"
                        className="modalExames-btn"
                        onClick={onClose}
                      >
                        Fechar
                      </button>
                    </div>
                  </>
                ) : null}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
