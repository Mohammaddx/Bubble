import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ArticleHeader from "../ArticleHeader/index";
import ArticleBody from "../ArticleBody/index";
import { useStyle } from "./style";
import "../../animate.css";

export interface ArticleInterface {
  children?: React.ReactNode;
}
const Article: React.FC<{
  image: string;
  title: string;
  body: string;
  tagList: string;
  createdAt: string;
  favorited: boolean;
  favoritesCount: number;
  username: string;
  slug: string;
}> = ({
  image,
  title,
  slug,
  body,
  tagList,
  createdAt,
  favorited,
  favoritesCount,
  username
}) => {
  const classes = useStyle();
  return (
    <div style={{ padding: "35px" }}>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12}>
          {" "}
          <ArticleHeader
            username={username}
            image={image}
            createdat={createdAt}
            favorited={favorited}
            favoritesCount={favoritesCount}
            slug={slug}
          />{" "}
        </Grid>

        <Grid item xs={12}>
          {" "}
          <ArticleBody title={title} body={body} />{" "}
        </Grid>

        <Grid item xs={12}>
          {" "}
          <span>
            <NavLink
              to={`/ReadMore/@/${username}?slug=${slug}`}
              className={classes.link}
            >
              Read more...
            </NavLink>
          </span>
        </Grid>
      </Grid>
    </div>
  );
};

export default Article;
