import React from 'react';
import { CssBaseline, Grid, Link } from '@mui/material';
import Blogs from './Blogs';
import Events from './Projects';
import art from '../assets/article 35.jpg';

//About page 
const About = (props) => {
  return (
    <>    
      <CssBaseline/>
      
      <h1>About</h1>
      <Grid container sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Grid item xs={10}>
          <p>This website was created to advocate for the effective implementation of Article 35 and the universal and international rights of women. It contains articles shining a light on the issues women face in Ethiopia.</p>
          <p>Article 35 is named after the 35th article in the constitution of Ethiopia stating the rights of women (see below).</p> 
        </Grid>
        <Grid item xs={10}>
          <img src={art}/>
        </Grid>
        <Grid item xs={10}>
          <Link href="https://ethiopianembassy.be/wp-content/uploads/Constitution-of-the-FDRE.pdf" variant="p">
            Download the full constitution here
          </Link>
        </Grid>
      </Grid>
    </>
  )
}

export default About;