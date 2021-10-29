import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase';
import '../register.css'

const Register = () => {

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const createUser = (e) =>{
        auth.createUserWithEmailAndPassword(userEmail,userPassword)
        .then(() => {
            console.log("create user worked")
        })
        .catch((err) => console.log(err))
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
            />
            <div className="signInInputs">
            <Link to= "/home">
                <input id="signIn" type="submit" value="Inicia sesión" onClick={createUser}/>
            </Link>
            <p>¿Ya tienes cuenta? </p>
            <Link to= "/"><input id="backToLogin" type="submit" value="Inicia sesión" /></Link>
            </div>
        </form>
    </div></>
    )
}

export default Register
