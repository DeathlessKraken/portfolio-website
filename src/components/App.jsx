import React from "react";
import { ThemeProvider, createTheme, Box, Container } from "@mui/material";
import Landing from "./Landing";
import ProjectArea from "./ProjectArea";
import ExperienceContent from "./ExperienceContent";
import Sandbox from "./Sandbox";
import Footer from "./Footer";
import styles from "./app.module.css";

const theme = createTheme({
    typography: {
        allVariants: {
            color: '#F4F0E4'
        }
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