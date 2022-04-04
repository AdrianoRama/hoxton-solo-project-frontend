import { Button, TextField } from '@material-ui/core'
import { SendOutlined } from '@material-ui/icons'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import './SubmitSong.css'

function SubmitedVibe() {
    return (<div className='app__submitsong'>
        <div className="app__submitsong-title">
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='p__cormorant'>Your vibe has been received ✌(◕‿-)</motion.h1>
        </div>
    </div>)
}

function SubmitForm({ postSong }) {
    return (
        <>  <div className="app__submitsong-title">
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='p__cormorant'>Submit your vibe to the VoteBox</motion.h1>
        </div>
            <form onSubmit={postSong} action="">
                <TextField name='clientName' required type={'text'} placeholder='Your Name' />
                <TextField name='songTitle' required type={'text'} placeholder='Song Title' />
                <TextField name='artist' required type={'text'} placeholder='Artist' />
                <TextField name='songUrl' required type={'text'} placeholder='Song Link' />
                <Button
                    type='submit'
                    size='medium'
                    startIcon={<SendOutlined />}
                    variant='text'
                >Submit</Button>
            </form></>)
}

export default function SubmitSong({ user, songs, setSongs }) {



    function postSong(e) {
        e.preventDefault()
        const clientName = e.target.clientName.value
        const songTitle = e.target.songTitle.value
        const artist = e.target.artist.value
        const songUrl = e.target.songUrl.value

        fetch('http://localhost:4000/songs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: user.id,
                clientName: clientName,
                songTitle: songTitle,
                artist: artist,
                songUrl: songUrl,
                votes: 0
            })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    setSongs([...songs, data])
                }
            })
    }


    let hasUserSubmitedSong = songs.find(song => song.userId === user.id)


    return (
        <div className='app__submitsong'>
            {hasUserSubmitedSong ? <SubmitedVibe /> : <SubmitForm postSong={postSong} />}
        </div>
    )
}

