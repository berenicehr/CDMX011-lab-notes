import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase';
import '../register.css'

const Register = () => {

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const history = useHistory()

    const createUser = (e) =>{
        e.preventDefault()
        if ( userPassword === confirmPassword){

            auth.createUserWithEmailAndPassword(userEmail,userPassword)
            .then(() => {
                console.log("create user worked")
                history.push("./home")
            })
            .catch((err) => alert("No es posible ingresar dejando campos vacios, verifica nuevamente"))

        } else { alert("Puede que tus contraseñan no coincidan o el correo ya haya sido registrado previamente.") } 
    }

    return (
        <>
        <img className="logoPN" src= {require('../images/logoPN.png').default} 
        height= { 200 } width= { 232 } alt=""></img>
        <div id ="container2" >
        <form>
            <input
                id="email"
                type="email"
                placeholder=" Ingresa correo electrónico"
                onChange={ (e) => {setUserEmail(e.target.value)}} 
            />
            <input
             id="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                onChange={ (e) => {setUserPassword(e.target.value)}}
            />
            <input
                className="confirmPassword"
                type="password"
                placeholder="Confirma tu contraseña"
                onChange={ (e) => {setConfirmPassword(e.target.value)}} 
                
            />
            <div className="signInInputs">
                <input id="signIn" type="submit" value="Inicia sesión" onClick={createUser}/>
            <p>¿Ya tienes cuenta? </p>
            <Link to= "/"><input id="backToLogin" type="submit" value="Inicia sesión" /></Link>
            </div>
        </form>
    </div></>
    )
}

export default Register
