import React, {useState, useContext} from 'react';
import Button from '@material-ui/core/Button'
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'
import {context} from '../ContextAPI/index'

const useStyle = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            border: '1px solid #aaa',
            width: '60%',
            margin: 'auto',
            padding: '10px',
            minWidth: '300px'
        },
        textarea: {
            width: '100%',
            height: '120px',
            fontSize: '20px',
            fontFamily: 'sans-serif',
            borderWidth: '0px'
        },
        divFooter: {
            backgroundColor: '#eee',
            padding: '10px',
        },
        button: {
            border: '1px solid green',
            color: '#fff',
            backgroundColor: 'green',
            boxshadow: '1px 1px 10px 1px #aaa',
            '&:hover': {
                color: '#fff',
                backgroundColor: 'green',
            }
        },
        form: {
            margin: 'auto'
        }
        
    })
    )
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