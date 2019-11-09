import React, {useState, useEffect} from 'react';
import Comment from '../Comment/index'
import AXIOS from '../../utils/axios'

export interface CommentListInterface{
    children: React.ReactNode,
}
const CommentList: React.FC<{slug: string}> = ({slug}) =>{
    
    const [comment, setComment]: any = useState([]);

    useEffect(() =>{
        AXIOS.get(`rticles/${slug}/comments`)
        .then(res => {
            console.log(res.data);
        })
        .catch(error => console.log(error)
        )
    }, []);

    const addComment = comment.map((el:any) => <Comment body={el.body} key={el} slug={slug} id={el.id}/>)
    return(
        
        <div style={{margin: '50px'}}>
            {addComment}
        </div>
    )
}

export default CommentList;