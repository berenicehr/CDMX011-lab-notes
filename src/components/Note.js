import React, { useState } from 'react';
import '../Note.css';
import { buildNotes } from '../firebase';
import { useHistory } from 'react-router-dom';

const Note = () => {

    const [title, setTitle] = useState('')
    const [body, setBody ] = useState('')


const createTitle = (title) => {
    setTitle(title)
}

const createBody = (body) => {
    setBody(body)
}

const history = useHistory()

const makeNote = (e) => {

    e.preventDefault()
    buildNotes(title, body).then(() => history.push("/Home"));
}

 
    return (
        <form id="noteBox" onSubmit={makeNote}>
        
            <input type ="text" id ="title" value={title}
            onChange={(e) => createTitle(e.target.value) } placeholder= " Añade un titulo" />
           
            <textarea id ="body" placeholder= "Escribe tu nota aquí" value={body}
             onChange={(e) => createBody( e.target.value) } >                
            </textarea>
            <input className ="sentNote" type ="submit" />
            <br />

        </form>

        
    )
}

export default Note