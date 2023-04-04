import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Button from '@mui/material/Button';

const Landing = (props) => {
  return (
    <div className="container">
      <Header/>
      <h1>Home</h1> 
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Footer/>       
    </div>
  )
}

export default Landing;