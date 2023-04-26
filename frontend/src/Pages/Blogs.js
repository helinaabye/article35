import React, { useEffect, useState } from 'react';
import { Container, CssBaseline, Grid, Card, CardContent,Typography,Link } from '@mui/material';
import BlogCard from '../Components/BlogCard';
import AddBlogModal from '../Components/AddBlogModal';
import axios from 'axios';
import { CloseOutlined } from '@mui/icons-material';

//Page to view all blogs 
const Blogs = (props) => {
  const crdsty = {backgroundcolor : 'red'}
  const [userData, setUserData ] = useState([])
  const [postData, setPostData ] = useState([])
  // useEffect(()=>{
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then(res => setUserData(res.data))
  //   .catch(err => console.log(err))

  // },[])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => setPostData(res.data))
    .catch(err => console.log(err))
  },[])
  

  return (
    <>    
      <h1>Blogs</h1> 
      <Grid container sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        
          <BlogCard img="https://source.unsplash.com/random/?writing" title="Stories"/> 
          <BlogCard img="https://source.unsplash.com/random/?women" title="Women"/> 
          <BlogCard img="https://source.unsplash.com/random/?africa" title="Africa"/> 
          <BlogCard img="https://source.unsplash.com/random/?books" title="Books"/> 
          <BlogCard img="https://source.unsplash.com/random/?policy" title="Policy"/> 
          <BlogCard img="https://source.unsplash.com/random/?meeting" title="Meeting"/> 
       {
          postData.slice(0, 3).map((post,index) => {
            return <BlogCard key={index} img="https://source.unsplash.com/random/?writing" title={post.title} body={post.body}/>          
          })
        }
      </Grid>  
    </>
  )
}

export default Blogs;