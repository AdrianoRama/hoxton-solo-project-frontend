import React from 'react'
import './Login.css'
import PasswordField from 'material-ui-password-field'
import { motion } from "framer-motion"
import { Button } from '@material-ui/core'

export default function Login() {

    function logIn(e) {
        e.preventDefault()
    }

    return (
        <div className='app__login'>
            <div className="app__login-container">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >VibezBox</motion.h1>
                <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    onSubmit={logIn} action="">
                    <PasswordField
                        placeholder="Enter your client code..."
                        color='primary'
                    />
                    <Button type='submit' size='large'>Log In</Button>
                </motion.form>
            </div>
        </div>
    )
}
