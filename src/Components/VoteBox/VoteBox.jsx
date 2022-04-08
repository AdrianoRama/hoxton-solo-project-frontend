import React from 'react'
import Timer from '../Timer/Timer'
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
            </div>
        </div>
    )
}
