import React, {useState, useEffect} from 'react';
import Article from '../Article/index'
import API from '../../axios'

export interface HomeGlobalFeedInterface{
    children: React.ReactNode,
    image: string,
    title: string,
    body: string,
    tagList: string,
    createdAt: string,
    favorited: boolean,
    favoritedCount: number,
    username: string
}
const HomeGlobalFeed: React.FC = ()=>{
    const [article, setArticle]: any = useState([]);

    useEffect(()=>{
       
            API.get('articles/feed')
            .then((res: any) =>{
                setArticle(res.data.articles)
            }).catch((error: any) =>{
                console.log(error);
                
            })
        
    }, [])

    const articleEL = article.map((el: any) =>(
        <Article key={el} image={el.author.image} title={el.title} body={el.body} tagList={el.tagList} 
        createdAt={el.createdAt} favorited={el.favorited} favoritedCount={el.favoritedCount} username={el.author.username}/>
  ))
    
    
    return(
        <div className="container">
           {articleEL}
            
        </div>
    )
}

export default HomeGlobalFeed;