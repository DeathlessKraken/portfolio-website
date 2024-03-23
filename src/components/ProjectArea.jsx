import React from 'react';
import { Grid } from '@mui/material';
import Project from './Project';
import Projects from '../assets/Projects';

export default function ProjectArea() {
    return (
      <Grid container 
          columnSpacing={{ xs: 2 }}
          rowSpacing={{ xs: 2 }} 
          columns={{ xs: 4, sm: 8, md: 12 }}
      >
          <Grid item xs={4} md={3} >
              <Project 
                  data={Projects[0]}
              />
          </Grid>
          <Grid item xs={4} md={3} >
              <Project 
                  data={Projects[1]}
                  sx={{overflow: 'visible', padding: 3}}
              />
          </Grid>
          <Grid item xs={4} md={3} >
              <Project 
                  data={Projects[0]}
              />
          </Grid>
          <Grid item xs={4} md={3} >
              <Project 
                  data={Projects[1]}
                  sx={{overflow: 'visible', padding: 3 }}
              />
          </Grid>
      </Grid>
    )
}
