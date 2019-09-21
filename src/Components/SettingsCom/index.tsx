import * as React from 'react';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'

const useStyle = makeStyles((theme: Theme)=>
    createStyles({
        root:{
            width: '100%'
        },
        rootChild: {
            width: '80%',
            margin: 'auto',
            padding: '20px'
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '100%'
        },
        button: {
               
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
            margin: 'auto',
            position: 'relative',
            top: '30px'
        },
        divFooter: {
            position: 'relative',
            top: '50px',
            padding: '25px'
        }
    })
    )
const Settings: React.FC = () =>{
    const classes = useStyle()
    return(
        <div className={classes.root}>
            <div className={classes.rootChild}>
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

            <div className={classes.divFooter}>
            <hr/>

                <Button variant="outlined" color="secondary">or click here to logout</Button>
                </div>

            </div>
            
            
        </div>
    )
}

export default Settings;