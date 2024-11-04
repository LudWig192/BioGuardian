import React, { useState, useEffect } from 'react';
import { FaPills } from 'react-icons/fa';
import '../Style/Prescrisao.css';

function Prescriptions() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    const storedPrescriptions = JSON.parse(localStorage.getItem('prescriptions')) || [];
    setPrescriptions(storedPrescriptions);
  }, []);

  useEffect(() => {
    localStorage.setItem('prescriptions', JSON.stringify(prescriptions));
  }, [prescriptions]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleAddPrescription = () => {
    if (selectedFile) {
      const newPrescription = {
        name: selectedFile.name,
        date: new Date().toLocaleDateString(),
        duration: 'N/A',
        fileUrl: URL.createObjectURL(selectedFile), 
      };
      setPrescriptions([...prescriptions, newPrescription]); 
      setSelectedFile(null);
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
