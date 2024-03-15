import React from "react";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Footer from "./Footer";
import TechCard from "./TechCard";
import Projects from "../assets/Projects";

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
            <Container maxWidth="xl" sx={{ display: 'flex', gap: 2 }}>
                <AboutMe />

                { generateProjects(Projects) }

                <TechCard />
            </Container>
            <Footer />
        </ThemeProvider>
    );
}

function generateProjects(projectsList) {
    return projectsList.map(project => {
        return (
            <Project 
                key={project.id}
                data={project}
                height={project.id === 1 ? '250px' : '200px'}
                width='fit-content'
            />
        );
    });
}