import { Box, Paper, CardMedia, Typography, LinearProgress, Stack } from "@mui/material";
import React from "react";

const paperStyle = {
    display: 'flex',
    width: '100%',
    backgroundColor: 'rgb(18, 18, 18)', 
    padding: '16px',
    gap: '8px',
    margin: '6px'
};

function TechCard(props) {
    return(
        <Paper elevation={5} sx={paperStyle}>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CardMedia 
                    component={props.img}
                    src={props.imgAlt}
                    alt={props.imgAlt}
                    sx={{display: 'flex', justifyContent: 'center', ...props.sx}}
                />
            </Box>
            <Stack justifyContent='space-around' width='100%'>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Typography variant="h6">
                        {props.name}
                    </Typography> 
                    <Typography variant="body" color='#D3D3D3'>{props.experience+'%'}</Typography>
                </Box>
                <Box sx={{ width: '100%' }}>
                    <LinearProgress 
                        variant="determinate" 
                        value={props.experience} 
                        color="success"
                        sx={{ height: 10, borderRadius: 5 }}
                    />
                </Box>
            </Stack>
        </Paper>
    );
}

export default TechCard;