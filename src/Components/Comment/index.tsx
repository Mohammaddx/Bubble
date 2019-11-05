import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import {useStyle} from './style'
import AXIOS from '../../utils/axios'

export interface CommentInterface{
    children: React.ReactNode,
}



const Comment: React.FC<{body: string}> = (body) =>{
    const [comment, setComment]: any = useState([]);

    useEffect(() =>{
        AXIOS.get('articles/:slug/comments')
        .then(res =>{
            console.log(res);
            console.log(res.data);
            setComment(res.data.comment);
        })
    }, []);

    const addComment = comment.map((el:any) =>(
        <div>
        <p className={classes.paragraph}>{el.body}</p>
        <Button size='small'
                variant="contained" 
                className={classes.Button}>
                    <DeleteIcon /> Remove Comment</Button>
        </div>
    ))
    
    const classes = useStyle()

    return(
                    <div className={classes.root}>
                          <div>
        <p className={classes.paragraph}>{body}</p>
        <Button size='small'
                variant="contained" 
                className={classes.Button}>
                    <DeleteIcon /> Remove Comment</Button>
                    
        </div>
                        {addComment}
        </div>
                
        
      
    )

}

export default Comment;
