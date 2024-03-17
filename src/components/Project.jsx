import React, { useState } from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

function Project(props) {
    const [isCollapsed, setCollapse] = useState(true);

    return (
        <Card raised sx={{ maxWidth: 345, height: 370, backgroundColor: 'rgb(32, 32, 32)' }}>
            <CardActionArea>
                <CardMedia 
                    component='img'
                    image={props.data.imgSrc}
                    alt={props.data.imgAlt}
                    sx={{...props.sx, borderBottom: 2, borderColor: '#80CEFF', borderRadius: 2 }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
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