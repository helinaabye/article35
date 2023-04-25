import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Button from '@mui/material/Button';
import { Container, CssBaseline, Grid, TextareaAutosize, Box, Input, TextField } from '@mui/material';
import { Label } from '@mui/icons-material';

//Test page for adding blogs
const AddBlog = (props) => {
  return (
    <>
    <CssBaseline />
      <h1>Add Blog</h1> 
      <Grid item container>
        <TextField autoFocus variant="outlined" fullWidth label='Title' sx={{ m: 1 }}/>
        <Input type='file' name= 'Image' size='md' sx={{ m: 1, width: '50ch' }}/>
        <TextField multiline rows={5} variant='outlined' fullWidth label='Discription' sx={{m:1}}/>
        <TextField multiline rows={5} variant='outlined' fullWidth label='Summary' sx={{m:1}}/>
        <Button variant='contained'>Submit</Button>
      </Grid>
    </>
  )
}

export default AddBlog;