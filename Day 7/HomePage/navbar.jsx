import * as React from 'react';
import './Home.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../../redux/userSlice';

export default function ButtonAppBar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const user = useSelector(selectUser);
  console.log("User:",user);
  const username = user.user && user.user.username ? user.user.username : "Guest";
  const navigate = useNavigate();  
  console.log({username});
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };
  const handlejobClick = () => {
    navigate('/job');
    toggleDrawer(false);
  };
  const handleDash = () => {
    navigate('/dashboard');
    toggleDrawer(false);
  };
  const handleInternships = () => {
    navigate('/internships');
    toggleDrawer(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Lucida Console' }}>
          <Button color="inherit" href="/" style={{ fontSize: '30px' }}></Button>
          </Typography>
          
          <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/signup">SignUp</Button>
          <Button color="inherit" href="/about" className="smooth-scroll">About</Button>
          <Button color="inherit" href="#footer" className="smooth-scroll">Contact US</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <div style={{ width: '250px' }}>
          <List>
          <center>Hi👋<br/>{username}!
          </center>
         
            <ListItem button onClick={handleDash}>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={handlejobClick}>
              <ListItemText primary="Jobs" />
            </ListItem>
            <ListItem button onClick={handleInternships}>
              <ListItemText primary="Internships" />
            </ListItem>
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemText primary="Resume Builder" />
            </ListItem>
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemText primary="Apply procedure" />
            </ListItem>
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </Box>
  );
}
