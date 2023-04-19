import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink as RouterLink } from 'react-router-dom';
import { Link, Grid } from '@mui/material';

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
                  <Link component={RouterLink} className='nav' rel="noopener" to={'./'} color='white' underline="hover">Home</Link>
                </Grid>
                <Grid item>
                  <Link component={RouterLink} className='nav' rel="noopener" to={'./About'} color='white' underline="hover">About</Link>
                </Grid>
                <Grid item>
                  <Link component={RouterLink} className='nav' rel="noopener" to={'./Projects'} color='white' underline="hover">Projects</Link>
                </Grid>
                <Grid item>
                  <Link component={RouterLink} className='nav' rel="noopener" to={'./Blogs'} color='white' underline="hover">Blogs</Link>
                </Grid>
                <Grid item>
                  <Link component={RouterLink} className='nav' rel="noopener" to={'./Login'} color='white' underline="hover">Login</Link>
                </Grid>
              </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;