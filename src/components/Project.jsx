import React from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import styles from './project.module.css';

function Project(props) {
    return (
        <Card raised className={styles.project}>
            <CardActionArea>
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
    );
}

export default Project;