import React, { useState } from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Box,
  Grid,

} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link , Outlet} from 'react-router-dom';
import Signup from './SignupScreen';


const useStyles = makeStyles((theme) => ({
    burger: {
        display:'none',
        [theme.breakpoints.down('xs')]: {
            display: 'inline',
          }
    },
  logo: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  button: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  link: {
    [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
      margin: '10px',  
    textDecoration: 'none', // Remove default underline
    color: 'inherit', // Inherit text color from parent
    '&:hover': {
      textDecoration: 'none', // Apply underline on hover
      
    },
  },
  list: {
    width: 250,
  },
}));

const LayoutScreen = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    'Home',
    'Contact Us',
    'About Us',
    'Register / Login',
  ];

  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          className={classes.burger}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.logo}>
          Library
        </Typography>
        <Link to="/" className={classes.link} color="inherit">
          Home
        </Link>
        <Link className={classes.link} color="inherit">
          Contact Us
        </Link>
        <Link className={classes.link} color="inherit">
          About Us
        </Link>
        <Link to='/signup' className={classes.link} color="inherit">
          Register / Login
        </Link>
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </AppBar>
    <Grid
     style={{marginTop: '30px',marginInline:'30px'}}
     >
    <Outlet />
    </Grid>
    </>
  );
};

export default LayoutScreen;
