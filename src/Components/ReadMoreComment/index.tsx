import React, {useState, useContext} from 'react';
import Button from '@material-ui/core/Button'
import {context} from '../ContextAPI/index'
import {useStyle} from './style'

const ReadMoreCommnet: React.FC = (props: any) =>{
    const classes = useStyle()
   const [text, setText] = useState('')

   const addText = (e: any) =>{
    setText(e.target.value)
   }

   const [comment, setComments]: any = useContext(context)
   
   const addComment = (e: any) =>{
       e.preventDefault()
       setComments(comment.concat({text}));
       setText("")
   }
    return(
        <div>
            <form className={classes.form} onSubmit={addComment}>
            <div className={classes.root}> 
                <textarea placeholder='Write a Comment...' 
                          className={classes.textarea}
                          value={text} 
                          onChange={addText}>

                </textarea>
                <div className={classes.divFooter}> 
                    <Button type="submit" 
                            variant='contained'
                            className={classes.button}>Post Comment</Button>
                </div>
            </div>
            </form>
            
        </div>
    )
}

export default ReadMoreCommnet;