import React from 'react';
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';

const Comment: React.FC = () =>{
    
    return(
        <div style={{border: '1px solid #aaa', width: '50%', margin: 'auto', padding: '10px', minHeight: '120px', minWidth: '300px'}}>
            <div>
            <p style={{border: '1px solid #aaa' , height:' 100px', padding: '5px'}}>this is really fucking shit</p>
            <Button variant="contained" style={{backgroundColor: 'red', color: '#fff'}}><DeleteIcon /> Remove Comment</Button>
            </div>
        </div>
    )
}

export default Comment;
