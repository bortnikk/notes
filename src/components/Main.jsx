import React from "react";

function Main({ activeNote , onUpdateNote}) {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) return <div className="no__note">No Note Selected</div>;
  return (
    <main className="Main">
      <div className="main__note--edit">
        <input
          type="text"
          id="note__title"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          placeholder="Write Your Note Here..."
              id="textarea"
              value={activeNote.body}
              onChange={(e) => onEditField("body", e.target.value)}
         >
        </textarea>
      </div>
      <hr />
      <div className="main__note--preview">
        <h1>{activeNote.title}</h1>
        <div className="preview__par">
          <p>{activeNote.body}</p>
        </div>
      </div>
    </main>
  );
}

export default Main;
