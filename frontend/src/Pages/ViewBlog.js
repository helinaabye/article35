import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Button from '@mui/material/Button';
import { Container, CssBaseline, Grid, TextareaAutosize } from '@mui/material';

//Page to view one selected blog
const ViewBlog = (props) => {
  return (
    <>
    <CssBaseline />
      <h1>Blog Title</h1> 
      <Grid container>

      <Grid item>
          <p>Blog</p>
        </Grid>
        <Grid item>
          <Button sx={{height:'1000px'}}>Test</Button>
        </Grid>
      </Grid>  
    </>
  )
}

export default ViewBlog;