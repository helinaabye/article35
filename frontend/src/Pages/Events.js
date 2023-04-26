import React from 'react';
import { Container, CssBaseline, Grid } from '@mui/material';
import BlogCard from '../Components/BlogCard';
import EventCard from '../Components/EventCard';

//Page to view all blogs 
const Events = (props) => {
  return (
    <>    
      <h1>Events</h1> 
      <Grid container sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        <EventCard img="https://source.unsplash.com/random/?festival" title="test event" body="test test test test test test test test test test test"/>
        <EventCard/>
      </Grid>  
    </>
  )
}

export default Events;