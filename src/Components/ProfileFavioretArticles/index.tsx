import React, {useState, useEffect} from 'react';
import Article from '../Article/index'
import API from '../../axios'

export interface FavioretArticleInterface{
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

const FavioretArticle: React.FC = ()=>{
    const [article, setArticle] = useState([]);

    useEffect(()=>{
        
            API.get('articles')
            .then((res: any) =>{
                console.log(res.data);
                if(res.data.articles.favorited == true){
                   setArticle(res.data.articles);
                }
               
            }).catch((error: any) =>{
                console.log(error);
                
            })
        
    }, [])
        
    const articleEL = article.map((el: any) =>(
        <Article key={el} image={el.author.image} title={el.title} body={el.body} tagList={el.tagList} 
        createdAt={el.createdAt} favorited={el.favorited} favoritedCount={el.favoritedCount} username={el.author.username}/>
  ))

    return(
        <div style={{border: '1px solid #aaa'}}>
            {articleEL}
        </div>
    )

}

export default FavioretArticle;