import React, {useEffect, useCallback, useContext} from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Button from '@mui/material/Button';
import { Container, CssBaseline, Grid, TextareaAutosize, Typography } from '@mui/material';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';

//Page to view one selected blog
const ViewBlog = (props) => {
  const { blog_id } = useParams();
  const [blogData, setBlogData] = React.useState([]);
  const [userData, setUserData] = React.useState([]);
  const navigate = useNavigate();
  const { auth, dispatch } = useContext(AuthContext);

  useEffect(()=>{
    // Axios Method
     axios.get(`https://www.gizachew-bayness.tech/api/blogs/${blog_id}`)
    .then(async ({data}) => {
    setBlogData(data)
  })
    .catch(err => console.log(err))
  },[])

  useEffect(()=>{
     axios.get(`https://www.gizachew-bayness.tech/api/users`)
    .then(async ({data}) => {
      setUserData(data)
  })
    .catch(err => console.log(err))
  },[])

  
  const approveBlog = () => {
    axios.post(`https://www.gizachew-bayness.tech/api/blogs/${blog_id}/approve`, auth.user.id)
    .then(({data}) => {
      console.log(data)
      })
    .catch(err => console.log(err))
  }
  return (
    <>
    <CssBaseline />
      <Grid container xs={12} sx={{justifyContent: 'center', alignContent: 'flex-start', m: 5, height: '90vh'}}>
        <Grid item xs={12}>
          <img src={`https://www.gizachew-bayness.tech/api/images/blog/${blogData.id}`}/>
          <h1>{blogData.title}</h1> 
        </Grid>
        <Grid item xs={8}>
          { userData.map((user, index) => {
            if (user.id === blogData.user_id) {
              return <Typography>Written by: {user.first_name}</Typography>
            }
          })}
        </Grid>
        <Grid item xs={8} sx={{mt: 2}}>
          {blogData.content}
        </Grid>
        { auth.user && auth.user.is_admin ? (
          <Grid item xs={8} sx={{mt: 2}}>
            <Button variant='contained' onClick={approveBlog}>Approve Blog</Button>
          </Grid>
        ) : null}
      </Grid>  
    </>
  )
}

export default ViewBlog;