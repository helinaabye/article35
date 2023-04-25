import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ApprovalIcon from '@mui/icons-material/Approval';

export default function TemporaryDrawer({state, setState, toggleDrawer}) {

  const boxstyle = {backgroundColor : 'purple'}
  const list = (anchor) => (
    <Box
      
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Profile', 'New Blog', 'My Blogs', 'Approved Blogs'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={text.toLowerCase()}>
              <ListItemIcon>
                {index % 5 === 0 ? <HomeIcon /> : <BookIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  return (
    <div style={boxstyle}>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}