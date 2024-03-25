import React, { useState } from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import ProjectDialog from "./ProjectDialog";
import styles from './project.module.css';

function Project(props) {
    const [open, setOpen] = useState(false);

    function handleClick() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <>
        <ProjectDialog open={open} onClose={handleClose} data={props.data} />
        <Card raised className={styles.project}>
            <CardActionArea onClick={handleClick}>
                <CardMedia component='div' className={styles.projectMedia}>
                    <CardMedia 
                        component='img'
                        image={props.data.imgSrc}
                        alt={props.data.imgAlt}
                        height='230px'
                        sx={{...props.sx}}
                    />
                </CardMedia>
                <CardContent className={styles.projectContent}>
                    <Typography gutterBottom noWrap variant="h5">
                        {props.data.title}
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color='#A9A9A9' 
                        className='truncate'
                        sx={{ fontSize: 16 }}
                    >
                        {props.data.content}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </>
    );
}

export default Project;