import { Paper, Box, Grid, Avatar, Link, Icon, Stack, Typography, Divider } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

function AboutMe(props) {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Paper 
            elevation={5} 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '14px',
                backgroundColor: '#244188',
                maxWidth: '600px',
            }}
        >
            <Stack 
                divider={<Divider variant="middle" flexItem/>} 
                height='100%'
                justifyContent='space-around'
                spacing={2}
            >
            <Box display='flex' flexDirection='row' justifyContent={isMobile ? 'space-between' : 'space-around'} alignItems='center'>
                <Box sx={{ margin: '6px' }}>
                    <Typography variant="h3" sx={{ lineHeight: 1 }}>
                        Sean Brown
                    </Typography>
                    <Box className="darkerText">
                        <Typography variant="p" color='primary.light'>
                            Web Designer
                        </Typography>
                        <Typography color='primary.light'>
                            Software Developer
                        </Typography>
                    </Box>
                </Box>
                <Grid container columns={2} spacing={2} sx={{ width: 'fit-content' }} direction={isMobile ? 'column' : 'row'} >
                    <Grid item xs="auto" display="flex" alignItems="center" justifyContent="space-around">
                        <Avatar 
                            alt="Profile picture of a handsome dude"
                            src="./images/pfp.jpeg"
                            sx={{ width: 150, height: 150, boxShadow: 7 }}
                        />
                    </Grid>
                    <Grid item xs="auto">
                        <Stack 
                            alignItems='center' 
                            justifyContent="space-around" 
                            height={1}
                            direction={isMobile ? 'row' : 'column'}
                        >
                            <Link href="https://github.com/SBSoftwareDev">
                                <Icon className="fa-brands fa-github lighterText" />
                            </Link>
                            <Link href="https://stackoverflow.com/users/3557315/">
                                <Icon className="fa-brands fa-stack-overflow lighterText" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/sean-brown-a98a512b3/">
                                <Icon className="fa-brands fa-linkedin lighterText" />
                            </Link>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <Typography variant="p" color='#D3D3D3' sx={{margin: '6px', lineHeight: 1.5, fontSize: 18}} >
                Hey there! I'm Sean, a computer scientist and software developer. 
                I attended 
                <Typography variant="p" color='#cfd82d' sx={{lineHeight: 1.5, fontSize: 18}}> Portland State University </Typography> 
                where I developed a healthy foundation in CS. 
                I spend my free time in the garage, on my SV650, or in the kitchen!
            </Typography>
            </Stack>
        </Paper>
    );
}

export default AboutMe;