import React from 'react';
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import {AppContextConsumer} from '../ContextAPI/index'

const Comment: React.FC<{text:string}> = ({text}) =>{
    
    return(
        <AppContextConsumer>
            {appContext =>
                appContext && (
                    <div style={{border: '1px solid #aaa', width: '50%', 
                    margin: '10px auto', padding: '10px', minHeight: '120px',
                    minWidth: '300px', backgroundColor: '#eee'}}>
            <div>
            <p style={{border: '1px solid #aaa' , height:' 100px', 
                        padding: '5px', backgroundColor: '#fff'}}>{text}</p>
            <Button size='small'
                    variant="contained" 
                    style={{backgroundColor: 'red', color: '#fff'}}>
                        <DeleteIcon /> Remove Comment</Button>
            </div>
        </div>
                )}
        
        </AppContextConsumer>
    )
}

export default Comment;
