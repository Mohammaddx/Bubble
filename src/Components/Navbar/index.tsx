import React from 'react';
import { NavLink } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './style.css'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navbar: {
      backgroundColor: 'dodgerblue',
    },
    border: {
      width: '70%'
    },
    link: {
      textDecoration: 'none',
      color: '#fff',
      padding: '5px 10px',
    }
  }),
);

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
              <li ><NavLink to="/Home" className={classes.link}><Button color="inherit" ><i className="fas fa-home"></i> Home</Button></NavLink></li>
              <li ><NavLink to="/NewArticle" className={classes.link}><Button color="inherit" ><i className="fas fa-newspaper"></i> New Artical</Button></NavLink></li>
              <li ><NavLink to="/Settings" className={classes.link}><Button color="inherit" ><i className="fas fa-cogs"></i> Setting</Button></NavLink></li>
              <li ><NavLink to="/Profile" className={classes.link}><Button color="inherit" ><i className="fas fa-user-circle"></i> Profile</Button></NavLink></li>
              <li ><NavLink to="/SignIn" className={classes.link}><Button color="inherit" ><i className="fas fa-sign-in-alt"></i> Sign In</Button></NavLink></li>
              <li ><NavLink to="/SignUp" className={classes.link}><Button color="inherit" ><i className="fas fa-user-plus"></i> Sign Up</Button></NavLink></li>
            </ul>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

