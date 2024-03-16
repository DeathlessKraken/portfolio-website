import React from "react";
import TechCard from "./TechCard";
import VSCode from "../assets/VSCode.svg?react";
import Webpack from "../assets/Webpack.svg?react";
import Arduino from "../assets/Arduino.svg?react";
import Cplusplus from "../assets/Cplusplus.svg?react";
import ESLint from "../assets/ESLint.svg?react";
import Git from "../assets/Git.svg?react";
import HTML from "../assets/HTML.svg?react";
import Java from "../assets/Java.svg?react";
import Javascript from "../assets/Javascript.svg?react";
import Markdown from "../assets/Markdown.svg?react";
import NodeJSLogo from "../assets/NodeJS.svg?react";
import PostgreSQL from "../assets/PostgreSQL.svg?react";
import Postman from "../assets/Postman.svg?react";
import Python from "../assets/Python.svg?react";
import ReactLogo from "../assets/React.svg?react";
import { Paper } from "@mui/material";

export default function ExperienceContent() {
    return (
        <Paper 
            elevation={5}
            sx={{ 
                padding: 5, 
                backgroundColor: 'rgb(40, 40, 45)',
                display: 'flex',
                flexWrap: 'wrap',
                width: '100%'
            }}
        >

            <TechCard 
                name='Arduino'
                img={Arduino}
                imgAlt="Arduino icon"
                experience={6}
                sx={{ height: '100px' }}
            />

            <TechCard 
                name='C++'
                img={Cplusplus}
                imgAlt="C plus plus icon"
                experience={7}
                sx={{ height: '100px' }}
            />

            <TechCard 
                name='ESLint'
                img={ESLint}
                imgAlt="E.S. lint icon"
                experience={4}
                sx={{ height: '100px' }}
            />

            <TechCard 
                name='Git'
                img={Git}
                imgAlt="Git icon"
                experience={8}
                sx={{ height: '100px' }}
            />

            <TechCard 
                name='HTML'
                img={HTML}
                imgAlt="H.T.M.L. icon"
                experience={10}
                sx={{ height: '100px' }}
            />

            <TechCard 
                name='Java'
                img={Java}
                imgAlt="Java icon"
                experience={6}
                sx={{ height: '100px' }}
            />

            <TechCard 
                name='JavaScript'
                img={Javascript}
                imgAlt="Javascript icon"
                experience={8}
                sx={{ height: '100px' }}
            />

            <TechCard 
                name='Markdown'
                img={Markdown}
                imgAlt="Markdown icon"
                experience={10}
                sx={{ height: '100px' }}
            />

            <TechCard 
                name='Node.JS'
                img={NodeJSLogo}
                imgAlt="Node J.S. icon"
                experience={7}
                sx={{ height: '100px' }}
            />

            <TechCard 
                name='PostgreSQL'
                img={PostgreSQL}
                imgAlt="Postgre S.Q.L. icon"
                experience={5}
                sx={{ height: '100px' }}
            />

            <TechCard 
                name='Postman'
                img={Postman}
                imgAlt="Postman icon"
                experience={4}
                sx={{ height: '100px' }}
            />

            <TechCard 
                name='Python'
                img={Python}
                imgAlt="Python icon"
                experience={6}
                sx={{ height: '100px' }}
            />

            <TechCard 
                name='React'
                img={ReactLogo}
                imgAlt="React icon"
                experience={9}
                sx={{ height: '100px' }}
            />

            <TechCard 
                name='VS Code'
                img={VSCode}
                imgAlt="Visual Studio Code icon"
                experience={9}
                sx={{ height: '100px' }}
            />

            <TechCard 
                name='Webpack'
                img={Webpack}
                imgAlt="Webpack icon"
                experience={4}
                sx={{ height: '100px' }}
            />

        </Paper>
    );
}