import React, { useState } from "react";
import { Card, Link, CardActionArea, CardMedia, CardContent, Typography, createTheme } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Project(props) {
    const [isCollapsed, setCollapse] = useState(true);

    return (
        <Card raised sx={{ maxWidth: 345, backgroundColor: 'rgb(18, 18, 18)' }}>
            <CardActionArea>
                <CardMedia 
                    component='img'
                    height='200'
                    image={props.data.imgSrc}
                    alt='Sean holding a Guitar Hero Controller'
                />
                <CardContent>
                    <Typography variant="h5">
                        {props.data.title}
                    </Typography>
                    <Typography variant="body2">
                        {props.data.content}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Project;