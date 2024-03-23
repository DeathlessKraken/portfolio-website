import React from 'react';
import { Stack, Box, Typography, useMediaQuery } from '@mui/material';
import SwipeUpIcon from '@mui/icons-material/SwipeUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import AboutMe from './AboutMe';
import styles from './landing.module.css';

export default function Landing() {
    const isTouch = useMediaQuery('(pointer: coarse)');

    return (
      <Stack 
          width={{ xs: '100%', md: '75%', lg: '50%'}}
          className={styles.landing}
      >
          <Box className={styles.landingSpace}>
              <Typography variant='body' >🚧 This site is under construction! 🚧</Typography>
              <AboutMe />
          </Box>
          
          {isTouch ? 
              <SwipeUpIcon sx={{fontSize: 60}}/> : 
              <KeyboardDoubleArrowDownIcon sx={{fontSize: 60}}/>
          }
      </Stack>
    )
}
