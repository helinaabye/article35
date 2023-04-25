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

const AddBlogModal=() => {
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
      {/* <Button variant='contained' color='primary' onClick={handleClickOpen} style={btnstyle}> */}
      <Button variant='contained' color='primary' onClick={handleClickOpen}>
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
          <Button variant='contained' onClick={handleClose} color='primary' > Submit </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AddBlogModal;