/* import logo from './logo.svg'; */
import React, { useState } from 'react';
import uuid from 'react-uuid';
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
  }

  const getActiveNote = () => {

    return notes.find((note) => note.id === activeNote )
  }

 

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/note" > <Note  activeNote= {getActiveNote()}
        onUpdatedNote = {onUpdatedNote}
        /></Route>

        <Route path="/home" > <Home notes= {notes} 
        onAddNote= {onAddNote} 
        onDeleteNote= {onDeleteNote}
        activeNote= {activeNote}
        setActiveNote= {setActiveNote}
        /></Route>


       
        <Route path="/register"><Register /></Route>
        
        <Route path="/"> <Login /></Route>
        
      </Switch>
    </div>
  </Router>
  );
}

export default App;



