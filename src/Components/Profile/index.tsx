import React from 'react';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Logo from './me.jpg'
import ProfileTabs from '../ProfileTabs/index'

import {useStyle} from './style'

const Profile: React.FC = ()=>{
    const classes = useStyle()
    return(
        <div>
                <header className={classes.header}>
                    <div className={classes.info_section} >
                        <img src={Logo} alt="profiel picture" className={classes.img}/>
                        <Typography variant="h6" component="h6">
                            Mohammad Ahmad
                        </Typography>
                        <Button variant="contained" color="secondary" size="small" className={classes.Button}><i className="fas fa-cogs" style={{padding: '5px'}}></i> Edit Profile Settings</Button>
                    </div>
                </header>

                <div className={classes.tabs_section} >
                    <ProfileTabs />
                </div>
        </div>
    )
}

export default Profile;