import React, {useContext} from 'react';
import { Avatar, Button, CssBaseline, Grid, IconButton, Link, Paper } from '@mui/material';
import Blogs from './Blogs';
import Events from './Projects';
import art from '../assets/article 35.jpg';
import { AuthContext } from '../contexts/authContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//Profile page 
const Profile = (props) => {
    const navigate = useNavigate();
    const { auth, dispatch } = useContext(AuthContext);
    const signout = () => {
      dispatch({type: 'SIGN_OUT'})
      navigate('/')
    }

  return (
    <>    
      <CssBaseline/>
      <Paper sx={{height: '70vh'}}>
      <h1>{auth.user.first_name}</h1>
      <Grid container spacing={2} direction='row' sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Grid item xs={10}>
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
        >
            <Avatar alt={auth.user.first_name} src={`https://www.gizachew-bayness.tech/api/images/user/${auth.user.id}`} />
        </IconButton>
        </Grid>
        <Grid item xs={10}>
            Bio
        </Grid>
        <Grid item xs={10}>
            <Button variant='contained' onClick={() => signout()} >Sign Out</Button>
        </Grid>
      </Grid>
      </Paper>
    </>
  )
}

export default Profile;