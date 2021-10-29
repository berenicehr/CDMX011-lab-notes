/* import logo from './logo.svg'; */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/home" > <Home /></Route>
       
        <Route path="/register"><Register /></Route>
        
        <Route path="/"> <Login /></Route>
        
      </Switch>
    </div>
  </Router>
  );
}

export default App;



