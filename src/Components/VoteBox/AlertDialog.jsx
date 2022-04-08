import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { DeleteForeverOutlined } from '@material-ui/icons';

export default function AlertDialog({ userVotedSongs, songs, setSongs }) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    function deleteSong() {
        let foundId = songs?.find(song => song.userId === userVotedSongs?.id)
        let deleted = songs.filter(song => song.id !== foundId.id)

        fetch(`http://localhost:4000/songs/${foundId.id}`, {
            method: 'DELETE',
        }).then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert('Oops, something went wrong.')
                } else {
                    setSongs(deleted)
                }
            })
    }


    return (
        <div>
            <Button
                endIcon={<DeleteForeverOutlined />}
                color='error' variant="outlined" onClick={handleClickOpen}>
                DELETE
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you wanna delete your Vibe?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={() => {
                        handleClose()
                        deleteSong()
                    }} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
