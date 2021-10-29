import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h3>estas en home</h3>
            <Link to= "/"><input id="signOut" type="submit" value="Cerrar sesión" /></Link>
        </div>

    )
}

export default Home
