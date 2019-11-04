import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ProfileTabs from '../ProfileTabs/index'
import ReactWOW from 'react-wow'
import '../../animate.css'
import {useStyle} from './style'
import API from 'axios'

export interface ProfileInterface{
    children: React.ReactNode
}

const Profile: React.FC = ()=>{
    const [image, setImage]: any = useState('');
    const [username, setUsername]: any = useState('');
    const [bio, setBio]: any = useState(''); //not useing here now
    const [following, setFellowing]: any = useState(false) //not useing here now
    
    useEffect(() =>{
        const handleProfileInfo = () =>{
            API.get('profiles/:username')
            .then(res =>{
                console.log(res);
                console.log(res.data);
                setImage(res.data.profile.image);
                setUsername(res.data.profile.username);
                setBio(res.data.profile.bio);
                setFellowing(res.data.profile.following);
            })
            .catch(err =>{
                console.error(err);
                
            })
        }
    }, [])
    
    
    const classes = useStyle()
    return(
        <div>
                <header className={classes.header}>
                    <div className={classes.info_section} >
                        <ReactWOW animation="rubberBand">
                        <img src={image} alt="pic" className={classes.img}/>
                        </ReactWOW>
1
                        <ReactWOW animation="slideInUp">
                        <Typography variant="h6" component="h6">
                           {username}
                        </Typography>
                        </ReactWOW>

                        <ReactWOW animation="fadeIn">
                        <Button variant="contained" color="secondary" size="small" className={classes.Button}><i className="fas fa-cogs" style={{padding: '5px'}}></i> Edit Profile Settings</Button>
                        </ReactWOW>
                    </div>
                </header>

                <div className={classes.tabs_section} >
                    <ProfileTabs />
                </div>
        </div>
    )

}

export default Profile;