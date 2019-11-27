import * as React from "react";

export interface ArticleBodyInterface {
  children: React.ReactNode;
  title: string;
  body: string;
}

const ArticleBody: React.FC<{ title: string; body: string }> = ({
  title,
  body
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default ArticleBody;
