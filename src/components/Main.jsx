import React from "react";

function Main({ activeNote , onUpdateNote}) {
//   const onEditField = (field, value) => {
//     onUpdateNote({
//       ...activeNote,
//       [field]: value,
//       lastModified: Date.now(),
//     });
//   };

//   if (!activeNote) return <div className="no-active-note">No Active Note</div>;
  return (
    <main className="Main">
      <div className="main__note--edit">
        <input
          type="text"
          autoFocus
          id="note__title"
          placeholder="Untitled"
          value={activeNote.title}
        />
        <textarea
          placeholder="Write Your Note Here..."
          id="textarea"
        ></textarea>
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
