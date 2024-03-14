import React from "react";
import AboutMe from "./AboutMe";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import Project from "./Project";
import Footer from "./Footer";

const theme = createTheme({
    typography: {
        allVariants: {
            color: '#F4F0E4'
        }
    }
});

const projects = [
    {
        title: "Guitar Hero Light Display",
        imgSrc: "./images/gh.jpg",
        imgRef: "https://www.youtube.com/watch?v=oR7VQzklVX0",
        content: "A floodlight display built around the videogame Guitar Hero III. "
            + "Any PS2 Guitar Hero controller can connect to the display. "
            + "The display itself connects to any standard 120v outlet, and to a PC via USB."
    },
    {
        title: "The High Ground - Tavern Recipes",
        imgSrc: "./images/THG_logo.png",
        imgRef: "",
        content: "A fictional tavern hosting a collection of food items inspired by the medieval and fantasy genre, such as "
            + "pigeon pie and lemon cakes from Game of Thrones, "
            + "Lembas from Lord of the Rings, and Butter Beer "
            + "from Harry Potter."
    }
];

function App(){
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xl" sx={{ display: 'flex', gap: 2 }}>
                <AboutMe />
                <Project data={projects[0]} height='200'/>
                <Project data={projects[1]} height='250'/>
            </Container>
            <Footer />
        </ThemeProvider>
    );
}

export default App;