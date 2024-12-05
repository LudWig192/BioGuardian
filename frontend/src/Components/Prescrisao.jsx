import React, { useState, useEffect } from 'react';
import { FaPills } from 'react-icons/fa';
import axios from 'axios';
import '../Style/Prescrisao.css';

function Prescriptions() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const response = await axios.get('http://localhost:3001/documentos');
        setPrescriptions(response.data.documents);
      } catch (error) {
        console.error('Erro ao buscar prescrições:', error);
      }
    };

    fetchPrescriptions();
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleAddPrescription = async () => {
    if (selectedFile) {
      setLoading(true);

      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const response = await axios.post('http://localhost:3001/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        const newPrescription = {
          name: response.data.file.name, 
          date: new Date().toLocaleDateString(),
          duration: 'N/A',
          fileUrl: response.data.file.path, 
        };

        setPrescriptions([...prescriptions, newPrescription]);
        setSelectedFile(null);
      } catch (error) {
        alert('Erro ao enviar o documento. Tente novamente!');
      } finally {
        setLoading(false);
      }
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
        <button
          onClick={handleAddPrescription}
          className="adicionar"
          disabled={loading}
        >
          {loading ? 'Carregando...' : '+ Adicionar Documento'}
        </button>
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
