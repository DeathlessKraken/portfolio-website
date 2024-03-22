import React from "react";
import { Container, Grid, ThemeProvider, createTheme, useMediaQuery, Stack, Box, Typography } from "@mui/material";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Footer from "./Footer";
import ExperienceContent from "./ExperienceContent";
import Projects from "../assets/Projects";
import SwipeUpIcon from '@mui/icons-material/SwipeUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Sandbox from "./Sandbox";

const theme = createTheme({
    typography: {
        allVariants: {
            color: '#F4F0E4'
        }
    }, 

});

const appContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 4,
    justifyContent: 'center'
}

export default function App(){
    const isTouch = useMediaQuery('(pointer: coarse)');

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xl" sx={appContainerStyle}> 
                <Stack 
                    width={{ xs: '100%', md: '75%', lg: '50%'}}
                    alignItems='center'
                    marginBottom='20vh'
                >
                    <Box 
                        display='flex' 
                        flexDirection='column'
                        justifyContent='center' 
                        alignItems='center' 
                        minHeight='80vh' 
                        width='100%'
                    >
                        <Typography variant='body' >🚧 This site is under construction! 🚧</Typography>
                        <AboutMe />
                    </Box>
                    {isTouch ? 
                        <SwipeUpIcon sx={{fontSize: 60}}/> : 
                        <KeyboardDoubleArrowDownIcon sx={{fontSize: 60}}/>
                    }
                </Stack>

                <Grid container 
                    columnSpacing={{ xs: 2 }}
                    rowSpacing={{ xs: 2 }} 
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    <Grid item xs={4} md={3} >
                        <Project 
                            data={Projects[0]}
                        />
                    </Grid>
                    <Grid item xs={4} md={3} >
                        <Project 
                            data={Projects[1]}
                            sx={{overflow: 'visible', padding: 3}}
                        />
                    </Grid>
                    <Grid item xs={4} md={3} >
                        <Project 
                            data={Projects[0]}
                        />
                    </Grid>
                    <Grid item xs={4} md={3} >
                        <Project 
                            data={Projects[1]}
                            sx={{overflow: 'visible', padding: 3 }}
                        />
                    </Grid>
                    <Grid item xs={4} sm={8} md={12}>
                        <ExperienceContent />
                    </Grid>
                    <Grid item xs>
                        <Sandbox />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </ThemeProvider>
    );
}