import * as React from 'react';

export interface ArticleBodyInterface{
    children: React.ReactNode
}

const ArticleBody: React.FC = () =>{
    return(
        <div>
            <h3>Title</h3>
            <p>this is the paragraph about the title</p>
        </div>
    )

    ArticleBody.defaultProps = {
        children: null
    }
}

export default ArticleBody;