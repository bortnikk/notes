import React from 'react'

function Sidebar(props: any) {
   
   const notes = props.notes

   // const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
     <aside className='Sidebar'>
        <div className="sidebar__header">
           <div className="sidebar__header--container">
               <p>Your Notes:</p>
               <button onClick={props.addNote}>Add</button>
           </div>
            <hr />
        </div>
        <div className="sidebar__notes">
           {notes.map((note: any) => {
              return (
                 <div
                     onClick={() => props.setActiveNote(note.id)}
                     className={`sidebar__note`}
                 >
                  <div className="sidebar__note--title">
                     <strong>{note.title && note.title.substring(0,20) + '...'}</strong>
                       <button onClick={() =>
                          props.deleteNote(note.id)
                       } 
                       > 
                          DELETE
                       </button>
                  </div>
                  <p>{note.body && note.body.substring(0,20) }...</p>
                  <small>
                       Last Modified {new Date(note.lastModified).toLocaleDateString('en-GB', {
                          hour: '2-digit',
                          minute: '2-digit'
                     })}
                  </small>
                 </div>
              )
         })}
        </div>
    </aside>
  )
}

export default Sidebar