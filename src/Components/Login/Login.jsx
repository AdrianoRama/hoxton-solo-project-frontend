import React, { useState } from 'react'
import './Login.css'
import PasswordField from 'material-ui-password-field'
import { motion } from "framer-motion"
import { Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'

export default function Login({ user, setUser }) {
    const [error, setError] = useState()

    const navigate = useNavigate()

    function logIn(e) {
        e.preventDefault()
        const uniqueCode = e.target.uniqueCode.value

        fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ uniqueCode: uniqueCode })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    setError(data.error)
                } else {
                    localStorage.setItem('token', data.token)
                    setUser(data.user)
                }
            })
    }



    return (
        <div className='app__login'>
            <div className="app__login-container">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >VibezBox.</motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >A place where your Vote really matters</motion.p>
                <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    onSubmit={logIn} action="">
                    <PasswordField name='uniqueCode'
                        placeholder="Enter your client code..."
                        color='primary'
                    />
                    <Button type='submit' size='large'>Log In</Button>
                </motion.form>
            </div>
        </div>
    )
}
