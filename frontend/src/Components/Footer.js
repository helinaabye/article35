import * as React from 'react';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
import Container from '@mui/material/Container';
import { Link, Grid } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';

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
          <Grid container sx={{ display: 'flex', justifyContent: 'space-between', m:2, p: 1}}>
            <Grid item container xs={4} spacing={2} direction='column'>
              <Grid item>
              <Typography 
                  variant="h6"
                  noWrap
                  sx={{
                    fontWeight: 700,
                    color: 'white',
                    textDecoration: 'none'
                  }}>
                    Resources
                  </Typography>
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
          </Grid>
          
          <Grid item container xs={4} spacing={2} direction='column'>
              <Grid item>
              <Typography 
                  variant="h6"
                  noWrap
                  sx={{
                    fontWeight: 700,
                    color: 'white',
                    textDecoration: 'none'
                  }}>
                    Partners
                  </Typography>
              </Grid>
              <Grid item>
                <Link href={'https://awibethiopia.org/'} color='white' underline="hover">AWIB</Link>
              </Grid>
              <Grid item>
                <Link href={'https://ethiopianbusinessreview.net/2019/04/'} color='white' underline="hover">EBR</Link>
              </Grid>
              <Grid item>
                <Link href={'https://nalafem.org/who-we-are/'} color='white' underline="hover">Nalafem</Link>
              </Grid>
          </Grid>
          
          <Grid item container xs={4} spacing={2} direction='column'>
              <Grid item>
              <Typography 
                  variant="h6"
                  noWrap
                  sx={{
                    fontWeight: 700,
                    color: 'white',
                    textDecoration: 'none'
                  }}>
                    Connect
                  </Typography>
              </Grid>
              <Grid item>
                <Link href={'https://linkedin.com/'} color='white' underline="hover">LinkedIn</Link>
              </Grid>
              <Grid item>
                <Link href={'https://twitter.com'} color='white' underline="hover">Twitter</Link>
              </Grid>
              <Grid item>
                <Link href='#' color='white' underline="hover">NewsLetter</Link>
              </Grid>
          </Grid>

          </Grid>
        </Toolbar>  
        </Container>
    </Paper>
  );
}
export default Footer;