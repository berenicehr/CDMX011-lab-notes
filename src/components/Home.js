import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth, handleGetData } from '../firebase';
import '../home.css';

const Home = ({notes, onAddNote, onDeleteNote, userEmail }) => {
    
    const [dataState, setDataState]= useState(null);

    useEffect(() => {
        handleGetData().then((querySnapshot) => {
            const arrayData = []
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                arrayData.push({id: doc.id, data: doc.data() });
            });
            setDataState(arrayData);
        });
    }, [])

    const userSignOut = (e) => {
        auth.signOut()
        .then(() => {
            console.log("sign out")
        })
        .catch((err) => console.log(err))
    }

    const history= useHistory()

    const makeNewNote = (e) => {
        e.preventDefault()
        history.push("./Note");

    }

    return (
        <div id="homeContainer">
            <p>Notas de {userEmail}</p>
            <div id="newNoteContainer">
            <button id="createNote" type= "submit" onClick={makeNewNote}> Crea nueva nota</button >
            </div>
           
            <div id="allNotesContainer">
            {dataState && dataState.map(datossss=><p>{datossss.data.title}</p>)}
                {notes.map((note) =>(
                    <><div className = "individualContainer"  
                    id="individualNoteContainer">
                        <strong> { note.title } </strong>
                        <button id="deleteButton" onClick= { () => onDeleteNote(note.id)}>
                            <img className="trash" src= {require('../images/trash.png').default} 
                            height= { 22 } width= { 20 } alt=""></img>
                        </button>
                    
                    <p> {note.body && note.body.substr(0,100) + "..."} Escribe aquí </p>
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
