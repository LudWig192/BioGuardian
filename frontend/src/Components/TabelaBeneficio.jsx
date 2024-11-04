import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../Style/BeneficioTab.css'; 
import hospital from '../Imagens/Icone_Hosp.jpeg';

function Tabela() {
  const [pessoa, setPessoa] = useState({ nome: '', email: '', telefone: '', status: 'Ativo' });

  const atualizarPessoa = (campo, valor) => {
    setPessoa({ ...pessoa, [campo]: valor });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', pessoa);

    Swal.fire({
      icon: 'success',
      title: 'Sua mensagem foi enviada com sucesso!',
      text: 'Você pode fechar esta mensagem clicando no botão abaixo.',
      showCloseButton: true, 
      confirmButtonText: 'Fechar', 
      timer: 1500,
      timerProgressBar: true, 
    });
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    atualizarPessoa('telefone', value);
  };

  return (
    <div className="container">
      <div className="image-section">
        <img src={hospital} alt="Hospital" className="hospital-image" />
      </div>
      <div className="form-section">
        <div className="form-container">
          <h1>Informações da Pessoa</h1>
          <form onSubmit={enviarFormulario}>
            <div className="pessoa-form">
              <label>Nome:</label>
              <input
                type="text"
                value={pessoa.nome}
                onChange={(e) => atualizarPessoa('nome', e.target.value)}
                placeholder="Nome"
              />
              <label>Email:</label>
              <input
                type="email"
                value={pessoa.email}
                onChange={(e) => atualizarPessoa('email', e.target.value)}
                placeholder="Email"
              />
              <label>Telefone:</label>
              <input
                type="tel"
                value={pessoa.telefone}
                onChange={handlePhoneChange}
                placeholder="Telefone"
              />
              <label>Tipo de Plano:</label>
              <select
                value={pessoa.status}
                onChange={(e) => atualizarPessoa('status', e.target.value)}
              >
                <option value="Familiar">Familiar</option>
                <option value="Individual">Individual</option>
              </select>
            </div>
            <button type="submit" className="submit-button">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Tabela;