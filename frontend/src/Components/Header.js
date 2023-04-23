import React, { useEffect, useContext, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink as RouterLink, useNavigate } from 'react-router-dom';
import { Link, Grid, MenuItem, Menu, Tooltip, IconButton, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AuthContext } from '../contexts/authContext';
import axios from 'axios';

function Header() {  
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const { auth } = useContext(AuthContext);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex'},
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            Article 35th
          </Typography>
          <Box sx={{ flexGrow: 1, display: {  xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
              <Grid container spacing={2} sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}} >
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
                  {
                    auth.user && auth.user.id ? (
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={() => navigate('/Profile')}
                      >
                        <Avatar alt={auth.user.first_name} src={`https://www.gizachew-bayness.tech/api/images/user/${auth.user.id}`} />
                      </IconButton>
                    ) : (
                      <Link component={RouterLink} className='nav' rel="noopener" to={'./Login'} color='white' underline="hover">Login</Link>
                    )
                  }
                </Grid>
              </Grid>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none',  justifyContent: 'flex-end' }, flexGrow: 1 }}>
            <Tooltip title="Menu">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MenuIcon sx={{ color: 'white'}} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem key={'Home'} onClick={handleCloseUserMenu}>
                  <Link component={RouterLink} className='nav' rel="noopener" to={'./'} color='purple' underline="hover">Home</Link>
                </MenuItem>
                <MenuItem key={'About'} onClick={handleCloseUserMenu}>
                  <Link component={RouterLink} className='nav' rel="noopener" to={'./About'} color='purple' underline="hover">About</Link>
                </MenuItem>
                <MenuItem key={'Projects'} onClick={handleCloseUserMenu}>
                  <Link component={RouterLink} className='nav' rel="noopener" to={'./Projects'} color='purple' underline="hover">Projects</Link>
                </MenuItem>
                <MenuItem key={'Blogs'} onClick={handleCloseUserMenu}>
                  <Link component={RouterLink} className='nav' rel="noopener" to={'./Blogs'} color='purple' underline="hover">Blogs</Link>
                </MenuItem>
                <MenuItem key={'Login'} onClick={handleCloseUserMenu}>
                  {
                    auth.user && auth.user.id ? (
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                      >
                        <Avatar alt={auth.user.first_name} src={`https://www.gizachew-bayness.tech/api/images/user/${auth.user.id}`} />
                      </IconButton>
                    ) : (
                      <Link component={RouterLink} className='nav' rel="noopener" to={'./Login'} color='purple' underline="hover">Login</Link>
                    )
                  }
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;