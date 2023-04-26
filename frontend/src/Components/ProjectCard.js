import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CssBaseline } from '@mui/material';


const ProjectCard = ({img, title, body}) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '10px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
      <CssBaseline/>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={img ? img : "https://source.unsplash.com/random/?flowers"}
        // image="https://plus.unsplash.com/premium_photo-1674332004007-535c8af278a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title ? title : 'Lizard'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body ? body : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add Signature</Button>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
}


export default ProjectCard;