import React, { useState, useEffect } from 'react';
import { Checkbox, Grid, Paper, Avatar, Typography, TextField, Button, FormLabel, FormControl, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';


const Signup = (props) => {
    const paperStyle = { padding: 20, width: 350, margin: "0 auto"}
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: 'purple' }
    const marginTop = { marginTop: 5 }
    const btnstyle = {margin:'8px 0'}
    const [ inputs, setInputs ] = useState({})
    const [ firstUser, setFirstUser ] = useState(false)

    // useEffect(()=>{
    //     // Axios Method
    //     axios.get('https://www.gizachew-bayness.tech/api/users')
    //     .then(({data}) => {
    //     console.log(data)
    //       if (data.length == 0) {
    //         setFirstUser(true)
    //       } else {
    //         setFirstUser(false)
    //       }
          
    //     console.log(firstUser)
    //     })
    //     .catch(err => console.log(err))
    //   },[])

    const submit = () => {
      if (inputs.first_name && inputs.last_name && inputs.username && inputs.email && inputs.phone_number && inputs.password && inputs.confirm_password && (inputs.password===inputs.confirm_password))
        axios.post(`https://www.gizachew-bayness.tech/api/users/sign-up/`, inputs)
        .then(({data}) => {
          if (data.results) {
            props.history.push('/')
          }
        })
    }

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <LockIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form onSubmit={(e) => submit(e.preventDefault())}>
                    <TextField variant="standard" fullWidth label='First Name' placeholder="Enter your first name" onChange={(e) => setInputs({ ...inputs, first_name: e.target.value })}/>
                    <TextField variant="standard" fullWidth label='Last Name' placeholder="Enter your last name" onChange={(e) => setInputs({ ...inputs, last_name: e.target.value })}/>
                    <TextField variant="standard" fullWidth label='Username' placeholder="Enter your username" onChange={(e) => setInputs({ ...inputs, username: e.target.value })}/>
                    <TextField variant="standard" fullWidth label='Email' placeholder="Enter your email" onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
                    <TextField variant="standard" fullWidth label='Phone Number' placeholder="Enter your phone number" onChange={(e) => setInputs({ ...inputs, phone_number: e.target.value })} />
                    <TextField variant="standard" fullWidth label='Password' placeholder="Enter your password"  onChange={(e) => setInputs({ ...inputs, password: e.target.value })}/>
                    <TextField variant="standard" fullWidth label='Confirm Password' placeholder="Confirm your password"  onChange={(e) => setInputs({ ...inputs, confirm_password: e.target.value })}/>
                    <Button type='submit' variant='contained' color='secondary' style={btnstyle} fullWidth>Sign up</Button>
                </form>
            </Paper>
        </Grid>
        
       
    )
}

export default Signup;