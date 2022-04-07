import { Button } from '@material-ui/core'
import { HowToVote, WhereToVote } from '@material-ui/icons'
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import Timer from '../Timer/Timer'
import AlertDialog from './AlertDialog'
import CustomizedTables from './Table'
import './VoteBox.css'

export default function VoteBox({ songs, setSongs, user, setAnnouncement, announcement }) {

    let winner = {}

    function getWinner() {
        let votes = songs.map(song => song.votes)
        votes = votes.sort(function (a, b) { return b - a })
        for (const song of songs) {
            if (song.votes === votes[0]) winner = song
        }

        return winner
    }

    getWinner()


    if (announcement) {
        return (<div className='app__votebox'>
            <div className="app__votebox-title">
                <div className="center-winner">
                    <h1 className='announce'>The winner is: <span className='winner'>{winner.artist} - {winner.songTitle}</span></h1>
                    <h1 className='announce'>chosen by <span className='winner'>{winner.clientName}</span></h1>
                </div>
            </div>
        </div>)
    }

    return (
        <div className='app__votebox'>
            <div className="app__votebox-title">
                <h1
                    className='p__cormorant'>Time left for voting your favorite vibe:</h1>
            </div>
            <Timer setAnnouncement={setAnnouncement} />
            <div className="app__votebox-table">
                <CustomizedTables songs={songs} setSongs={setSongs} user={user} />

                {/* <div className="app__votebox-expl">
                    <p>Song Title</p>
                    <p>Artist Name</p>
                    <p>Song Link</p>
                    <p>Name of Client</p>
                    <p>Votes</p>
                </div>
                {songs.map(song => {
                    if (song.userId === user?.id) {
                        return (<div key={song.id} className="app__votebox-row">
                            <h3>{song.songTitle}</h3>
                            <h3>{song.artist}</h3>
                            <a href={song.songUrl} target="_blank">
                                <Button className='linkBtn'
                                    variant='outlined'
                                >Link</Button>
                            </a>
                            <h3>{song.clientName}</h3>
                            <div>
                                <AlertDialog userVotedSongs={userVotedSongs} songs={songs} setSongs={setSongs} />
                            </div>
                            <h3 className='vote-nr'>{song.votes}</h3>
                        </div>)
                    } return (<div key={song.id} className="app__votebox-row">
                        <h3>{song.songTitle}</h3>
                        <h3>{song.artist}</h3>
                        <a href={song.songUrl} target="_blank">
                            <Button className='linkBtn'
                                variant='outlined'
                            >Link</Button>
                        </a>
                        <h3>{song.clientName}</h3>
                        <Button className='voteBtn' disabled={disableVoting?.includes(song.id)
                        } onClick={() => {
                            voteSong(song.id, song.votes)
                            sendVotedSong(user.id, song.id)
                        }}
                            variant='outlined'
                            endIcon={<HowToVote />}
                        >Vote</Button>
                        <h3 className='vote-nr'>{song.votes}</h3>
                    </div>)
                })} */}
            </div>
        </div>
    )
}
