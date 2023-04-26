import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Button from '@mui/material/Button';
import { Container, CssBaseline, Grid, TextareaAutosize, Box, Input, TextField } from '@mui/material';
import { Label } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

//Test page for adding blogs
const AddProject = (props) => {
    const navigate = useNavigate();
  return (
    <>
    <CssBaseline />
      <Grid item container>
        <Grid item xs={2}>
          <Button variant='contained' sx={{m: 2}} onClick={() => navigate('/Profile')}>Back</Button>
        </Grid>
        <Grid item xs={10}>
          <h1>Add Project</h1> </Grid>
      </Grid>
      <Grid item container sx={{p: 4}}>
        <TextField autoFocus required variant="outlined" fullWidth label='Title' sx={{ m: 1 }}/>
        <TextField multiline required rows={5} variant='outlined' fullWidth label='Content' sx={{m:1}}/>
        <Button variant='contained' sx={{m: 2}}>Submit</Button>
      </Grid>
    </>
  )
}

export default AddProject;