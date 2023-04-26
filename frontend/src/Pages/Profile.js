import React, {useContext, useEffect} from 'react';
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
import BlogCard from '../Components/BlogCard';
import Tabs, { tabsClasses } from '@mui/material/Tabs';

//Profile page 
const Profile = (props) => {
    const navigate = useNavigate();
    const { auth, dispatch } = useContext(AuthContext);
    const [value, setValue] = React.useState('1');
    const [blogData, setBlogData] = React.useState([]);
    const [unapproved, setUnapproved] = React.useState([]);
    const [userData, setUserData] = React.useState([]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const signout = () => {
      dispatch({type: 'SIGN_OUT'})
      navigate('/')
    }

    useEffect(()=>{
      // Axios Method
      axios.get(`https://www.gizachew-bayness.tech/api/users/${auth.user.id}/blogs`)
      .then(({data}) => {
      setBlogData(data)
      })
      .catch(err => console.log(err))
    },[])
    
    useEffect(()=>{
      // Axios Method
      axios.get(`https://www.gizachew-bayness.tech/api/users`)
      .then(({data}) => {
        setUserData(data)
      })
      .catch(err => console.log(err))
    },[])
    
    useEffect(()=>{
      // Axios Method
      axios.get(`https://www.gizachew-bayness.tech/api/blogs/unapproved`)
      .then(({data}) => {
        setUnapproved(data)
      })
      .catch(err => console.log(err))
    },[])


    //console.log(blogData)

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
            <Box sx={{ maxWidth: { xs: 420, md: 480 }, borderBottom: 1, borderColor: 'divider' }}>
              <TabList variant="scrollable" 
                    sx={{
                      [`& .${tabsClasses.scrollButtons}`]: {
                        '&.Mui-disabled': { opacity: 0.3 },
                      },
                    }}
                  scrollButtons onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Blogs" value="1" />
                <Tab label="Projects" value="2" />
                <Tab label="Events" value="3" />
                <Tab label="Account" value="4" />
                {auth.user && auth.user.is_admin ? (<Tab label="Approve Blogs" value="5" />) : null}
                {auth.user && auth.user.is_admin ? (<Tab label="Manage Users" value="6" />) : null}
              </TabList>
            </Box>
        </Grid>
        <Grid item xs={12}>
          <TabPanel value="1">
            <Button variant='contained' color='primary' sx={{mb: 1}} onClick={() => navigate('/AddBlog')}>
            <AddCircleOutlineIcon sx={{mr: 1}}/>
                Add Blog
            </Button>
          <Grid container sx={{display: 'flex', justifyContent: 'space-evenly'}}>
          {
            blogData.map((blog, index) => {
              return <BlogCard key={index} img={`https://www.gizachew-bayness.tech/api/images/blog/${blog.id}`} title={blog.title} body={blog.summery} author={auth.user.first_name} id={blog.id} approved={blog.approved} likes={blog.likes}/>          
            })
          }
          </Grid>
          </TabPanel>
          <TabPanel value="2">
            <Button variant='contained' color='primary' sx={{mb: 1}} onClick={() => navigate('/AddProject')}>
            <AddCircleOutlineIcon sx={{mr: 1}}/>
                Add Project
            </Button>
            <Projects/>
          </TabPanel>
          <TabPanel value="3">
            <Button variant='contained' color='primary' sx={{mb: 1}} onClick={() => navigate('/AddEvent')}>
            <AddCircleOutlineIcon sx={{mr: 1}}/>
                Add Event
            </Button>
            <Events/>
          </TabPanel>
          <TabPanel value="4">
            <Button variant='contained' color='primary' sx={{mb: 1}}>
                Edit
            </Button>
            <Account/>
          </TabPanel>
          <TabPanel value="5">
          <Grid container sx={{display: 'flex', justifyContent: 'space-evenly'}}>
          {
            unapproved.map((blog, index) => {
              return <BlogCard key={index} img={`https://www.gizachew-bayness.tech/api/images/blog/${blog.id}`} title={blog.title} body={blog.summery} author={auth.user.first_name} id={blog.id} approved={blog.approved} />          
            })
          }
          </Grid>
          </TabPanel>
          <TabPanel value="6">
          <Grid container spacing={2} sx={{display: 'flex', justifyContent: 'space-evenly'}}>
          {
            userData.map((user, index) => {
              return <Grid item xs={10} sx={{alignItems: 'center', justifyContent: 'space-evenly', pb: 1,  borderBottom: 1, borderColor: 'divider'}}spacing={2} container key={index}>
              <Grid item xs={1} > 
                {`${index + 1}. `} 
              </Grid>
                  <Grid item xs={1} > 
                       <Avatar alt={user.first_name} src={`https://www.gizachew-bayness.tech/api/images/user/${user.id}`} />
                  </Grid>
                  <Grid item xs={4}> 
                       <Typography>{user.first_name + ' ' + user.last_name}</Typography>
                  </Grid>
                  <Grid item xs={2}> 
                       <Typography>{user.is_admin ? ('Admin') : ('Member')}</Typography>
                  </Grid>
                  <Grid item xs={6} md={2}> 
                       <Button variant='contained'>Promote</Button>
                  </Grid>
                  <Grid item xs={6} md={2}> 
                       <Button variant='contained' color='error'>Remove</Button>
                  </Grid>
                    </Grid>   
            })
          }
          </Grid>
          </TabPanel>
        </Grid>
      </Grid>
      
      </TabContext>
      </Grid>
    </>
  )
}

export default Profile;