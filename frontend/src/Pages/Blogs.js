import React, { useEffect, useState } from 'react';
import { Container, CssBaseline, Grid, Card, CardContent,Typography,Link } from '@mui/material';
import BlogCard from '../Components/BlogCard';
import AddBlog from '../Components/AddBlog';
import axios from 'axios';
import { CloseOutlined } from '@mui/icons-material';

//Page to view all blogs 
const Blogs = (props) => {
  const crdsty = {backgroundcolor : 'red'}
  const [data, setData ] = useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => setData(res.data))
    .catch(err => console.log(err))

  },[])

  return (
    <>    
      <h1>Blogs</h1> 
      {/* <AddBlog /> */}
      <Grid container sx={{display: 'flex', justifyContent: 'space-evenly'}}>
      {/* <BlogCard img="https://source.unsplash.com/random/?cars" title="test" body="test test test test test test test test test test test"/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/> */}
      <Card sx={{ maxWidth: 345, margin: '10px' }} style={crdsty}>
        {
          data.map((user,index) => {
            return <CardContent key={index}>
              <Typography>
                {user.name}
              </Typography>
              <Typography>
                <Link>{user.username}</Link>
                
              </Typography>

            </CardContent>

          
          })
        }
      </Card>

      </Grid>  
    </>
  )
}

export default Blogs;