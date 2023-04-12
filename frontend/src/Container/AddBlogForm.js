import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);



  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
      <TextField autoFocus variant="outlined" fullWidth label='Title' sx={{ m: 1, width: '50ch' }}/>
      <TextField multiline rows={5} variant='outlined' fullWidth label='Discription' sx={{m:1}}/>
      <TextField variant="outlined" fullWidth label='Author' sx={{ m: 1, width: '50ch' }}/>
      <TextField variant="outlined" fullWidth label='Lable' sx={{ m: 1, width: '50ch' }}/>
      <Input type='file' name= 'Image' size='md' sx={{ m: 1, width: '50ch' }}/>


        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </div>
     
    </Box>
  );
}