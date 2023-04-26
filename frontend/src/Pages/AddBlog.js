import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Button from '@mui/material/Button';
import { Container, CssBaseline, Grid, TextareaAutosize, Box, Input, TextField, Link } from '@mui/material';
import { Label } from '@mui/icons-material';
import { NavLink as RouterLink, useNavigate } from 'react-router-dom';

//Test page for adding blogs
const AddBlog = (props) => {
  const navigate = useNavigate();
  return (
    <>
    <CssBaseline />
      <Grid item container sx={{alignItems: 'center'}}>
        <Grid item xs={2}>
           <Link component={RouterLink} className='nav' rel="noopener" to={'/Profile'} color='purple' underline="hover">Back to Profile</Link>
        </Grid>
        <Grid item xs={10}>
          <h1>Add Blog</h1> </Grid>
      </Grid>
      <Grid item container sx={{p: 4}}>
        <TextField autoFocus required variant="outlined" fullWidth label='Title' sx={{ m: 1 }}/>
        <Input type='file' name= 'Image' size='md' sx={{ m: 1, width: '50ch' }}/>
        <TextField multiline required rows={15} variant='outlined' fullWidth label='Content' sx={{m:1}}/>
        <TextField multiline required rows={2} variant='outlined' fullWidth label='Summary' sx={{m:1}}/>
        <TextField required variant="outlined" fullWidth label='Reference Links' sx={{ m: 1 }}/>
        <Button variant='contained' sx={{m: 2}}>Submit</Button>
      </Grid>
    </>
  )
}

export default AddBlog;