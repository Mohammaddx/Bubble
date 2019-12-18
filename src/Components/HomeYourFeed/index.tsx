import React, { useState, useEffect } from "react";
import Article from "../Article/index";
import AXIOS from "../../utils/axios";
import Pagination from "../Pagination/pagination";

export interface HomeYourFeedInterface {
  children: React.ReactNode;
  image: string;
  title: string;
  body: string;
  tagList: string[];
  createdAt: string;
  favorited: boolean;
  favoritesCount: number;
  username: string;
  slug: string;
  articlesPerPage: number;
  totalArticles: number;
  paginate: any;
}

const HomeYourFeed: React.FC = () => {
  const [article, setArticle]: any = useState([]);
  const [isEmpty, setIsEmpty]: any = useState();
  const [currentPage, setCurrentPage]: any = useState(1);
  const [articlesPerPage]: any = useState(5);

  useEffect(() => {
    const fetchArticles = async () => {
      AXIOS.get("articles/feed")
        .then((res: any) => {
          setIsEmpty(res.data.articles.length);
          setArticle(res.data.articles);
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

  return (
    <div>
      <p>{isEmpty === 0 ? "Sorry, No articles yet..." : ""}</p>
      {currentArticles.map((el: any, index: number) => (
        <Article
          key={index}
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

export default HomeYourFeed;
