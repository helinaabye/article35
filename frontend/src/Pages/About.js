import React from 'react';
import { CssBaseline, Grid } from '@mui/material';
import Blogs from './Blogs';
import Events from './Events';

//About page 
const About = (props) => {
  return (
    <>    
      <CssBaseline/>
      
      <h1>About</h1>
      <Grid container sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Grid item xs={8}>
          <p></p>
        </Grid>
        <Grid item xs={4}>
          <Events/>
        </Grid>
      </Grid>
    </>
  )
}

export default About;