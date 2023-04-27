import React, {useEffect, useState, useContext} from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Button from '@mui/material/Button';
import { Container, CssBaseline, Grid, TextareaAutosize, Typography } from '@mui/material';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

//Page to view one selected blog
const ViewBlog = (props) => {
  const { blog_id } = useParams();
  const [blogData, setBlogData] = React.useState([]);
  const [userData, setUserData] = React.useState([]);
  const navigate = useNavigate();
  const { auth, dispatch } = useContext(AuthContext);
  const [likeCount, setLikeCount] = useState();
  const [approved, setApproved] = useState(null);

  const likeAction = () => {
        axios.post(`https://www.gizachew-bayness.tech/api/blogs/${blog_id}/likes`, {status: 'up'})
        .then(({data}) => {
          setLikeCount(likeCount + 1)
          console.log(data)
        })
        .catch(err => console.log(err))
      }

  const dislikeAction = () => {
        axios.post(`https://www.gizachew-bayness.tech/api/blogs/${blog_id}/likes`, {status: 'down'})
        .then(({data}) => {
          setLikeCount(likeCount - 1)
          console.log(data)
        })
        .catch(err => console.log(err))
      }

 //console.log(blogData)

  useEffect(()=>{
    // Axios Method
     axios.get(`https://www.gizachew-bayness.tech/api/blogs/${blog_id}`)
    .then(async ({data}) => {
    setBlogData(data)
    setLikeCount(data.likes)
    setApproved(data.approved)    
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

  
  const deleteBlog = (id) => {
    axios.delete(`https://www.gizachew-bayness.tech/api/blogs/${id}`)
    .then(({data}) => {
      console.log(data)
      navigate('/Profile')
      })
    .catch(err => console.log(err))
  }
  
  const approveBlog = () => {
    axios.post(`https://www.gizachew-bayness.tech/api/blogs/${blog_id}/approve`, {user_id: auth.user.id})
    .then(({data}) => {
      setApproved(true)
      navigate('/Blogs')
      })
    .catch(err => console.log(err))
  }
  return (
    <>
    <CssBaseline />
      <Grid container xs={12} sx={{justifyContent: 'center', alignContent: 'flex-start', m: 5, minHeight: '90vh'}}>
        <Grid item xs={12}>
          <img src={`https://www.gizachew-bayness.tech/api/images/blog/${blogData.id}`}/>
          <h1>{blogData.title}</h1> 
          <Grid item container xs={12} direction='row' spacing={1} sx={{alignItems: 'center', justifyContent: 'center'}}>
            <FavoriteIcon color='primary'/> 
            <Typography sx={{ml: 2, mr: 2}}>{likeCount} </Typography>
        </Grid>
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
        {
          auth.user && auth.user.id !== blogData.user_id ? (
            <Grid item xs={12} sx={{mt: 2}}>
             <Button variant='contained' color='success' sx={{mr: 2}} onClick={() => likeAction()}><ThumbUpAltIcon/> </Button>
             <Button variant='contained' color='error' onClick={() => dislikeAction()}><ThumbDownAltIcon/> </Button>
            </Grid>
          ) : null}
        <Grid item xs={8} sx={{mt: 2}}>
          <Typography>Status: {approved ? ('Approved') : ('Pending Approval')}</Typography>
        </Grid>
        {
          auth.user && auth.user.id === blogData.user_id ? (
              <Grid item xs={8} sx={{mt: 2}}>
                <Button variant='outlined' color='error' onClick={() => deleteBlog(blog_id)}>Delete</Button>
              </Grid>
          ) : null}
        { auth.user && auth.user.is_admin && approved===false  ? (
          <Grid item xs={8} sx={{mt: 2}}>
            <Button variant='contained' onClick={() => approveBlog()}>Approve Blog</Button>
          </Grid>
        ) :  null}
      </Grid>  
    </>
  )
}

export default ViewBlog;