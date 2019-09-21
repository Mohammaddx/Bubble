import React, {useState} from 'react';

export const ContextComment = React.createContext<any | null>(null)
export const ctxt = ContextComment.Provider

const ContextAPI: React.FC = (props)=>{
    const [comments, setComments] = useState([])
    return(
        <div>
            
        </div>
    )
}

export default ContextAPI;