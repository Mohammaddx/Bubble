import * as React from "react";
import Typography from "@material-ui/core/Typography";

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
      <Typography component="h5" variant="h5" style={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <p>{body}</p>
    </div>
  );
};

export default ArticleBody;
