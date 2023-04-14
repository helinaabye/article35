import React from 'react';
import { Container, CssBaseline, Grid } from '@mui/material';
import BlogCard from '../Components/BlogCard';

//Page to view all blogs 
const Events = (props) => {
  return (
    <>    
      <h1>Events</h1> 
      <Grid container sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        <BlogCard img="https://source.unsplash.com/random/?festival" title="test" body="test test test test test test test test test test test"/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </Grid>  
    </>
  )
}

export default Events;