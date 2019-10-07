import React from 'react';
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import {AppContextConsumer} from '../ContextAPI/index'
import {useStyle} from './style'

const Comment: React.FC<{text:string}> = ({text}) =>{
    const classes = useStyle()
    return(
        
        <AppContextConsumer>
            {appContext =>
                appContext && (
                    <div className={classes.root}>
            <div>
            <p className={classes.paragraph}>{text}</p>
            <Button size='small'
                    variant="contained" 
                    className={classes.Button}>
                        <DeleteIcon /> Remove Comment</Button>
            </div>
        </div>
                )}
        
        </AppContextConsumer>
    )
}

export default Comment;
