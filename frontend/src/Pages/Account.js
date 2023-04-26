import React, {useContext} from 'react';
import { Avatar, Button, CssBaseline, Grid, IconButton, Link, Paper } from '@mui/material';
import Blogs from './Blogs';
import Events from './Projects';
import art from '../assets/article 35.jpg';
import { AuthContext } from '../contexts/authContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//Profile page 
const Account = (props) => {
    const navigate = useNavigate();
    const { auth, dispatch } = useContext(AuthContext);
    const signout = () => {
      dispatch({type: 'SIGN_OUT'})
      navigate('/')
    }

  return (
    <>    
      <CssBaseline/>
      <h1>{auth.user.first_name + " " + auth.user.last_name}</h1>
      <p>Username: {auth.user.username}</p>
      <Grid container spacing={2} direction='row' sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Grid item xs={10}>
        Profile Picture: <IconButton
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
        Bio: est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla
        </Grid>
        <Grid item xs={10}>
        Status:  {auth.user.is_admin ? 'Admin' : 'Member'}
        </Grid>
        <Grid item xs={10}>
            <Button variant='contained' color='error' onClick={() => signout()} >Delete</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Account;