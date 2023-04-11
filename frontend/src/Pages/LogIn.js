import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Button from '@mui/material/Button';
import { CssBaseline } from '@mui/material';

//LogIn page 
const LogIn = (props) => {
  return (
    <>    
      <CssBaseline />
      <Header/>
      <h1>Welcome</h1> 
      <Button>Sign Up</Button>
      <Button color="secondary">Sign In</Button>
      <Footer/>       
    </>
  )
}

export default LogIn;