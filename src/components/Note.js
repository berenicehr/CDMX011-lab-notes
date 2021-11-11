import React from 'react';

const Note = ({activeNote, updatedNote}) => {

    const onEditField = (field, value) => {
         updatedNote({
           ...activeNote,
            [field]:value,
            lastModified: Date.now()
        })
    }

    if (!activeNote) return <div className="no-active-note">No active note</div>;

    return (
        <div className ="mainContainer" >
            <div className = "mainNoteEdit">
            <input type ="text" id ="title" value= {activeNote.title}  
            onChange={(e) => onEditField("title", e.target.value) }/>
            <textarea id ="body" placeholder= "Escribe tu nota aquí" value= {activeNote.body}
             onChange={(e) => onEditField("body", e.target.value) } >                
            </textarea>
            </div>
            <div className ="notePreview">
                <h1 className = "previewTitle">{activeNote.title}</h1>
                <div className = "previewNote">{activeNote.body}</div>
            </div>
        </div>
    )
}

export default Note