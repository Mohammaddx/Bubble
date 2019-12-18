import React, { useState, useEffect } from "react";
import Article from "../Article/index";

export interface ArticlesByTags {
  ArticlesByTags: any[];
}

const ArticlesByTags: React.FC<{ articleDataForTag: any[] }> = ({
  articleDataForTag
}) => {
  const [article, setArticle]: any = useState([]);
  useEffect(() => {
    setArticle(articleDataForTag);
  }, [articleDataForTag]);
  return (
    <div>
      {article.map((el: any, index: number) => (
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
    </div>
  );
};
export default ArticlesByTags;
