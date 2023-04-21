import React from 'react';
import { CssBaseline, Grid } from '@mui/material';
import Blogs from './Blogs';
import Projects from './Projects';
import Events from './Events';

//Home page 
const Landing = (props) => {
  return (
    <>    
      <CssBaseline/>
      <Grid container sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Grid item xs={8}>
          <Blogs/>
        </Grid>
        <Grid item container direction='row' xs={4}>
          <Grid item><Projects/></Grid>
          <Grid item><Events/></Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Landing;