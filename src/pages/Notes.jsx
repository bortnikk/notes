import React, { useState } from "react";
import uuid from "react-uuid";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

function Notes() {
  const [notes, setNotes] = useState([]);

  const [activeNote, setActiveNote] = useState(false);

  const addNote = () => {
    const NewNote = {
      id: uuid(),
      title: "Untitled",
      body: "This is 20 symbol note created in body from vscode",
      lastModified: Date.now(),
    };
    setNotes([NewNote, ...notes])
  };

  const deleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  return (
    <section className="Notes">
      <div className="notes__container">
        <Sidebar
          notes={notes}
          addNote={addNote}
          deleteNote={deleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
        <Main
          activeNote={getActiveNote()}
        />
      </div>
    </section>
  );
}

export default Notes;
