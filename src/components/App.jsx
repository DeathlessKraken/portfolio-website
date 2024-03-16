import React from "react";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Footer from "./Footer";
import ExperienceContent from "./ExperienceContent";
import Projects from "../assets/Projects";

const theme = createTheme({
    typography: {
        allVariants: {
            color: '#F4F0E4'
        }
    }
});

const appContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2
}

export default function App(){
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xl" sx={appContainerStyle}>
                <AboutMe />

                <Project 
                    data={Projects[0]}
                    sx={{ height: '230px' }}
                />

                <Project 
                    data={Projects[1]}
                    sx={{ height: '230px', padding: '10px' }}
                />

                <ExperienceContent />

            </Container>
            <Footer />
        </ThemeProvider>
    );
}