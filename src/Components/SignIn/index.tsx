import React from 'react';
import Grid from '@material-ui/core/Grid'
import TextFeild from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography  from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import './style.css'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: '#fff',
      width: '40%',
      margin: 'auto',
      padding: '10px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      boxShadow: '1px 1px 50px -3px rgba(0,0,0,0.5)'
    },
    textFeild: {
      textAlign: 'center',
      
    },
    form: {
        margin: 'auto',
    },
    title: {
        marginBottom: '20px'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
      },
   
  }),
);

const SignIn: React.FC = ()=>{
    const classes = useStyles();
  return(
    <div className="SignIn">
      <Grid container spacing={2} className={classes.root}>
          <Grid xs={12} className={classes.title}><Typography variant="h5">Sign In</Typography></Grid>
          <form className={classes.form}>

        <Grid item xs={12}>
          <TextFeild className={classes.textFeild} variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"></TextFeild>
        </Grid>

        <Grid item xs={12}>
          <TextFeild className={classes.textFeild} variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="current password"></TextFeild>
        </Grid>

        <Grid item xs={12}>
          <Button type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>Sign In</Button>
        </Grid>
        </form>
      </Grid>
    </div>
  )
}

export default SignIn;