import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@material-ui/core';
import { HowToVote } from '@material-ui/icons';
import './VoteBox.css'
import AlertDialog from './AlertDialog';
import { useEffect, useState } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const tableStyling = {
    padding: '0px 0px'
}


export default function CustomizedTables({ songs, setSongs, user }) {
    const [userVotedSongs, setUserVotedSongs] = useState(null)


    function sendVotedSong(id, songId, votes) {
        console.log("songId:", songId)

        fetch('http://localhost:4000/votedsongs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                songId: songId,
                votes: votes
            })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    setUserVotedSongs(data.user)
                    setSongs(data.songs)
                }
            })
    }

    useEffect(() => {
        fetch(`http://localhost:4000/users/${user.id}`).then(resp => resp.json())
            .then(userFromServer =>
                setUserVotedSongs(userFromServer)
            )
    }, [])

    songs.sort((a, b) => {
        return b.votes - a.votes;
    })


    let disableVoting = userVotedSongs?.votedSongs.map(vote => vote.songId)


    return (
        <TableContainer sx={{
            border: '1px solid black',
            width: 'max-content',
            height: 'max-content',
            padding: '1',
            marginLeft: 'auto',
            marginRight: 'auto'
        }} className='app__votebox-table' component={Paper}>
            <Table sx={{ width: 800 }} aria-label="customized table">
                <TableHead style={{ background: 'white' }}>
                    <TableRow sx={{ height: '60px' }} className='app__votebox-expl'>
                        <StyledTableCell sx={{ ...tableStyling, width: 100 }}><p className='tableEl'>Song Title</p></StyledTableCell>
                        <StyledTableCell sx={{ ...tableStyling, width: 100 }} align="right"><p className='tableEl'>Artist Name</p></StyledTableCell>
                        <StyledTableCell sx={{ ...tableStyling, width: 100 }} align="right"><p className='tableEl'>Song Link</p></StyledTableCell>
                        <StyledTableCell sx={{ ...tableStyling, width: 100 }} align="right"><p className='tableEl'>Client Name</p></StyledTableCell>
                        <StyledTableCell sx={{ ...tableStyling, width: 100 }} align="right"><p className='tableEl'>Vote/Delete Vibe</p></StyledTableCell>
                        <StyledTableCell sx={{ ...tableStyling, width: 100 }} align="right"><p className='tableEl'>Vote Nr.</p></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {songs.map((song) => (
                        song.userId === user?.id ?
                            <StyledTableRow >
                                <StyledTableCell component="th" scope="row">
                                    <h3>{song.songTitle}</h3>
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    <h3>{song.artist}</h3>
                                </StyledTableCell>
                                <StyledTableCell align="right"><a href={song.songUrl} target="_blank">
                                    <Button variant='outlined'>Link</Button></a></StyledTableCell>
                                <StyledTableCell align="right"><h3>{song.clientName}</h3></StyledTableCell>
                                <StyledTableCell align="right"><div>
                                    <AlertDialog userVotedSongs={userVotedSongs} songs={songs} setSongs={setSongs} />
                                </div></StyledTableCell>
                                <StyledTableCell align="right"><h3 className='vote-nr'>{song.votes}</h3></StyledTableCell>
                            </StyledTableRow>
                            : <StyledTableRow >
                                <StyledTableCell component="th" scope="row">
                                    <h3>{song.songTitle}</h3>
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    <h3>{song.artist}</h3>
                                </StyledTableCell>
                                <StyledTableCell align="right"><a href={song.songUrl} target="_blank">
                                    <Button variant='outlined'>Link</Button></a></StyledTableCell>
                                <StyledTableCell align="right"><h3>{song.clientName}</h3></StyledTableCell>
                                <StyledTableCell align="right"><div>
                                    <Button className='voteBtn' disabled={disableVoting?.includes(song.id)
                                    } onClick={() => {
                                        // voteSong(song.id, song.votes)
                                        sendVotedSong(user.id, song.id, song.votes)
                                    }}
                                        variant='outlined'
                                        endIcon={<HowToVote />}
                                    >Vote</Button>
                                </div></StyledTableCell>
                                <StyledTableCell align="right"><h3 className='vote-nr'>{song.votes}</h3></StyledTableCell>
                            </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}

