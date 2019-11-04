import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Avatar from '@material-ui/core/Avatar'
import ReactWOW from 'react-wow'
import '../../animate.css'
import {useStyle} from './style'
import API from '../../axios'

export interface NewArticleInterface{
    children: React.ReactNode,
}

const NewArticle: React.FC = () =>{

    const [title, setTitle]: any = useState('');
    const [desc, setDesc]: any = useState('');
    const [body, setBody]: any = useState('');
    const [tagList, setTagList]: any = useState([])

    const handleTitle = (event: any) =>{
        setTitle(event.target.value);
    }

    const handleDesc = (event: any) =>{
        setDesc(event.target.value)
    }

    const handleBody = (event: any) =>{
        setBody(event.target.value)
    }

    const handleTagList = (event: any) => {
        setTagList(event.target.value.split(" "));
    }

    const handleSubmit = () =>{
        API.post('articles', {article: {title, desc, body, tagList}})
        .then(res =>{
            console.log(res);
            console.log(res.data);
        }).catch((error: any) =>{
            console.error(error);
        })
    }

    const classes = useStyle();
    return(

        <div className={classes.root}>
            <Grid container spacing={2}>
                <form style={{width: '100%'}} onSubmit={handleSubmit}>
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
                    onChange={handleTitle}
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
                    onChange={handleDesc}
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
                    onChange={handleBody}
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
                    onChange={handleTagList}
                     /></ReactWOW>
                </Grid>

                <Button className={classes.button}>Publish Article</Button>
                </form>


             </Grid>
        </div>
    )

    NewArticle.defaultProps = {
        children: null
    }
}

export default NewArticle;