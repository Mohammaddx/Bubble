import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './style'

export interface NavBarInterface { 
  children: React.ReactNode
}

const NavBar: React.FC = () => {
  const classes = useStyles();
  
  return (
    <div>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            
            Bubble
          </Typography>
            <ul className={classes.List}>
              <li className={classes.itemList}><NavLink to="/Home" className={classes.link}><i className= {`${classes.iFont} fas fa-home`} ></i> Home</NavLink></li>
              <li className={classes.itemList}><NavLink to="/NewArticle" className={classes.link}><i className={`${classes.iFont} fas fa-newspaper`}></i> New Article</NavLink></li>
              <li className={classes.itemList}><NavLink to="/Settings" className={classes.link}><i className={`${classes.iFont} fas fa-cogs`}></i> Setting</NavLink></li>
              <li className={classes.itemList}><NavLink to="/@:user" className={classes.link}><i className={`${classes.iFont} fas fa-user-circle`}></i> Profile</NavLink></li>
              <li className={classes.itemList}><NavLink to="/SignIn" className={classes.link}><i className={` ${classes.iFont} fas fa-sign-in-alt`}></i> Sign In</NavLink></li>
              <li className={classes.itemList}><NavLink to="/SignUp" className={classes.link}><i className={` ${classes.iFont} fas fa-user-plus`}></i> Sign Up</NavLink></li>
            </ul>
         
        </Toolbar>
      </AppBar>
    </div>
  );
    
}

export default NavBar;