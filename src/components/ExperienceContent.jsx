import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import TechCard from "./TechCard";
import VSCode from "../assets/VSCode.svg?react";
import Csharp from "../assets/Csharp.svg?react";
import Cplusplus from "../assets/Cplusplus.svg?react";
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
import { Paper, Stack, Typography } from "@mui/material";

const mobileStyle = {
    padding: 2.5, 
};

const defaultStyle = {
    padding: 5, 
    backgroundColor: 'rgb(40, 40, 45)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '100%',
    gap: 4
};

export default function ExperienceContent() {
    const imageSize = '50px';

    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Paper 
            elevation={5}
            sx={isMobile ? ({...defaultStyle, ...mobileStyle}) : ({...defaultStyle})}
        >

            <Stack alignItems='center'>
                <Typography variant="h5" color="primary.light">Languages</Typography>

                <TechCard 
                    name='HTML'
                    img={HTML}
                    imgAlt="H.T.M.L. icon"
                    experience={100}
                    sx={{ height: imageSize }}
                />
                <TechCard 
                    name='JavaScript'
                    img={Javascript}
                    imgAlt="Javascript icon"
                    experience={87}
                    sx={{ height: imageSize }}
                />
                
                <TechCard 
                    name='C++'
                    img={Cplusplus}
                    imgAlt="C plus plus icon"
                    experience={79}
                    sx={{ height: imageSize }}
                />  

                <TechCard 
                    name='Python'
                    img={Python}
                    imgAlt="Python icon"
                    experience={71}
                    sx={{ height: imageSize }}
                />

                <TechCard 
                    name='Java'
                    img={Java}
                    imgAlt="Java icon"
                    experience={65}
                    sx={{ height: imageSize }}
                />

                <TechCard 
                    name='C#'
                    img={Csharp}
                    imgAlt="C sharp icon"
                    experience={56}
                    sx={{ height: imageSize }}
                />
            </Stack>
            <Stack alignItems='center'>
                <Typography variant="h5" color="primary.light">Frameworks</Typography>

                <TechCard 
                    name='React'
                    img={ReactLogo}
                    imgAlt="React icon"
                    experience={92}
                    sx={{ height: imageSize }}
                />

                <TechCard 
                    name='Node.JS'
                    img={NodeJSLogo}
                    imgAlt="Node J.S. icon"
                    experience={87}
                    sx={{ height: imageSize }}
                />

                <TechCard 
                    name='PostgreSQL'
                    img={PostgreSQL}
                    imgAlt="Postgre S.Q.L. icon"
                    experience={74}
                    sx={{ height: imageSize }}
                />
            </Stack>
            <Stack alignItems='center'>
                <Typography variant="h5" color="primary.light">Utilities</Typography>
                
                <TechCard 
                    name='Git'
                    img={Git}
                    imgAlt="Git icon"
                    experience={94}
                    sx={{ height: imageSize }}
                />

                
                <TechCard 
                    name='Markdown'
                    img={Markdown}
                    imgAlt="Markdown icon"
                    experience={100}
                    sx={{ height: imageSize }}
                />

                <TechCard 
                    name='VS Code'
                    img={VSCode}
                    imgAlt="Visual Studio Code icon"
                    experience={97}
                    sx={{ height: imageSize }}
                />

                <TechCard 
                    name='Postman'
                    img={Postman}
                    imgAlt="Postman icon"
                    experience={80}
                    sx={{ height: imageSize }}
                />
            </Stack>
        </Paper>
    );
}