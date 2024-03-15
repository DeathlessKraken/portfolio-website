import React from "react";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Footer from "./Footer";
import TechCard from "./TechCard";
import Projects from "../assets/Projects";
import VSCode from "../assets/VSCode.svg?react";

const theme = createTheme({
    typography: {
        allVariants: {
            color: '#F4F0E4'
        }
    }
});

export default function App(){
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xl" sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignContent: 'flex-end' }}>
                <AboutMe />

                <Project 
                    data={Projects[0]}
                    sx={{ height: '230px' }}
                />

                <Project 
                    data={Projects[1]}
                    sx={{ height: '230px', padding: '10px' }}
                />

                <TechCard 
                    img={VSCode}
                    imgAlt="Visual Studio Code icon"
                    sx={{ height: '140px' }}
                />

            </Container>
            <Footer />
        </ThemeProvider>
    );
}