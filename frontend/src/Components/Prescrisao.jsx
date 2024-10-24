//IMPORTE AS BIBLIOTECAS AQUI
import React, { useState, useEffect } from 'react';
import { FaPills } from 'react-icons/fa';

//IMPORTE ESTILIZAÇÃO AQUI
import '../Style/Prescrisao.css';

//-----------------------------------------------------------------

function Prescriptions() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prescriptions, setPrescriptions] = useState([]);

  // Carregar prescrições do Local Storage ao montar o componente
  useEffect(() => {
    const storedPrescriptions = JSON.parse(localStorage.getItem('prescriptions')) || [];
    setPrescriptions(storedPrescriptions);
  }, []);

  // Atualiza o Local Storage sempre que a lista de prescrições mudar
  useEffect(() => {
    localStorage.setItem('prescriptions', JSON.stringify(prescriptions));
  }, [prescriptions]);

  // Função para capturar o arquivo selecionado
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Função para adicionar a prescrição com o nome do arquivo
  const handleAddPrescription = () => {
    if (selectedFile) {
      const newPrescription = {
        name: selectedFile.name, // Usa o nome do arquivo como nome da prescrição
        date: new Date().toLocaleDateString(), // Data atual
        duration: 'N/A', // Duração indefinida
        fileUrl: URL.createObjectURL(selectedFile), // Cria uma URL temporária para abrir o arquivo
      };
      setPrescriptions([...prescriptions, newPrescription]); // Adiciona à lista de prescrições
      setSelectedFile(null); // Limpa o arquivo selecionado após o upload
    } else {
      alert('Por favor, selecione um arquivo antes de adicionar.');
    }
  };

  return (
    <div className="prescriptions">
      <h4>Exames</h4>
      <div className="add-prescription">
        <label htmlFor="file-upload" className="custom-file-upload">
          Selecione o Documento
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          accept=".pdf, .docx, .txt, .png, .jpg"
        />
        <button onClick={handleAddPrescription} className='adicionar'>+ Adicionar Documento</button>
      </div>

      <div className="prescription-list">
        {prescriptions.length === 0 && <p>Nenhuma prescrição adicionada.</p>}
        {prescriptions.map((prescription, index) => (
          <div key={index} className="prescription-item">
            <FaPills className="prescription-icon" />
            <div className="prescription-info">
              <p>{prescription.name}</p>
              <p>{prescription.date}</p>
              <p>{prescription.duration}</p>
              {/* Link para abrir o arquivo */}
              {prescription.fileUrl && (
                <a
                  href={prescription.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="file-link"
                >
                  Abrir Documento
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prescriptions;
