import React, {useState} from 'react';
import Button from '@material-ui/core/Button'
import FavoriteIcon from '@material-ui/icons/Favorite';
import pic from './me.jpg'
import {useStyle} from  './style'

export interface ArticleHeaderInterface{
    children: React.ReactNode,
}

const ArticleHeader: React.FC = ()=>{
    const [count, setCount] = useState(0)
    const [variant, setVariant] = useState('outlined')

    let bool: boolean = false;

    const changeCountAndVariant = ()=>{
        if(bool === true){
            setCount(count-1)
            setVariant('outlined')
            bool = false
            console.log(bool);
            }

        else {
            if(bool === false){
            setCount(count+1)
            setVariant('contained')
            bool = true
            
        }
    }
        
    }

    const classes = useStyle()
    return(

        <div className={classes.root}>
           <div className={classes.root}>
               <div style={{padding: '10px'}}>
            <img src={pic} alt="profile picture" className={classes.img}/>
            </div>
            <div className={classes.HeaderDiv}>
                <h4 className={classes.HeaderDivH4}>Mohammad Ahmad</h4>
                <span className={classes.HeaderDivSpan}><i className="fas fa-history"></i> septemper 12, 2019</span>
            </div>   
            </div> 

            <Button size="medium" color="secondary" onClick={changeCountAndVariant} variant={variant}
            className={classes.Button}> <FavoriteIcon /> <span>{count}</span></Button>
        </div>
    )

    ArticleHeader.defaultProps={
        children: null
    }
}

export default ArticleHeader;