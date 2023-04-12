import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Avatar } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddBlogForm from '../Container/AddBlogForm';

const AddBlog=() => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const btnstyle = { marginTop:'15px',position:'absolute', right:'10px'};
  
  

  return (
    <div>
      <Button variant='contained' color='primary' onClick={handleClickOpen} style={btnstyle}>
            
                <AddCircleOutlineIcon />
            
            Add Blog
      </Button>
      
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogTitle>Add New Blog
            <Button style={btnstyle} onClick={handleClose}> X </Button>
        </DialogTitle>
        <DialogContent dividers > 
          <DialogContentText >
               <AddBlogForm />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AddBlog;