import React, {useState, useEffect} from 'react';
import Article from '../Article/index'
import AXIOS from '../../utils/axios'

export interface HomeGlobalFeedInterface{
    children: React.ReactNode,
    image: string,
    title: string,
    body: string,
    tagList: string,
    createdAt: string,
    favorited: boolean,
    favoritesCount: number,
    username: string
}
const HomeGlobalFeed: React.FC = ()=>{
    const [article, setArticle]: any = useState([]);

    useEffect(()=>{
        AXIOS.get('articles/feed')
        .then((res: any) =>{
            if(res.data.articles.length == 0){
                alert("Sorry, we don't have a data now in Global Feed!")
            }else{
                if(res.data.articles.author.following == true){
                    setArticle(res.data.articles)
                }
            }
        }).catch((error: any) =>{
            console.log(error);
            
        })
    
}, [])
 

    const articleEL = article.map((el: any) =>(
        <Article key={el} slug={el.slug} image={el.author.image} title={el.title} body={el.body} tagList={el.tagList} 
        createdAt={el.createdAt} favorited={el.favorited} favoritesCount={el.favoritesCount} username={el.author.username}/>
  ))
    
    
    return(
        <div className="container">
           {articleEL}
            
        </div>
    )
}

export default HomeGlobalFeed;