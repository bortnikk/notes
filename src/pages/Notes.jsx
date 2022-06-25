import React, { useState , useEffect } from "react";
import uuid from "react-uuid";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

function Notes() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );

  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const deleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

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
          onUpdateNote={onUpdateNote}
        />
      </div>
    </section>
  );
}

export default Notes;
