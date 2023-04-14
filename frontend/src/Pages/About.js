import React from 'react';
import { CssBaseline, Grid } from '@mui/material';
import Blogs from './Blogs';
import Events from './Projects';

//About page 
const About = (props) => {
  return (
    <>    
      <CssBaseline/>
      
      <h1>About</h1>
      <Grid container sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Grid item xs={8}>
          <p>Article 35 is the 35th article in the constitution of Ethiopia stating the rights of women.</p>
        </Grid>
        <Grid item xs={4}>
          <Events/>
        </Grid>
      </Grid>
    </>
  )
}

export default About;