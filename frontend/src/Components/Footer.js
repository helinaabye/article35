import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
import Container from '@mui/material/Container';
import { Link, Grid } from '@mui/material';

const Footer = (props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const resource = ['About', 'SheLeads', 'Blog'];
    const partners = ['AWIB', 'EBR', 'Nalafem'];
    const connect = ['LinkedIn', 'Twitter', 'NewsLetter'];

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

  return (
    <Paper sx={{ display: 'flex', boxShadow: 6,
        bottom: 0, left: 0, right: 0, borderRadius: 0,
        minHeight: '120px', backgroundColor: 'primary.main' }} elevation={3}>
        
      <Container sx={{ display: 'flex', justifyContent: 'space-between'}}>
      <Toolbar disableGutters sx={{ width: '100%' }}>
      <Grid container item xs={3} sx={{ display: 'flex', justifyContent: 'space-between'}}>
        
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
          </Grid>
          <Grid container sx={{ display: 'flex', justifyContent: 'space-between', p: 1}}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', flexDirection: 'column' } }}>
          <Typography 
              variant="h6"
              noWrap
              component="a"
              href=""
              sx={{
                m: 2,
                pl: 10,
                fontWeight: 700,
                color: 'white',
                textDecoration: 'none'
              }}>
                Resources
              </Typography>
            {resource.map((resource) => (
              <Link
                key={resource}
                onClick={handleCloseNavMenu}
                sx={{ m: 1, pl: 10, color: 'white', display: 'block' }}
              >
                {resource}
              </Link>
            ))}
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', flexDirection: 'column' } }}>
          <Typography 
              variant="h6"
              noWrap
              component="a"
              href=""
              sx={{
                m: 2,
                pl: 10,
                fontWeight: 700,
                color: 'white',
                textDecoration: 'none'
              }}>
                Partners
              </Typography>
            {partners.map((partners) => (
              <Link
                key={partners}
                onClick={handleCloseNavMenu}
                sx={{ m: 1, pl: 10, color: 'white', display: 'block' }}
              >
                {partners}
              </Link>
            ))}
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', flexDirection: 'column' } }}>
            <Typography 
              variant="h6"
              noWrap
              component="a"
              href=""
              sx={{
                m: 2,
                pl: 10,
                fontWeight: 700,
                color: 'white',
                textDecoration: 'none'
              }}>
                Connect
              </Typography>
            {connect.map((connect) => (
              <Link
                key={connect}
                onClick={handleCloseNavMenu}
                sx={{ m: 1, pl: 10, color: 'white', display: 'block' }}
              >
                {connect}
              </Link>
            ))}
          </Box>
          </Grid>
        </Toolbar>  
        </Container>
    </Paper>
  );
}
export default Footer;