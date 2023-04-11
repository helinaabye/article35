import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Button from '@mui/material/Button';
import { CssBaseline } from '@mui/material';

//Home page 
const Landing = (props) => {
  return (
    <>    
      <CssBaseline />
      <h1>Home</h1> 
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
    </>
  )
}

export default Landing;