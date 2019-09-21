import * as React from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Avatar from '@material-ui/core/Avatar'
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'

const useStyle = makeStyles((theme: Theme)=>
    createStyles({
        root:{
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
        avatar: {
            margin: 'auto',
            backgroundColor: '#fff'
        },
        icon: {
            backgroundColor: '#fff',
            color: '#21CBF3'
        }
          
    })
    
    )

const NewArticle: React.FC = () =>{
    const classes = useStyle();
    return(

        <div className={classes.root}>
            <Grid container spacing={2}>
                <form style={{width: '100%'}}>
                <Avatar className={classes.avatar}>
                    <AssignmentIcon className={classes.icon} fontSize='large'/>
                </Avatar> 
                <Grid item xs={12}>
                <TextField
                    id="outlined-email-input"
                    label="Article Title"
                    className={classes.textField}
                    type="text"
                    name="ArticleTitle"
                    margin="normal"
                    variant="outlined"
                     />
                </Grid>

                <Grid item xs={12}>
                <TextField
                    id="outlined-email-input"
                    label="What's this article about?"
                    className={classes.textField}
                    type="text"
                    name="about"
                    margin="normal"
                    variant="outlined"
                     />
                </Grid>

                <Grid item xs={12}>
                <TextField
                    id="outlined-email-input"
                    label="Write your article (in markdown)"
                    className={classes.textField}
                    type="text"
                    name="writeArticle"
                    margin="normal"
                    variant="outlined"
                    rowsMax={10}
                    multiline={true}
                     />
                </Grid>

                <Grid item xs={12}>
                <TextField
                    id="outlined-email-input"
                    label="Enter Tags"
                    className={classes.textField}
                    type="text"
                    name="EnterTags"
                    margin="normal"
                    variant="outlined"
                     />
                </Grid>

                <Button className={classes.button}>Publish Article</Button>
                </form>


             </Grid>
        </div>
    )
}

export default NewArticle;