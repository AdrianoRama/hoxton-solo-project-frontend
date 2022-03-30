import { Button, TextField } from '@material-ui/core'
import { SendOutlined } from '@material-ui/icons'
import React from 'react'
import './SubmitSong.css'

export default function SubmitSong() {

    function logIn(e) {
        e.preventDefault()
    }

    return (
        <div className='app__submitsong'>
            <div className="app__submitsong-title">
                <h1 className='p__cormorant'>Submit your vibe to the VoteBox</h1>
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
