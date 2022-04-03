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



export default function CustomizedTables({ songs }) {
    return (
        <TableContainer style={{ background: 'darkgray' }} className='app__votebox-table' component={Paper}>
            <Table sx={{ maxWidth: 2400 }} aria-label="customized table">
                <TableHead style={{ background: 'white' }}>
                    <TableRow className='app__votebox-expl'>
                        <StyledTableCell>Song Title</StyledTableCell>
                        <StyledTableCell align="right">Artist Name</StyledTableCell>
                        <StyledTableCell align="right">Song Link</StyledTableCell>
                        <StyledTableCell align="right">Name of Client</StyledTableCell>
                        <StyledTableCell align="right">Vote</StyledTableCell>
                        <StyledTableCell align="right">Vote Nr.</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {songs.map((song) => (
                        <StyledTableRow ><h3>{song.songTitle}</h3><StyledTableRow />
                            <StyledTableCell component="th" scope="row">
                                <h3>{song.artist}</h3>
                            </StyledTableCell>
                            <StyledTableCell align="right"><a href={song.songUrl} target="_blank">
                                <Button variant='outlined'>Link</Button></a></StyledTableCell>
                            <StyledTableCell align="right"><h3>{song.clientName}</h3></StyledTableCell>
                            <StyledTableCell align="right"><Button disabled variant='outlined' endIcon={<HowToVote />}>Vote</Button></StyledTableCell>
                            <StyledTableCell align="right"><h3 className='vote-nr'>{song.votes}</h3></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}

