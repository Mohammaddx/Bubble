import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button'
import FavoriteIcon from '@material-ui/icons/Favorite';
import pic from './me.jpg'
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'

const useStyle = makeStyles((theme: Theme)=>
    createStyles({
        root: {
            display: 'flex',
            padding: '15px',
            justifyContent: 'space-around',
            fontSize: '13px'

        },
        img: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            position: 'relative',
            top: '12px'
        }
    })
    )

const ArticleHeader: React.FC = ()=>{
    const [count, setCount] = useState(0)
    const [variant, setVariant] = useState('outlined')

    let bool: boolean = false;

    const changeCountAndVariant = ()=>{
        if(bool === false){
            setCount(count+1)
            bool = true
            setVariant('contained')
            console.log(bool);
            
        }else{
            if(bool === true){
                setCount(count-1)
                bool = false
                setVariant('outlined')
                console.log(bool);
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
            <div style={{padding: '10px' , textAlign: 'left', }}>
                <h4 style={{color: ' dodgerblue',}}>Mohammad Ahmad</h4>
                <span style={{color: '#aaa'}}><i className="fas fa-history"></i> septemper 12, 2019</span>
            </div>   
            </div> 

            <Button size="medium" color="secondary" onClick={changeCountAndVariant} variant={variant}
            style={{height: '40px', position: 'relative', top: '40px'}}> <FavoriteIcon /> <span>{count}</span></Button>
        </div>
    )
}

export default ArticleHeader;