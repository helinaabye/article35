import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';

const pages = ['About', 'Projects', 'Blog', 'Login'];

function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            Article 35th
          </Typography>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
              <Grid container spacing={2} sx={{display: 'flex', justifyContent: 'flex-end'}} >
                <Grid item>
                <NavLink className='nav' id={'About'} to={'./About'}>{'About'}</NavLink>
              </Grid>
              <Grid item>
                <NavLink className='nav' id={'Projects'} to={'./Projects'}>{'Projects'}</NavLink>
              </Grid>
              <Grid item>
                <NavLink className='nav' id={'Blogs'} to={'./Blogs'}>{'Blogs'}</NavLink>
              </Grid>
              <Grid item>
                <NavLink className='nav' id={'Login'} to={'./Login'}>{'Login'}</NavLink>
              </Grid>
              </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;