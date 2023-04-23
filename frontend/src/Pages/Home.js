import React from 'react';
import { CssBaseline, Grid } from '@mui/material';
import Blogs from './Blogs';
import Projects from './Projects';
import Events from './Events';

//Home page 
const Home = (props) => {
  return (
    <>    
      <CssBaseline/>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Blogs/>
        </Grid>
        <Grid item container direction='row' xs={12} md={4}>
          <Grid item><Projects/></Grid>
          <Grid item><Events/></Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Home;