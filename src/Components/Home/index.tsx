import * as React from 'react';
import HomeTabs from '../HomeTabs/index'
import PopulerTags from '../PopulerTags/index'
import {useStyle} from './style'


const Home: React.FC = ()=>{
    const classes = useStyle()
    return(
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.home_tabs}>
                    <HomeTabs />
                </div>
                <div className={classes.populer_tags}>
                    <PopulerTags />
                </div>
            </div>
        </div>
    )
}

export default Home;