import React, {useState} from 'react';
import Button from '@material-ui/core/Button'
import FavoriteIcon from '@material-ui/icons/Favorite';
import pic from './me.jpg'
import {useStyle} from  './style'

export interface ArticleHeaderInterface{
    children: React.ReactNode,
    username: string,
    image: string,
    createdat: string,
    favorited: boolean,
    favoritesCount: number
}

const ArticleHeader: React.FC<{username: string, image: string, createdat: string, favorited: boolean, favoritesCount: number}> = ({username, image, createdat, favorited, favoritesCount})=>{

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
            <img src={image} alt="profile picture" className={classes.img}/>
            </div>
            <div className={classes.HeaderDiv}>
                <h4 className={classes.HeaderDivH4}>{username}</h4>
                <span className={classes.HeaderDivSpan}><i className="fas fa-history"></i> {createdat} </span>
            </div>   
            </div> 

            <Button size="medium" color="secondary" onClick={changeCountAndVariant} variant={variant}
            className={classes.Button}> <FavoriteIcon /> <span>{favoritesCount}</span></Button>
        </div>
    )

}

export default ArticleHeader;