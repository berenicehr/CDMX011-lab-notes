/* import logo from './logo.svg'; */
import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import { auth, buildNote, deleteNote } from './firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Note from './components/Note';
import './App.css';

function App() {

  const [notes, setNotes] = useState ([]);

  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    
    const newNote = {
      
      id: uuid(),
      title: "Untitled",
      body: "",
      lastModified: Date.now(),

    
    }

    setNotes([newNote,...notes]); 
    buildNote(newNote)
  } 

  const onUpdatedNote = (updatedNote) => {
    const updatedNoteArray = notes.map( (note) => {
      if (note.id === updatedNote){
        return updatedNote;
      }
      return note;
    })

    setNotes(updatedNoteArray);
  }

  const onDeleteNote = (idToDelete) => {

   
    setNotes(notes.filter((note) => note.id !== idToDelete));

    deleteNote(idToDelete);
    console.log(idToDelete);
  }

  const getActiveNote = () => {

    return notes.find((note) => note.id === activeNote )
  }


 /* const [activeUser, setActiveUser] =useState(null);

 auth.onAuthStateChanged(auth,(checkUser) => {

  if (checkUser) {
    //En caso de que haya sesión iniciada

    setActiveUser(checkUser); 

  } else {
    //Si no hay sesión iniciada
    setActiveUser(null);

  }
 })  */


 const [user, setUser] = useState({});
  
 useEffect(() => {
     auth.onAuthStateChanged(user => {
         if(user) {
           setUser({email: user.email})
           console.log(user)
         } 
     })
 }, [])

  return (
      
    <>

    <Router>
    <div className="App">
      <Switch>
        <Route path="/note" > <Note  activeNote= {getActiveNote()}
        onUpdatedNote = {onUpdatedNote}
        /></Route>

        <Route path="/home" > <Home 
        notes= {notes} 
        onAddNote= {onAddNote} 
        onDeleteNote= {onDeleteNote}
        activeNote= {activeNote}
        setActiveNote= {setActiveNote}
        /></Route>


       
        <Route path="/register"><Register /></Route>
        
        <Route path="/"> <Login /></Route>
        
      </Switch>
    </div> 

   {/*  {activeUser ? < Home /> : <Login />}, */}

  </Router>

</>


  );
}

export default App;



