import React, {useContext, useState} from 'react';
import Comment from '../Comment/index'
import {context} from '../ContextAPI/index'

const CommentList: React.FC = () =>{
    const [comment , setCommnts]: any = useContext(context)
    return(
        
        <div style={{margin: '50px'}}>
        {comment.map((el: any) =>(
            <Comment text={el&&el.text}/>
        ))}
        </div>
    )
}

export default CommentList;