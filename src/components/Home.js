import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import '../home.css';

const Home = ({notes, onAddNote, onDeleteNote, activeNote, setActiveNote}) => {
    
    const userSignOut = (e) => {
        auth.signOut()
        .then(() => {
            console.log("sign out")
        })
        .catch((err) => console.log(err))
    }

    return (
        <div id="homeContainer">
            <div id="newNoteContainer">
            <button id="createNote" type= "submit" onClick={onAddNote}> Crea nueva nota</button >
            </div>
            <div id="allNotesContainer">
                {notes.map((note) =>(
                    <><div className ={`individualContainer ${note.id === activeNote && "active"}`} 
                    id="individualNoteContainer" onClick={ () => setActiveNote(note.id) }>
                        <strong> { note.title } </strong>
                        <button id="deleteButton" onClick= { () => onDeleteNote(note.id)}>
                            <img className="trash" src= {require('../images/trash.png').default} 
                            height= { 22 } width= { 20 } alt=""></img>
                        </button>
                    
                    <p> {note.body && note.body.substr(0,100) + "..."} </p>
                    <small>Ultima modificación {new Date (note.lastModified).toLocaleDateString("es-ES",{
                        hour: "2-digit",
                        minute: "2-digit"
                        })}</small>
                    </div>
                    </>
                ))}              
            </div>
            <Link to= "/" id="exit"><button id="signOut" type="submit" onClick={userSignOut}>
            <img className="door" src= {require('../images/exitDoor.png').default} 
        height= { 100 } width= { 132 } alt=""></img>
                </button></Link>
        </div>

    )
}

export default Home
