import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Button from '@mui/material/Button';
import { Container, CssBaseline, Grid } from '@mui/material';
import BlogCard from '../Components/BlogCard';

//Page to view all blogs 
const Blogs = (props) => {
  return (
    <>    
      <Header/>
      <h1>Blogs</h1> 
      <Grid container sx={{display: 'flex', justifyContent: 'space-evenly'}}>
      <BlogCard img="https://source.unsplash.com/random/?cars" title="test" body="test test test test test test test test test test test"/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>

      </Grid>  
    </>
  )
}

export default Blogs;