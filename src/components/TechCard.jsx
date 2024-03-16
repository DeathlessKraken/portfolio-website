import { Box, Paper, CardMedia, Typography, LinearProgress, Stack } from "@mui/material";
import React from "react";

const paperStyle = {
    display: 'flex',
    width: '450px', 
    height: 'fit-content', 
    backgroundColor: 'rgb(18, 18, 18)', 
    padding: '16px',
    gap: '8px',
    margin: '6px'
};

function TechCard(props) {
    return(
        <Paper elevation={5} sx={paperStyle}>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <CardMedia 
                    component={props.img}
                    src={props.imgAlt}
                    alt={props.imgAlt}
                    sx={{display: 'flex', justifyContent: 'center', ...props.sx}}
                />
            </Box>
            <Stack justifyContent='space-around' sx={{ width: '100%'}}>
                <Typography variant="h5">
                    {props.name}
                </Typography>
                <Box sx={{ width: '100%' }}>
                    <LinearProgress 
                        variant="determinate" 
                        value={props.experience * 10} 
                        color="success"
                        sx={{ height: 10, borderRadius: 5 }}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                        <Typography variant="h5" color='#D3D3D3'>1</Typography>
                        <Typography variant="h5" color='#D3D3D3'>10</Typography>
                    </Box>
                </Box>
            </Stack>
        </Paper>
    );
}

export default TechCard;