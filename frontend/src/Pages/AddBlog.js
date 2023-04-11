import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Button from '@mui/material/Button';
import { Container, CssBaseline, Grid, TextareaAutosize } from '@mui/material';

//Test page for adding blogs
const AddBlog = (props) => {
  return (
    <>
    <CssBaseline />
      <h1>Home</h1> 
      <Grid container>

        <Grid item>
          <TextareaAutosize>

          </TextareaAutosize>
        </Grid>

        <Grid item>
          <Button sx={{height:'1000px'}}>Test</Button>
        </Grid>
        <Grid item>
          <p>Blog</p>
        </Grid>
      </Grid> 
    </>
  )
}

export default AddBlog;