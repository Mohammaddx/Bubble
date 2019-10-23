import React from 'react';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Logo from './me.jpg'
import ProfileTabs from '../ProfileTabs/index'
import ReactWOW from 'react-wow'
import '../../animate.css'
import {useStyle} from './style'

export interface ProfileInterface{
    children: React.ReactNode
}

const Profile: React.FC = ()=>{
    const classes = useStyle()
    return(
        <div>
                <header className={classes.header}>
                    <div className={classes.info_section} >
                        <ReactWOW animation="rubberBand">
                        <img src={Logo} alt="pic" className={classes.img}/>
                        </ReactWOW>

                        <ReactWOW animation="slideInUp">
                        <Typography variant="h6" component="h6">
                            Mohammad Ahmad
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

    Profile.defaultProps = {
        children: null
    }
}

export default Profile;