import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import VSCode from "../assets/VSCode.svg?react";
import Webpack from "../assets/Webpack.svg?react";

function TechCard(props) {
    return(
        <Card raised sx={{ maxWidth: 345, height: 'fit-content', backgroundColor: 'rgb(18, 18, 18)', padding: '8px' }}>
            <CardMedia sx={{ display: 'flex', justifyContent: 'center'}}>
                <VSCode />
                <Webpack />
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