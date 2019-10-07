import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './style.css'
import {useStyles} from './style'

export default function NavBar() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            
            Bubble
          </Typography>
          <Typography className={classes.border}>
            <ul>
              <li ><NavLink to="/Home" className={classes.link}><i className="fas fa-home"></i> Home</NavLink></li>
              <li ><NavLink to="/NewArticle" className={classes.link}><i className="fas fa-newspaper"></i> New Artical</NavLink></li>
              <li ><NavLink to="/Settings" className={classes.link}><i className="fas fa-cogs"></i> Setting</NavLink></li>
              <li ><NavLink to="/Profile" className={classes.link}><i className="fas fa-user-circle"></i> Profile</NavLink></li>
              <li ><NavLink to="/SignIn" className={classes.link}><i className="fas fa-sign-in-alt"></i> Sign In</NavLink></li>
              <li ><NavLink to="/SignUp" className={classes.link}><i className="fas fa-user-plus"></i> Sign Up</NavLink></li>
            </ul>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

