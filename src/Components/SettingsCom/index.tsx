import * as React from 'react';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import ReactWOW from 'react-wow'
import '../../animate.css'
import {useStyle} from './style'

const Settings: React.FC = () =>{
    const classes = useStyle()
    return(
        <div className={classes.root}>
            <div className={classes.rootChild}>
                <ReactWOW animation="zoomIn">
            <form style={{margin: 'auto'}}>
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
}

export default Settings;