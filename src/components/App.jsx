import React from "react";
import { ThemeProvider, createTheme, Box, Container } from "@mui/material";
import Landing from "./Landing";
import ProjectArea from "./ProjectArea";
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
        white: theme.palette.augmentColor({
            color: {
                main: '#c38600',
                light: '#d0a83c',
                dark: '#bc6e00',
                contrastText: '#f4f0e4',
            },
            name: 'white',
        }),
    },
});

export default function App(){
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xl">
                <Box className={styles.app}> 
                    <Landing />
                    <ProjectArea />
                    <ExperienceContent />
                    <Sandbox />
                </Box>
            </Container>
            <Footer />
        </ThemeProvider>
    );
}