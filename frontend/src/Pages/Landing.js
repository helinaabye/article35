import React from 'react';
import { CssBaseline, Grid } from '@mui/material';
import Blogs from './Blogs';
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
        <Grid item xs={4}>
          <Events/>
        </Grid>
      </Grid>
    </>
  )
}

export default Landing;