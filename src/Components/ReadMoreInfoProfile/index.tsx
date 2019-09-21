import React from 'react';
import Pic from './me.jpg'
import Button from '@material-ui/core/Button'
import FavoriteIcon from '@material-ui/icons/Favorite';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'

const useStyle = makeStyles((theme: Theme)=>
    createStyles({
        root: {
            display: 'flex',
            margin: '10px',
            justifyContent: 'center'
        },
        img: {
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            position: 'relative',
            top: '15px'
        },
        button: {
            height: '50px',
            margin: '10px',
            position: 'relative',
            top: '25px'
        }
    })
    )

const ReadMoreInfoProfile: React.FC = ()=>{
    const classes = useStyle()
    return(
        <div className="Profile_info" style={{position: 'relative' , marginTop: '70px'}}>
            <div className={classes.root}>
            <div className={classes.root}>
                <img src={Pic} alt="Profile Picture" className={classes.img}/>
                <div className="text_info">
                    <h4 style={{color:"#fff"}}>Mohammad Ahmad</h4>
                    <span style={{color: '#fff'}}><i className="fas fa-history"></i> Septemper 12, 2019</span>
                </div>
            </div>
            <Button variant='contained' color='primary' size='small' className={classes.button}>+ Follow Mohammad Ahmad</Button> 
            <Button variant='contained' color='secondary' size='small' className={classes.button}><FavoriteIcon /> unfavorite Articles (2)</Button>
            </div>
        </div>
    )
}

export default ReadMoreInfoProfile;