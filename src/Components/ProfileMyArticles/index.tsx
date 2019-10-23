import * as React from 'react';
import Article from '../Article/index'

export interface MyArticlesInterface{
    children: React.ReactNode
}

const MyArticles: React.FC = () =>{
    return(
        <div style={{border: '1px solid #aaa'}}>
            <Article />
        </div>
    )

    MyArticles.defaultProps = {
        children: true
    }
}

export default MyArticles;