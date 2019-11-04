import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid'
import TextFeild from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography  from '@material-ui/core/Typography'
import {useStyles} from './style'
import ReactWOW from 'react-wow'
import '../../animate.css'
import API from '../../axios'

export interface SignInInterface{
  children: React.ReactNode,
}

const SignIn: React.FC = ()=>{
    const classes = useStyles();
    const [email, setEmail]: any = useState('');
    const [password, setPassword]: any = useState(''); 

    const handleEmail = (event: any) =>{
      setEmail(event.target.value)
    }
    
    const handlePassword = (event: any) =>{
      setPassword(event.target.value)
    }

    const handleSubmit = () =>{
      API.post('users/login', {user: {email, password}},
      {headers: {'Authorization': localStorage.getItem('Token')}})
      .then((res: any) =>{
        console.log(res);
      localStorage.setItem('Token', res.data.token);
      }).catch((error: any) =>{
        console.error(error);
      })
    }

  return(
    
    <div className={classes.SignIn}>
      <ReactWOW animation="jackInTheBox">
      <Grid container spacing={2} className={classes.root}>
          <Grid item xs={12} className={classes.title}><Typography variant="h5">Sign In</Typography></Grid>
          
          <form className={classes.form} onSubmit={handleSubmit}>

        <Grid item xs={12}>
          <TextFeild className={classes.textFeild} variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email" 
            onChange={handleEmail}/>
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
            autoComplete="current password"
            onChange={handlePassword} />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>Sign In</Button>
        </Grid>
        </form>
      </Grid></ReactWOW>
    </div>
    
  )
  

}

export default SignIn;