import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import React from 'react';

export default function ProjectDialog(props) {

    function handleClose() {
        props.onClose();
    }

    return (    
        <Dialog
            maxWidth='sm'
            open={props.open}
            onClose={handleClose}
            aria-labelledby='update-me'
            PaperProps={{
                sx: {
                    bgcolor: 'rgb(40, 40, 45)',
                },
            }}
        >
            <DialogTitle>
                {props.data.title}
            </DialogTitle>
            <DialogContent sx={{ paddingBottom: 0 }}>
                <Typography>
                    {props.data.content}
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Button>SEE PROJECT</Button>
                    <Button>SEE DOCUMENTATION</Button>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}
