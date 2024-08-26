import React, { useState } from 'react';


const App = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const addNote = () => {
    if (input.trim()) {
      setNotes([...notes, input]);
      setInput('');
    }
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>Notes App</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your note"
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <div className="notes-container">
        {notes.length === 0 ? (
          <p>No notes available</p>
        ) : (
          notes.map((note, index) => (
            <div key={index} className="note">
              <p>{note}</p>
              <button onClick={() => deleteNote(index)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
