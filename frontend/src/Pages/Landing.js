import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Button from '@mui/material/Button';

//Home page 
const Landing = (props) => {
  return (
    <>    
      <CssBaseline />
      <Header/>
      <h1>Home</h1> 
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Footer/>       
    </>
  )
}

export default Landing;