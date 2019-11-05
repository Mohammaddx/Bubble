import React, {useState, useEffect} from 'react';
import Pic from './me.jpg'
import Button from '@material-ui/core/Button'
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useStyle} from './style'
import API from '../../utils/axios'

export interface ReadMoreInfoProfileInterface{
    children: React.ReactNode
}

const ReadMoreInfoProfile: React.FC = ()=>{
    const {follow, setFollow}: any = useState(false);
    const {wordShows, setWordShows}: any = useState('');
  
         let bool:boolean = false;

        const followOrNot = () =>{
            if(bool == false){
                setFollow(true);
                setWordShows('-Unfollow')
                bool = true;
            }else if (bool == true){
                setFollow(false);
                setWordShows('+Follow')
                bool = false;
            }
        }

       
    

    const classes = useStyle()
    return(
        <div className={classes.Profile_info} >
            <div className={classes.root}>
            <div className={classes.root}>
                <img src={Pic} alt="pic" className={classes.img}/>
                <div className="text_info">
                    <h4 style={{color:"#fff"}}>Mohammad Ahmad</h4>
                    <span style={{color: '#fff'}}><i className="fas fa-history"></i> Septemper 12, 2019</span>
                </div>
            </div>
            <Button variant='contained' color='primary' size='small' className={classes.button} onClick={followOrNot}>{wordShows}</Button> 
            <Button variant='contained' color='secondary' size='small' className={classes.button}><FavoriteIcon /> unfavorite Articles (2)</Button>
            </div>
        </div>
    )

}

export default ReadMoreInfoProfile;