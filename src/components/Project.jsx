import React, { useState } from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

function Project(props) {
    const [isCollapsed, setCollapse] = useState(true);

    return (
        <Card raised sx={{ backgroundColor: 'rgb(32, 32, 32)', display: "flex", flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardActionArea>
                <CardMedia component='div' sx={{ overflow: 'hidden', borderBottom: 2, borderColor: '#80CEFF', borderRadius: 2 }}>
                    <CardMedia 
                        component='img'
                        image={props.data.imgSrc}
                        alt={props.data.imgAlt}
                        height='230px'
                        sx={{...props.sx}}
                    />
                </CardMedia>
                <CardContent sx={{ display: "flex", flexDirection: 'column', justifyContent: 'space-around'}}>
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