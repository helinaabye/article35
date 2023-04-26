import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Button from '@mui/material/Button';
import { Container, CssBaseline, Grid, TextareaAutosize, Box, Input, TextField } from '@mui/material';
import { Label } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

//Test page for adding blogs
const AddEvent = (props) => {
    const navigate = useNavigate();
  return (
    <>
    <CssBaseline />
      <Grid item container>
        <Grid item xs={2}>
          <Button variant='contained' sx={{m: 2}} onClick={() => navigate('/Profile')}>Back</Button>
        </Grid>
        <Grid item xs={10}>
          <h1>Add Event</h1> </Grid>
      </Grid>
      <Grid item container sx={{p: 4}}>
        <TextField autoFocus required variant="outlined" fullWidth label='Title' sx={{ m: 1 }}/>
        <Input type='file' name= 'Image' size='md' sx={{ m: 1, width: '50ch' }}/>
        <TextField multiline required rows={2} variant='outlined' fullWidth label='Description' sx={{m:1}}/>
        <TextField required variant="outlined" fullWidth label='Link' sx={{ m: 1 }}/>
        <Button variant='contained' sx={{m: 2}}>Submit</Button>
      </Grid>
    </>
  )
}

export default AddEvent;