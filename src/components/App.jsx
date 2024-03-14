import React from "react";
import AboutMe from "./AboutMe";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import Project from "./Project";

const theme = createTheme({
    typography: {
        allVariants: {
            color: 'white'
        }
    }
});

const projects = [
    {
        title: "Guitar Hero Light Display",
        imgSrc: "/src/assets/img/gh.jpg",
        imgRef: "https://www.youtube.com/watch?v=oR7VQzklVX0",
        content: "A floodlight display built around the videogame Guitar Hero III. "
            + "Any PS2 Guitar Hero controller can connect to the display. "
            + "The display itself connects to any standard 120v outlet, and to a PC via USB."
    },
    {
        title: "The High Ground - Tavern Recipes",
        imgSrc: "/src/assets/img/THG_logo.png",
        imgRef: "",
        content: "A collection of food items inspired by the medieval and fantasy genre, such as "
            + "pigeon pie and lemon cakes from <span className='accentText'>Game of Thrones</span>, "
            + "Lembas from <span className='accentText'>Lord of the Rings</span>, and Butter Beer "
            + "from <span className='accentText'>Harry Potter</span>"
    }
];

function App(){
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <AboutMe />
                <Project data={projects[0]}/>
            </Container>
        </ThemeProvider>
    );
}

export default App;