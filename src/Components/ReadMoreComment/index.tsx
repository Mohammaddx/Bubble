import React, {useState, useContext} from 'react';
import Button from '@material-ui/core/Button'
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'

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
const ReadMoreCommnet: React.FC = () =>{
    const classes = useStyle()
   
    return(
        <div>
            <form className={classes.form}>
            <div className={classes.root}> 
                <textarea placeholder='Write a Comment...' className={classes.textarea} >

                </textarea>
                <div className={classes.divFooter}> 
                    <Button type="submit" variant='contained' className={classes.button}>Post Comment</Button>
                </div>
            </div>
            </form>
            
        </div>
    )
}

export default ReadMoreCommnet;