import { Button } from '@material-ui/core'
import { HowToVote, WhereToVote } from '@material-ui/icons'
import React, { useEffect, useRef, useState } from 'react'
import Timer from '../Timer/Timer'
import './VoteBox.css'

export default function VoteBox() {

    return (
        <div className='app__votebox'>
            <div className="app__votebox-title">
                <h1 className='p__cormorant'>Time left for voting your favorite vibe:</h1>
            </div>
            <Timer />
            <div className="app__votebox-table">
                <div className="app__votebox-expl">
                    <p>Song Title</p>
                    <p>Artist Name</p>
                    <p>Song Link</p>
                    <p>Name of Client</p>
                    <p>Vote</p>
                </div>
                <div className="app__votebox-row">
                    <h2>DODO</h2>
                    <h2>Tayc</h2>
                    <Button
                        variant='outlined'
                    >Link</Button>
                    <h2> Adriano</h2>
                    <Button
                        variant='outlined'
                        endIcon={<HowToVote />}
                    >Vote</Button>
                </div>
            </div>
        </div>
    )
}
