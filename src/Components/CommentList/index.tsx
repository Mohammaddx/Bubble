import React, {useState, useEffect} from 'react';
import Comment from '../Comment/index'
import AXIOS from '../../utils/axios'

export interface CommentListInterface{
    children: React.ReactNode,
}
const CommentList: React.FC = () =>{
    
    const [comment, setComment]: any = useState([]);

    useEffect(() =>{
        AXIOS.get('articles/:slug/comments')
        .then(res =>{
            console.log(res);
            console.log(res.data);
            setComment(res.data.comment);
        })
    }, []);

    const addComment = comment.map((el:any) => <Comment body={el.body}/>)
    return(
        
        <div style={{margin: '50px'}}>
            {addComment}
        </div>
    )
}

export default CommentList;