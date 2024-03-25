import React from "react";
import { ThemeProvider, createTheme, Box, Container, useMediaQuery } from "@mui/material";
import Landing from "./Landing";
import ProjectArea from "./projects/ProjectArea";
import ExperienceContent from "./ExperienceContent";
import Sandbox from "./Sandbox";
import Footer from "./Footer";
import styles from "./app.module.css";

let theme = createTheme({
    typography: {
        allVariants: {
            color: '#F4F0E4'
        }
    } 
});

theme = createTheme(theme, {
    palette: {
        blue: {
            main: '#428cda',
            light: '#6fade4',
            dark: '#356eba',
        },
        white: {
            main: '#c38600',
            light: '#d0a83c',
            dark: '#bc6e00',
            contrastText: '#f4f0e4',
        },
        darkText: {
            main: '#1c1c1c',
            light: '#5b5b5b',
            dark: '#000000',
            contrastText: '#1c1c1c',
        },
    },
});

export default function App(){
    const isMobile = useMediaQuery('(max-width:600px)');
    const isDesktop = useMediaQuery('(min-width:840px)');

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xl">
                <Box className={styles.app}> 
                    <Landing />
                    <ProjectArea />
                    <ExperienceContent />
                    <Sandbox isDesktop={isDesktop}/>
                </Box>
            </Container>
            <Footer />
        </ThemeProvider>
    );
}