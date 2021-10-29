import React,  {useState}  from 'react'
import { Link } from 'react-router-dom'
import '../login.css';
import { auth, provider } from '../firebase';

const Login = () => {

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
 
  const userSignIn = (e) =>{
    auth.signInWithEmailAndPassword(userEmail,userPassword)
    .then(() => {
        console.log("sign in works")
    })
    .catch((err) => console.log(err))
}

  const signInWithGoogle = (e) => {
    auth.signInWithPopup(provider)
    .then(() => {
      console.log("it works on google")
    })
        .catch(err => {
            console.log(err)
        })
}

    return (
        <> <img className="logoPN" src= {require('../images/logoPN.png').default} 
        height= { 200 } width= { 232 } alt=""></img>
        <div id= "container" >
           <form>
            <input
          id="email"
          type="email" required
          placeholder=" Ingresa correo electrónico"
          name="email"
          onChange={ (e) => {setUserEmail(e.target.value)}} 
        />
        <br />
        <input
          id="password"
          type="password" required
          placeholder="Ingresa tu contraseña"
          name="password"
          onChange={ (e) => {setUserPassword(e.target.value)}}
        />
        <div className="signInInputs">
          <Link to= "/home"><button id="signIn" type="submit" onClick={userSignIn}>
               Inicia sesión </button></Link>
          <button id="googleSignIn" type="submit" onClick={signInWithGoogle}>
            <img className="googleLogo" src= {require('../images/google.png').default}
             height= { 18 } width= { 12 } alt=""/>
            Continuar con Google </button>
          <p>¿No tienes cuenta? </p>
        <Link to= "/register"><button id="goToRegister" type="submit">
           Regístrate </button></Link>
        </div>
            </form>
        </div></>
    )
}

export default Login
