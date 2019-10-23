import React, {useContext} from 'react';
import Comment from '../Comment/index'
import {context} from '../ContextAPI/index'

export interface CommentListInterface{
    children: React.ReactNode,
}
const CommentList: React.FC = () =>{
    const [comment , setCommnts]: any = useContext(context)
    return(
        
        <div style={{margin: '50px'}}>
        {comment.map((el: any) =>(
            <Comment text={el&&el.text}/>
        ))}
        </div>
    )

    CommentList.defaultProps = {
        children: null
    }
}

export default CommentList;