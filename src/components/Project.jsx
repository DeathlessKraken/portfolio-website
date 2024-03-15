import React, { useState } from "react";
import { Card, Link, CardActionArea, CardMedia, CardContent, Typography, createTheme } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Project(props) {
    const [isCollapsed, setCollapse] = useState(true);

    return (
        <Card raised sx={{ maxWidth: 345, height: 'fit-content', backgroundColor: 'rgb(32, 32, 32)' }}>
            <CardActionArea>
                <CardMedia 
                    component='img'
                    height={props.height}
                    width={props.width}
                    image={props.data.imgSrc}
                    alt={props.data.imgAlt}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {props.data.title}
                    </Typography>
                    <Typography variant="body2" color='#A9A9A9'>
                        {props.data.content}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Project;