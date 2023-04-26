import React, {useEffect, useCallback} from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Button from '@mui/material/Button';
import { Container, CssBaseline, Grid, TextareaAutosize, Typography } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';

//Page to view one selected blog
const ViewBlog = (props) => {
  const { blog_id } = useParams();
  const [blogData, setBlogData] = React.useState([]);
  const [userData, setUserData] = React.useState([]);

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

  
 
  //  const getAuthor = () => {
  //     let id
  //     if (blogData.length > 0) {
  //       id = blogData.user_id
  //      axios.get(`https://www.gizachew-bayness.tech/api/users/${id}`)
  //      .then(({user}) => {
  //        return user
  //      })
  //      .catch(err => console.log(err))
  //     }
  //   }

  //   useEffect(()=>{
  //     getAuthor()
  //    },[])
 
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
      </Grid>  
    </>
  )
}

export default ViewBlog;