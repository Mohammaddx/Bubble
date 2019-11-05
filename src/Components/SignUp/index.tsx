import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid'
import TextFeild from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography  from '@material-ui/core/Typography'
import {useStyles} from './style'
import API from '../../utils/axios'
import ReactWOW from 'react-wow'
import '../../animate.css'

export interface SignUpInterface{
  children: React.ReactNode
}

const SignUp: React.FC = ()=>{
  const [username, setUsername]:any = useState('');
  const [email, setEmail]:any = useState('');
  const [password, setPassword]: any = useState('');

  const handleUsername = (event:any) =>{
    setUsername(event.target.value)
  }

  const handleEmail = (event:any) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event: any) => {
    setPassword(event.target.value)
    
  }

  const handleSubmit = async () =>{
    API.post('users',{user: {username, email, password}})
    .then(res =>{
    }).catch((error: any)=>{
      console.log(error) 
    });
  } 

  const classes = useStyles();
  return(
    <div className={classes.SignUp}>
      <ReactWOW animation="jackInTheBox">
      <Grid container spacing={2} className={classes.root}>
          <Grid item xs={12} className={classes.title}><Typography variant="h5">Sign Up</Typography></Grid>
          <form className={classes.form} onSubmit={handleSubmit}>
        <Grid item xs={12}>
          <TextFeild className={classes.textFeild} variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={handleUsername} />
        </Grid>

        <Grid item xs={12}>
          <TextFeild className={classes.textFeild} variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            onChange={handleEmail} />
        </Grid>

        <Grid item xs={12}>
          <TextFeild className={classes.textFeild} variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            name="password"
            autoComplete="current password" 
            onChange={handlePassword}/>
        </Grid>

        <Grid item xs={12}>
          <Button type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>Sign UP</Button>
        </Grid>
        </form>
      </Grid></ReactWOW>
    </div>
  )
    SignUp.defaultProps = {
      children: null
    }
}

export default SignUp;