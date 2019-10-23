import * as React from 'react';
import Article from '../Article/index'

export interface FavioretArticleInterface{
    children: React.ReactNode,
}

const FavioretArticle: React.FC = ()=>{
    return(
        <div style={{border: '1px solid #aaa'}}>
            <Article />
        </div>
    )
    FavioretArticle.defaultProps = {
        children: null
    }
}

export default FavioretArticle;