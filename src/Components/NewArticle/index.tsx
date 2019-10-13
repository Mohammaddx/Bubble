import * as React from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Avatar from '@material-ui/core/Avatar'
import ReactWOW from 'react-wow'
import '../../animate.css'
import {useStyle} from './style'

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
                <ReactWOW animation="fadeInLeftBig">
                <TextField
                    id="outlined-email-input"
                    label="Article Title"
                    className={classes.textField}
                    type="text"
                    name="ArticleTitle"
                    margin="normal"
                    variant="outlined"
                     /></ReactWOW>
                </Grid>

                <Grid item xs={12}>
                <ReactWOW animation="fadeInRightBig">
                <TextField
                    id="outlined-email-input"
                    label="What's this article about?"
                    className={classes.textField}
                    type="text"
                    name="about"
                    margin="normal"
                    variant="outlined"
                     /></ReactWOW>
                </Grid>

                <Grid item xs={12}>
                <ReactWOW animation="fadeInUp">
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
                     /></ReactWOW>
                </Grid>

                <Grid item xs={12}>
                <ReactWOW animation="fadeIn">
                <TextField
                    id="outlined-email-input"
                    label="Enter Tags"
                    className={classes.textField}
                    type="text"
                    name="EnterTags"
                    margin="normal"
                    variant="outlined"
                     /></ReactWOW>
                </Grid>

                <Button className={classes.button}>Publish Article</Button>
                </form>


             </Grid>
        </div>
    )
}

export default NewArticle;