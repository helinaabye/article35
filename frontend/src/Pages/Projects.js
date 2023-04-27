import React from 'react';
import { Container, CssBaseline, Grid } from '@mui/material';
import BlogCard from '../Components/BlogCard';
import ProjectCard from '../Components/ProjectCard';

//Page to view all blogs 
const Projects = (props) => {
  return (
    <> 
      <h1>Projects</h1>   
      <Grid container sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        <ProjectCard img="https://source.unsplash.com/random/?festival" title="test" body="test test test test test test test test test test test"/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </Grid>  
    </>
  )
}

export default Projects;