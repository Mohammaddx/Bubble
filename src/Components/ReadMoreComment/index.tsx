import React, {useState, useContext,useEffect} from 'react';
import Button from '@material-ui/core/Button'
import {useStyle} from './style'
import API from '../../utils/axios'

export interface ReadMoreCommnetInterface{
    children: React.ReactNode
}

const ReadMoreCommnet: React.FC = (props: any) =>{
    const classes = useStyle()
    const [body, setBody]: any = useState('');
       const handleCommnetBody = (e: any) =>{
           setBody(e.target.value); 
       }
    return(
        <div>
            <form className={classes.form}>
            <div className={classes.root}> 
                <textarea placeholder='Write a Comment...' 
                          className={classes.textarea}
                          onChange={handleCommnetBody}>

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