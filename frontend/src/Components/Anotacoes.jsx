import React, { useState, useEffect } from "react";
import "../Style/Anotacoes.css"; // Importando o CSS

function NoteApp() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState(() => {
    try {
      const savedNotes = localStorage.getItem("notes");
      const parsedNotes = savedNotes ? JSON.parse(savedNotes) : [];
      if (Array.isArray(parsedNotes)) {
        return parsedNotes;
      } else {
        console.warn("Notas carregadas do localStorage não são um array válido.");
        return [];
      }
    } catch (error) {
      console.error("Erro ao carregar notas do localStorage:", error);
      return [];
    }
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(null);
  const handleAddNote = () => {
    const trimmedNote = note.trim();
    if (trimmedNote) {
      // Restante do código...
      setNote(trimmedNote);
    }
  }
  };

  useEffect(() => {
    if (Array.isArray(notes)) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  const handleAddNote = () => {
    if (note) {
      if (isEditing) {
        // Editar a nota existente
        const updatedNotes = [...notes];
        updatedNotes[currentNoteIndex] = note;
        setNotes(updatedNotes);
        setIsEditing(false);
        setCurrentNoteIndex(null);
      } else {
        // Adicionar uma nova nota
        const updatedNotes = [...notes, note];
        setNotes(updatedNotes);
      }
      setNote("");
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const handleEditNote = (index) => {
    setNote(notes[index]);
    setIsEditing(true);
    setCurrentNoteIndex(index);
  };

  return (
    <div className="note-app">
      <h1 className="note-title">Bloco de Notas</h1>
      <textarea
        className="note-textarea"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Escreva sua nota aqui..."
      />
      <button className="note-button" onClick={handleAddNote}>
        {isEditing ? "Editar Nota" : "Adicionar Nota"}
      </button>

      <ul className="note-list">
        {Array.isArray(notes) && notes.length > 0 ? (
          notes.map((note, index) => (
            <li key={index} className="note-item">
              <span>{note}</span>
              <div className="note-actions">
                <button
                  className="edit-button"
                  onClick={() => handleEditNote(index)}
                >
                  ✏️
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteNote(index)}
                >
                  🗑️
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="note-item">Nenhuma nota disponível</li>
        )}
      </ul>
    </div>
  );
}

export default NoteApp;
