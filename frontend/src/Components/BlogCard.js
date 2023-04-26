import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const BlogCard = ({img, title, body, author, id, approved}) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, margin: '10px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} onClick={() => navigate(`/View/${id}`)}>
      <CssBaseline/>
      <CardMedia
        component="img"
        alt="Loading"
        height="140"
        image={img ? img : "https://source.unsplash.com/random/?flowers"}
        // image="https://plus.unsplash.com/premium_photo-1674332004007-535c8af278a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title ? title : 'Blog Title'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body ? body : 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel'}
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', alignContent: 'flex-end'}}>
        <Button size="small">Like</Button>
        <Button size="small">Read</Button>
        <Button disabled size="small">{author ? author : 'anonymous'}</Button>
        {approved === true ? (
        <Button disabled size="small">approved</Button>
        ) : approved === false ? (
          <Button disabled size="small">pending</Button>
        ) : (null)}
      </CardActions>
    </Card>
  );
}


export default BlogCard;