import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth, deleteNote, handleOnRealTime, updateNote} from '../firebase';
import '../home.css';

const Home = ({userEmail, dataState, setDataState }) => {
    

    useEffect(() => {
        if (auth.currentUser) {
             console.log("estas registrado")
        } else {
            console.log("no esta el usuario registrado");
            history.push("./Login");

        }
    }, []);



    const [edit, setEdit] = useState(false);

    // Para leer en tiempo real.
     useEffect(() => {

      /*  const showData = () => { */

        handleOnRealTime().onSnapshot((querySnapshot) => {
            const arrayUpdate = [];
            querySnapshot.forEach((doc) => {
                arrayUpdate.push({id: doc.id, ...doc.data()});
            });
            console.log(arrayUpdate);
            setDataState(arrayUpdate);
        });
    /* }
    showData();
 */
    }, [setDataState] )   




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

   const makeEdit = (e) => {
    e.preventDefault()
    history.push("/Edit"); 
   }

         
    

    return (
        <>
        <div id="homeContainer">
            <strong>Notas de {userEmail}</strong>
            <br />
            <div id="newNoteContainer">
            <button id="createNote" type= "submit" onClick={makeNewNote}> Crea nueva nota</button >
            </div>
           
            <div id="allNotesContainer">

             { dataState.map ( datos =>
            <div className = "individualContainer" id="individualNoteContainer" key={datos.id}>
            <strong>{datos.title}</strong>
            <p>{datos.body && datos.body.substr(0,100) + "..."}</p>
            <br />
            <div className ="buttons">
            <button id="deleteButton" onClick={() => {
                console.log(datos.id)
                deleteNote(datos.id)}}>
                <img className="trash" src= {require('../images/trash.png').default} 
                height= { 22 } width= { 20 } alt=""></img>
            </button>
            
            <button id= "editButton"  onClick= {makeEdit} > <img className="edit" src= {require('../images/pencil (1).png').default} 
                height= { 22 } width= { 20 } alt=""></img> </button>
            </div>
            
            </div>)} 

            </div>
            <Link to= "/" id="exit"><button id="signOut" type="submit" onClick={userSignOut}>
            <img className="door" src= {require('../images/exitDoor.png').default} 
        height= { 100 } width= { 132 } alt=""></img>
                </button></Link>
        </div>
    </>
    )




}

export default Home


