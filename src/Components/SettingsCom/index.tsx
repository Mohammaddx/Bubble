import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import ReactWOW from 'react-wow'
import '../../animate.css'
import {useStyle} from './style'
import API from 'axios'

export interface SettingsInterface{
    children: React.ReactNode,
}


const Settings: React.FC = () =>{
    
const [url, setURL]: any = useState('');
const [username, setUsername]: any = useState('');
const [bio, setBio]: any = useState('');
const [email, setEmail]: any = useState('');
const [password, setPassword]: any = useState('');

const handleURL = (event: any) =>{
    setURL(event.target.value);
}

const handleUsername = (event: any) =>{
    setUsername(event.target.value)
}

const handleBio = (event: any) =>{
    setBio(event.target.value)
}

const handleEmail = (event: any) => {
    setEmail(event.target.value)
}

const handlePassword = (event: any) =>{
    setPassword(event.target.value)
}

const handleSubmit = () =>{
    API.post('users', {user: {url, username, bio, email, password}})
    .then(res =>{
        console.log(res);
        console.log(res.data);
    })
}
    const classes = useStyle()
    return(
        <div className={classes.root}>
            <div className={classes.rootChild}>
                <ReactWOW animation="zoomIn">
            <form style={{margin: 'auto'}} onSubmit={handleSubmit}>
                <Typography variant="h4" component="h2">
                    Your Settings
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <TextField
                    id="outlined-email-input"
                    label="URL of profile picture"
                    className={classes.textField}
                    type="text"
                    name="url"
                    margin="normal"
                    variant="outlined"
                    onChange={handleURL}
                     />
                    </Grid>

                    <Grid item xs={12}>
                    <TextField
                    id="outlined-email-input"
                    label="User Name"
                    className={classes.textField}
                    type="text"
                    name="username"
                    margin="normal"
                    variant="outlined"
                    onChange={handleUsername}
                     />
                    </Grid>

                    <Grid item xs={12}>
                    <TextField
                    id="outlined-email-input"
                    label="Short bio about you"
                    className={classes.textField}
                    type="text"
                    name="bio"
                    margin="normal"
                    variant="outlined"
                    rowsMax={10}
                    multiline={true}
                    onChange={handleBio}
                     />
                    </Grid>

                    <Grid item xs={12}>
                    <TextField
                    id="outlined-email-input"
                    label="E-mail"
                    className={classes.textField}
                    type="email"
                    name="email"
                    margin="normal"
                    variant="outlined"
                    onChange={handleEmail}
                     />
                    </Grid>

                    <Grid item xs={12}>
                    <TextField
                    id="outlined-email-input"
                    label="password"
                    className={classes.textField}
                    type="password"
                    name="password"
                    margin="normal"
                    variant="outlined"
                    onChange={handlePassword}
                     />
                    </Grid>

                   <Button className={classes.button}>Update Settings</Button>
                </Grid>
            </form>
            </ReactWOW>
            <div className={classes.divFooter}>
            <hr/>

                <Button variant="outlined" color="secondary">or click here to logout</Button>
                </div>

            </div>
            
            
        </div>
    )

    Settings.defaultProps = {
        children: null
    }
}

export default Settings;