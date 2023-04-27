import React, { useEffect, useState } from 'react';
import { Container, CssBaseline, Grid, Card, CardContent,Typography,Link } from '@mui/material';
import BlogCard from '../Components/BlogCard';
import AddBlogModal from '../Components/AddBlogModal';
import axios from 'axios';
import { CloseOutlined } from '@mui/icons-material';

//Page to view all blogs 
const Blogs = (props) => {
  const [userData, setUserData] = React.useState([]);
  const [blogData, setBlogData] = React.useState([]);


  useEffect(()=>{
      axios.get(`https://www.gizachew-bayness.tech/api/users`)
    .then(({data}) => {
      setUserData(data)
  })
    .catch(err => console.log(err))
  },[])

  useEffect(()=>{
    // Axios Method
    axios.get(`https://www.gizachew-bayness.tech/api/blogs`)
    .then(({data}) => {
    setBlogData(data)
    })
    .catch(err => console.log(err))
  },[])

  //console.log(userData, blogData)

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
            blogData.map((blog, index) => {
              return <BlogCard key={index} img={`https://www.gizachew-bayness.tech/api/images/blog/${blog.id}`} title={blog.title} body={blog.summery} author=
              { userData.map((user, index) => {
                if (user.id === blog.user_id) {
                  return user.first_name
                }
              })} id={blog.id} likes={blog.likes}/>          
            })
          }
      </Grid>  
    </>
  )
}

export default Blogs;