import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({ setUser }) {
    const navigate = useNavigate()


    function logout() {
        navigate('/')
        setUser(null)
        localStorage.clear()
    }

    return (
        <div className='app__navbar'>
            <div className="app__navbar-logo">
                <h1>V</h1>
            </div>
            <ul className='app__navbar-links'>
                <NavLink to={`/votebox`}><li className='p__opensans'> VoteBox</li> </NavLink>
                <NavLink to={'/yourvibe'}><li className='p__opensans'> YourVibe </li></NavLink>
            </ul>
            <div className="app__navbar-logout">
                <p className='p__opensans' onClick={logout}>Log Out</p>
            </div>
        </div>
    )
}
