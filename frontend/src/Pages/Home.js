import React from 'react';
import { CssBaseline, Grid, Typography } from '@mui/material';
import Blogs from './Blogs';
import Projects from './Projects';
import Events from './Events';
import ProjectCard from '../Components/ProjectCard';
import EventCard from '../Components/EventCard';
import BlogCard from '../Components/BlogCard';

//Home page 
const Home = (props) => {
  return (
    <>    
      <CssBaseline/>
      <Grid container>
        <Grid item xs={12} md={8}>
          <h1>Blogs</h1> 
        <Grid item container sx={{justifyContent: 'center'}}>
          <BlogCard img="https://source.unsplash.com/random/?writing" title="Stories"/> 
          <BlogCard img="https://source.unsplash.com/random/?women" title="Women"/> 
          <BlogCard img="https://source.unsplash.com/random/?africa" title="Africa"/> 
          <BlogCard img="https://source.unsplash.com/random/?books" title="Books"/> 
          <BlogCard img="https://source.unsplash.com/random/?policy" title="Policy"/> 
          <BlogCard img="https://source.unsplash.com/random/?meeting" title="Meeting"/> 
        </Grid>
        </Grid>
        <Grid item container xs={12} md={4}  sx={{justifyContent: 'center'}}>
          <h1>Projects</h1>
          <ProjectCard img="https://source.unsplash.com/random/?festival" title="test" body="test test test test test test test test test test test"/>
          <ProjectCard/>
          <h1>Events</h1> 
          <EventCard img="https://source.unsplash.com/random/?festival" title="test event" body="test test test test test test test test test test test"/>
          <EventCard/>
        </Grid>
      </Grid>
    </>
  )
}

export default Home;