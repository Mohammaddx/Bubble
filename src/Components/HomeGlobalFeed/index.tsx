import React, { useState, useEffect } from "react";
import Article from "../Article/index";
import AXIOS from "../../utils/axios";
import Pagination from "../Pagination/pagination";

export interface HomeGlobalFeedInterface {
  children: React.ReactNode;
  image: string;
  title: string;
  body: string;
  tagList: string;
  createdAt: string;
  favorited: boolean;
  favoritesCount: number;
  username: string;
  articlesPerPage: number;
  totalArticles: number;
  paginate: any;
}
const HomeGlobalFeed: React.FC = () => {
  const [article, setArticle]: any = useState([]);
  const [loading, setLoading]: any = useState(false);
  const [currentPage, setCurrentPage]: any = useState(1);
  const [articlesPerPage]: any = useState(5);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      AXIOS.get("articles")
        .then((res: any) => {
          setArticle(res.data.articles);
          setLoading(false);
        })
        .catch((error: any) => {
          console.log(error);
        });
    };

    fetchArticles();
  }, []);

  //Get current Articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = article.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  //Change Page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return <p>Article loading...</p>;
  }

  return (
    <div className="container">
      {currentArticles.map((el: any) => (
        <Article
          key={el}
          slug={el.slug}
          image={el.author.image}
          title={el.title}
          body={el.body}
          tagList={el.tagList}
          createdAt={el.createdAt}
          favorited={el.favorited}
          favoritesCount={el.favoritesCount}
          username={el.author.username}
        />
      ))}
      <div className="Pagination_Section">
        <Pagination
          articlesPerPage={articlesPerPage}
          totalArticles={article.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default HomeGlobalFeed;
