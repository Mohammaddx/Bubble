import * as React from 'react';
import HomeTabs from '../HomeTabs/index'
import PopulerTags from '../PopulerTags/index'
import './style.css'
const Home: React.FC = ()=>{
    return(
        <div className="home_section">
            <div className="container">
                <div className="home_tabs">
                    <HomeTabs />
                </div>
                <div className="populer_tags">
                    <PopulerTags />
                </div>
            </div>
        </div>
    )
}

export default Home;