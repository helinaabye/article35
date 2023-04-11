import React from 'react';

import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import { Grid , Paper, Avatar, TextField,FormGroup, FormControlLabel,Checkbox, Typography, Link} from '@mui/material';

const Login=({handleChange})=>{
  const paperstyle = {padding :20, height :'80vh' , width :350, margin:'0 auto'}
  const avatarcolor = {backgroundColor : 'purple'}
  const btnstyle = {margin:'8px 0'}
  const txtstyle = {margin:'8px 0'}
  return (
      <Grid>
        <Paper  style={paperstyle}>
          <Grid align = 'center'>
            <Avatar style={avatarcolor}> <LockIcon /></Avatar>
            <h2>Sign In</h2> 
            <Typography variant='caption' gutterBottom>Wellcome To Article35!</Typography>

          </Grid>
          <TextField variant="standard" label='Username' placeholder='Enter username' fullWidth required/>
          <TextField variant="standard" label='Password'placeholder='Enter password' type='password' fullWidth required />
          <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Remember Me" />
              
          </FormGroup>
          <Button variant="contained" style={btnstyle} fullWidth type='submit' color='secondary'>Sign In</Button>
          <Typography>
              <Link href="#">
                Forgot Password?
              </Link>
          </Typography>
          <Typography> Do you have an account?
              <Link href = "#" onClick={()=>handleChange("event",1)}>
                Sign UP
              </Link>
          </Typography>
        </Paper>

      </Grid>

  )
}

export default Login;