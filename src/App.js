/* import logo from './logo.svg'; */
import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Note from './components/Note';
import './App.css';
import Edit from './components/Edit'
import PrivateRoute from './components/PrivateRoute';


function App() {

const [firebaseUser, setFirebaseUser] = useState(false);

 const [user, setUser] = useState({});
  
 useEffect(() => {
     auth.onAuthStateChanged(user => {
         if(user) {
           setUser({email: user.email})
           setFirebaseUser(user)
           console.log(user)
         } 
         else {

          setFirebaseUser(null);
         }
     })
 }, [])

 const [dataState, setDataState]= useState([]);

  return  firebaseUser !== false ? ( 
      
    <>

    <Router>

    
    <div className="App">

    <Switch>
     
      <Route path="/edit"><Edit 
        dataState = {dataState}
        setDataState ={setDataState}
      /></Route>

        <Route path="/note" > <Note /></Route>

        <Route path="/home" > <Home 

        userEmail = {user.email}
        dataState = {dataState}
        setDataState ={setDataState}
        /></Route>
   
        <Route path="/register"><Register /></Route>

        <Route path="/privateRoute"><PrivateRoute 
        userEmail = {user.email}
        /></Route>
        
        <Route path="/"> <Login /></Route>

        
    </Switch>    
     
    </div> 
    

  </Router>

</> 


  ) : ( <p> Cargando </p>)
}

export default App;



