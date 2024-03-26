import React from "react";
import styles from './aboutme.module.css';

/*
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
*/

function AboutMe() {

    return (
        <div className={styles.aboutMe}>
            <div className={styles.aboutHeader}>
                <div className={styles.aboutHeadText}>
                    <h1>Sean Brown</h1> 
                    <h4>Web Designer</h4> 
                    <h4>Software Developer</h4> 
                </div>
                <div className={styles.pfpContainer}>
                    <img className={styles.pfp} src="./images/pfp.jpeg" alt="Profile picture of a handsome dude" />
                </div>
            </div>
            <div className={styles.aboutContent}>
                <p>Hey there! I'm Sean, a computer scientist and software developer. 
                I attended <span>Portland State University</span> where I developed a healthy foundation in CS. 
                I spend my free time in the garage, on my SV650, or in the kitchen!</p>

                <p>Go on to talk about your CS career and professional life...</p>
            </div>
            <div className={styles.aboutNav}>
                <a href="https://github.com/SBSoftwareDev">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://stackoverflow.com/users/3557315/">
                    <i className="fa-brands fa-stack-overflow"></i>
                </a>
                <a href="https://www.linkedin.com/in/sean-brown-a98a512b3/">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </div>
    );
}

export default AboutMe;