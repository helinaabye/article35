import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Avatar, Button, CssBaseline, Grid, IconButton, Link, Paper, Typography } from '@mui/material';
import Blogs from './Blogs';
import Events from './Events';
import art from '../assets/article 35.jpg';
import { AuthContext } from '../contexts/authContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AddBlogModal from '../Components/AddBlogModal';
import Projects from './Projects';
import Account from './Account';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

//Profile page 
const Profile = (props) => {
    const navigate = useNavigate();
    const { auth, dispatch } = useContext(AuthContext);
    const [value, setValue] = React.useState('1');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const signout = () => {
      dispatch({type: 'SIGN_OUT'})
      navigate('/')
    }

  return (
    <>    
      <CssBaseline/>
      <Grid container>
      <TabContext value={value}>
      <Grid item container xs={12} md={4} sx={{display: 'flex', alignContent: 'flex-start', pt:'40px', background: 'lightgrey'}}>
        <Grid item xs={12}>
          <img src={`https://www.gizachew-bayness.tech/api/images/user/${auth.user.id}`} width='150px'  />
        </Grid>
        <Grid item xs={12}>
          <h1>{auth.user.first_name}</h1>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{p: '5px'}}>est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla</Typography>
        </Grid>
        <Grid item xs={12}>
            <Button color='error' onClick={() => signout()} >Sign Out</Button>
        </Grid>
      </Grid>
      <Grid item container xs={12} md={8}>
        <Grid item md={12}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Blogs" value="1" />
                <Tab label="Projects" value="2" />
                <Tab label="Events" value="3" />
                <Tab label="Account" value="4" />
              </TabList>
            </Box>
        </Grid>
        <Grid item xs={12}>
          <TabPanel value="1">
            <Button variant='contained' color='primary' sx={{mb: 1}} onClick={() => navigate('/AddBlog')}>
            <AddCircleOutlineIcon sx={{mr: 1}}/>
                Add Blog
            </Button>
            <Blogs/>
          </TabPanel>
          <TabPanel value="2">
            <Button variant='contained' color='primary' sx={{mb: 1}}>
            <AddCircleOutlineIcon sx={{mr: 1}}/>
                Add Project
            </Button>
            <Projects/>
          </TabPanel>
          <TabPanel value="3">
            <Button variant='contained' color='primary' sx={{mb: 1}}>
            <AddCircleOutlineIcon sx={{mr: 1}}/>
                Add Event
            </Button>
            <Events/>
          </TabPanel>
          <TabPanel value="4">
            <Button variant='contained' color='primary' sx={{mb: 1}}>
            <AddCircleOutlineIcon sx={{mr: 1}}/>
                Edit Account
            </Button>
            <Account/>
          </TabPanel>
        </Grid>
      </Grid>
      
      </TabContext>
      </Grid>
    </>
  )
}

export default Profile;