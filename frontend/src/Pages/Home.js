import React from 'react';
import { CssBaseline, Grid, Typography } from '@mui/material';
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
          <h1>Blogs</h1>
          <Blogs/>
        </Grid>
        <Grid item xs={12} md={4}>
          <h1>Projects</h1>
          <Projects/>
          <h1>Events</h1>
          <Events/>
        </Grid>
      </Grid>
    </>
  )
}

export default Home;