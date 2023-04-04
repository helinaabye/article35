import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Container from '@mui/material/Container';
import { Link } from '@mui/material';

const Footer = (props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const pages = ['About', 'SheLeads', 'Blog'];

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

  return (
    <Paper sx={{ display: 'flex', position: 'fixed', boxShadow: 6,
        bottom: 0, left: 0, right: 0, borderRadius: 0,
        minHeight: '120px', backgroundColor: 'primary.main' }} elevation={3}>
        
      <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex', color: 'white' }, mr: 1 }} />
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
              color: 'white',
              textDecoration: 'none'
            }}
          >
            Article 35th
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', flexDirection: 'column' } }}>
            {pages.map((page) => (
              <Link
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ m: 1, pl: 10, color: 'white', display: 'block' }}
              >
                {page}
              </Link>
            ))}
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', flexDirection: 'column' } }}>
            {pages.map((page) => (
              <Link
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ m: 1, pl: 10, color: 'white', display: 'block' }}
              >
                {page}
              </Link>
            ))}
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', flexDirection: 'column' } }}>
            {pages.map((page) => (
              <Link
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ m: 1, pl: 10, color: 'white', display: 'block' }}
              >
                {page}
              </Link>
            ))}
          </Box>
        </Toolbar>  
        </Container>
    </Paper>
  );
}
export default Footer;