import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import Webpack from "../assets/Webpack.svg?react";

function TechCard(props) {
    return(
        <Card raised sx={{ width: 'fit-content', height: 'fit-content', backgroundColor: 'rgb(18, 18, 18)', padding: '8px' }}>
            <CardMedia>
                <CardMedia 
                    component={props.img}
                    src={props.imgAlt}
                    alt={props.imgAlt}
                    sx={{display: 'flex', justifyContent: 'center', ...props.sx}}
                />
            </CardMedia>
            <CardContent>
                <Typography >
                    Hello
                </Typography>
            </CardContent>
        </Card>
    );
}

export default TechCard;