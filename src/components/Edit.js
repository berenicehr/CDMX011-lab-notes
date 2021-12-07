import React, {useState } from 'react'
import {useHistory} from 'react-router-dom'


const Edit = ({dataState}) => {

    const id = dataState.id;

    const [title, setTitle] = useState(dataState.title);
    const [body, setBody] = useState(dataState.body);

    const history = useHistory()


    const back2Notes = (e) => {
        e.preventDefault()
        history.push("/Home");
    }

    return (
        
            <form id="noteBox" onSubmit={back2Notes}>
        
            <input type ="text" id ="title" value={title}
           /*  onChange={(e) => (e.target.value) }  */placeholder= " Añade un titulo" />
           
            <textarea id ="body" placeholder= "Escribe tu nota aquí" value={body}
            /*  onChange={(e) => ( e.target.value) } */ >                
            </textarea>
            <input className ="sentNote" type ="submit" />  
            <br />          
            <input className= "back" onClick={back2Notes}  placeholder= "Regresar a notas" />
            
            </form>
       
    )
}

export default Edit
