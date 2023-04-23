import React, {useState, useEffect, useContext} from 'react';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import { Grid , Paper, Avatar, TextField,FormGroup, FormControlLabel,Checkbox, Typography, Link, CssBaseline} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';

const Signin=(props)=>{
  const paperstyle = {padding :20, height :'80vh' , width :350, margin:'50px auto'}
  const avatarcolor = {backgroundColor : 'purple'}
  const btnstyle = {margin:'8px 0'}
  const txtstyle = {margin:'8px 0'}
  const navigate = useNavigate();
  const [ inputs, setInputs ] = useState({})
  const [ userData, setUserData ] = useState([])
  const [ firstUser, setFirstUser ] = useState(false)
  const { auth, dispatch } = useContext(AuthContext);

  useEffect(()=>{
      // Axios Method
      axios.get('https://www.gizachew-bayness.tech/api/users')
      .then(({data}) => {
      console.log(data)
        if (data.length == 0) {
          setFirstUser(true)
        } else {
          setFirstUser(false)
          setUserData(data)
        }
        
      console.log(firstUser, userData)
      })
      .catch(err => console.log(err))
    },[])

    const submit = () => {
      if (userData && inputs.email && inputs.password) 
      {
        axios.get(`https://www.gizachew-bayness.tech/api/users?${new URLSearchParams(inputs).toString()}`)
        .then(({data}) => {
          if (data.length === 1) {
            dispatch({type: "SIGN_IN", user: data[0]})
            navigate('/')
          } else alert('Please sign up to log in')
        })
      }
    }


  return (
    <>
      <CssBaseline/>
      <Grid item container>
        <Paper  style={paperstyle}>
          <Grid align = 'center'>
            <Avatar style={avatarcolor}> <LockIcon /></Avatar>
            <h2>Sign In</h2> 
            <Typography variant='caption' gutterBottom>Wellcome To Article35!</Typography>

          </Grid>
          <form onSubmit={(e) => submit(e.preventDefault())}>
          <TextField variant="standard" fullWidth label='Email' placeholder="Enter your email" onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
          <TextField type='password' variant="standard" fullWidth label='Password' placeholder="Enter your password"  onChange={(e) => setInputs({ ...inputs, password: e.target.value })}/>
          <Button variant="contained" style={btnstyle} fullWidth type='submit' color='secondary'>Sign In</Button>
          <Typography>
              <Link href="#">
                Forgot Password?
              </Link>
          </Typography>
          <Typography> Do you have an account?
              <Link href = "#" onClick={()=>props.handleChange("event",1)}>
                Sign Up
              </Link>
          </Typography>
          </form>
        </Paper>

      </Grid>
    </>
  )
}

export default Signin;