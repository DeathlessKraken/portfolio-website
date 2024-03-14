import { Box, Grid, Stack, Avatar, Link, Icon } from "@mui/material";
import React from "react";

function Header() {
    return (
        <header>
            <Box>
                <h1>Sean Brown</h1>
                <Box className="darkerText">
                    <p>Web Designer</p>
                    <p>Software Developer</p>
                </Box>
            </Box>
            <Grid container columns={2} columnSpacing={2} style={{ width: 'fit-content' }}>
                <Grid item xs="auto" display="flex" alignItems="center" justifyContent="space-around">
                    <Avatar 
                        alt="Profile picture of a handsome dude"
                        src="/src/assets/img/pfp.jpeg"
                        sx={{ width: 150, height: 150 }}
                    />
                </Grid>
                <Grid item xs="auto">
                    <Stack alignItems='center' justifyContent="space-around" height={1}>
                        <Link href="https://github.com/SBSoftwareDev">
                            <Icon className="fa-brands fa-github" />
                        </Link>
                        <Link href="https://stackoverflow.com/users/3557315/">
                            <Icon className="fa-brands fa-stack-overflow" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/sean-brown-a98a512b3/">
                            <Icon className="fa-brands fa-linkedin" />
                        </Link>
                    </Stack>
                </Grid>
            </Grid>
        </header>
    );
}

export default Header;