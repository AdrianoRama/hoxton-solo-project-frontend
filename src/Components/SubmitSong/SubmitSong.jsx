import { Button, TextField } from '@material-ui/core'
import { SendOutlined } from '@material-ui/icons'
import { motion } from 'framer-motion'
import React from 'react'
import './SubmitSong.css'

export default function SubmitSong() {

    function logIn(e) {
        e.preventDefault()
    }

    return (
        <div className='app__submitsong'>
            <div className="app__submitsong-title">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='p__cormorant'>Submit your vibe to the VoteBox</motion.h1>
            </div>
            <form onSubmit={logIn} action="">
                <TextField required type={'text'} placeholder='Your Name' />
                <TextField required type={'text'} placeholder='Song Title' />
                <TextField required type={'text'} placeholder='Artist' />
                <TextField required type={'text'} placeholder='Song Link' />
                <Button
                    type='submit'
                    size='medium'
                    startIcon={<SendOutlined />}
                    variant='text'
                >Submit</Button>
            </form>
        </div>
    )
}
