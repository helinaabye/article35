import React, {useState, useEffect, useContext} from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Button from '@mui/material/Button';
import { Container, CssBaseline, Grid, TextareaAutosize, Box, Input, TextField, Link } from '@mui/material';
import { Label } from '@mui/icons-material';
import { NavLink as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../contexts/authContext';

//Test page for adding blogs
const AddBlog = (props) => {
  const navigate = useNavigate();
  const { auth, dispatch } = useContext(AuthContext);
  const [ inputs, setInputs ] = useState([]);
  const [imageUrl, setImageUrl] = useState(null); 
  const [selectedImage, setSelectedImage] = useState(null);
  
  const submit = () => {
    if (inputs.title && inputs.content && inputs.image && inputs.summery && inputs.links && inputs.user_id) 
    {
        axios({
          method: "post",
          url: "https://www.gizachew-bayness.tech/api/blogs",
          data: inputs,
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(({data}) => {
          if (data) {
            alert('You have successfuly submitted your blog. Please wait for approval from admin')
            navigate('/Profile')
          }
        })
        .catch(err => console.log(err))
    }
  }

  useEffect(() => {
    if (auth.user) {
      setInputs({ ...inputs, user_id: auth.user.id, links: [] })
    }
  }, []);

  useEffect(() => {
    if (inputs.image) {
      setImageUrl(URL.createObjectURL(inputs.image));
    }
  }, [selectedImage]);
  return (
    <>
    <CssBaseline />
      <Grid item container sx={{alignItems: 'center'}}>
        <Grid item xs={2}>
           <Link component={RouterLink} className='nav' rel="noopener" to={'/Profile'} color='purple' underline="hover">Back to Profile</Link>
        </Grid>
        <Grid item xs={10}>
          <h1>Add Blog</h1> </Grid>
      </Grid>
      <Grid item container sx={{p: 4}}>
        
      <form className='form' onSubmit={(e) => submit(e.preventDefault())}>
        <Grid item container xs={12} sx={{alignItems: 'center',justifyContent: 'center'}}>
        <Grid item xs={12} md={6}>
        <TextField autoFocus required variant="outlined" fullWidth label='Title' sx={{ m: 1 }} onChange={(e) => setInputs({ ...inputs, title: e.target.value })}/>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button
            variant="contained"
            component="label"
          >
            Upload File
            <input
              type="file" 
              onChange={(e) => {
                setSelectedImage(selectedImage) 
                setInputs({ ...inputs, image: e.target.files[0] })
              } }
              hidden
            />
          </Button>
        </Grid>
        <Grid item xs={12} md={3}>
        { inputs.image && (
          <Box textAlign="center">
            <div>Image Preview:</div>
            <img src={(URL.createObjectURL(inputs.image))} alt='preview' height="100px" />
          </Box>
        )}
        </Grid>
        </Grid>
        <TextField multiline required rows={15} variant='outlined' fullWidth label='Content' sx={{m:1}}  onChange={(e) => setInputs({ ...inputs, content: e.target.value })}/>
        <TextField multiline required rows={2} variant='outlined' fullWidth label='Summary' sx={{m:1}} onChange={(e) => setInputs({ ...inputs, summery: e.target.value })}/>
        <TextField variant="outlined" fullWidth label='Reference Link' sx={{ m: 1 }} onChange={(e) => setInputs({ ...inputs, links: [...inputs.links, e.target.value] })}/>
        <Button type='submit' variant='contained' sx={{m: 2}}>Submit</Button>
      </form>
      </Grid>
    </>
  )
}

export default AddBlog;