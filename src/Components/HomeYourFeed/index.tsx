import * as React from 'react';
import Article from '../Article/index'

export interface HomeYourFeedInterface{
    children: React.ReactNode,
}

const HomeYourFeed: React.FC = ()=>{
    return(
        <div>
            <Article />
        </div>
    )

    HomeYourFeed.defaultProps = {
        children: true
    }
}

export default HomeYourFeed;