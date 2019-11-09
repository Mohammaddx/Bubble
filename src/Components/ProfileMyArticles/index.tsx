import React, {useState, useEffect} from 'react';
import Article from '../Article/index'
import AXIOS from '../../utils/axios'
import utl from '../../utils/utils'

export interface MyArticlesInterface{
    children: React.ReactNode,
    image: string,
    title: string,
    body: string,
    tagList: string,
    createdAt: string,
    favorited: boolean,
    favoritesCount: number,
    username: string,
    slug: string
}

const MyArticles: React.FC = () =>{
    const [article, setArticle]:any = useState([]);
    const [name, setName]: any = useState('');

    useEffect(()=>{
        let path = window.location.pathname;
        let filename = path.substring(path.indexOf('@')+2);
        if(path.indexOf('@') !== 9){
            setName(utl.userData().username);
            AXIOS.get('articles')
            .then((res: any) =>{
                    setArticle(res.data.articles);
            }).catch((error: any) =>{
                console.log(error);
                
            })
        }else if (path.indexOf('@') === 9){
            setName(filename);
            AXIOS.get('articles')
            .then((res: any) =>{
                    setArticle(res.data.articles);
            }).catch((error: any) =>{
                console.log(error);
                
            })
        }
          
        
    }, [])
     
    const articleEL = article.map((el: any) =>{
        if(el.author.username ==  name){
           return(
            <Article key={el} slug={el.slug} image={el.author.image} title={el.title} body={el.body} tagList={el.tagList} 
            createdAt={el.createdAt} favorited={el.favorited} favoritesCount={el.favoritesCount} username={el.author.username}/>
           )
        }
            
        
        
    })

    return(
        <div >
            {articleEL}
          
        </div>
    )

}

export default MyArticles;