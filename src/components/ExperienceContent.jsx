import React from "react";
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
import { Grid, Paper, Stack, Typography } from "@mui/material";

export default function ExperienceContent() {
    const imageSize = '50px';

    return (
        <Paper 
            elevation={5}
            sx={{ 
                backgroundColor: 'rgb(40, 40, 45)',
                paddingY: 2,
                paddingX: 1
            }}
        >
            <Grid container 
                columns={{ xs: 4, md: 12}}
            >
                <Grid item 
                    xs={4} 
                    sx={{ paddingBottom: 2, display: 'flex', justifyContent: 'center' }} 
                >
                    <Stack alignItems='center' width={{ xs: '95%', sm: '75%', md: '90%' }}>
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
                </Grid>

                <Grid item 
                    xs={4} 
                    sx={{ paddingBottom: 2, display: 'flex', justifyContent: 'center' }} 
                >
                    <Stack alignItems='center' width={{ xs: '95%', sm: '75%', md: '90%' }}>
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
                </Grid>

                <Grid item 
                    xs={4} 
                    sx={{ paddingBottom: 2, display: 'flex', justifyContent: 'center' }} 
                >
                    <Stack alignItems='center' width={{ xs: '95%', sm: '75%', md: '90%' }}>
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
                </Grid>
            </Grid>
        </Paper>
    );
}