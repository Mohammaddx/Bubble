import * as React from 'react';
import Article from '../Article/index'

export interface HomeGlobalFeedInterface{
    children: React.ReactNode
}
const HomeGlobalFeed: React.FC = ()=>{
    return(
        <div className="container">
            <Article />
        </div>
    )

    HomeGlobalFeed.defaultProps ={
        children: null
    }
}

export default HomeGlobalFeed;