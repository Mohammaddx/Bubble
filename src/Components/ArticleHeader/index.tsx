import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { NavLink } from "react-router-dom";
import AXIOS from "../../utils/axios";
import { useStyle } from "./style";
import Article from "../Article";

export interface ArticleHeaderInterface {
  children: React.ReactNode;
  username: string;
  image: string;
  createdat: string;
  favorited: boolean;
  favoritesCount: number;
}

const ArticleHeader: React.FC<{
  username: string;
  slug: string;
  image: string;
  createdat: string;
  favorited: boolean;
  favoritesCount: number;
}> = ({ username, slug, image, createdat, favorited, favoritesCount }) => {
  const [variant, setVariant] = useState("outlined");

  const isFavorited = (event: any) => {
    if (favorited == false) {
      AXIOS.post(`articles/${slug}/favorite`, {
        article: { favorited: true }
      }).then((res: any) => {
        setVariant("contained");
      });
    } else if (favorited == true) {
      AXIOS.DELETE(`articles/${slug}/favorite`)
        .then((res: any) => {
          setVariant("outlined");
        })
        .catch((error: any) => console.log(error));
    }
  };

  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.leftSide}>
        <div style={{ padding: "10px" }}>
          <NavLink
            to={`/profile/@/${username}`}
            style={{ textDecoration: "none" }}
          >
            <img src={image} alt="profile picture" className={classes.img} />
          </NavLink>
        </div>
        <div>
          <NavLink
            to={`/profile/@/${username}`}
            style={{ textDecoration: "none" }}
          >
            <h4 className={classes.HeaderDivH4}>{username}</h4>
          </NavLink>
          <span className={classes.HeaderDivSpan}>
            <i className="fas fa-history"></i> {createdat}{" "}
          </span>
        </div>
      </div>

      <Button
        size="medium"
        color="secondary"
        variant={variant}
        className={classes.Button}
        onClick={isFavorited}
      >
        {" "}
        <FavoriteIcon /> <span>{favoritesCount}</span>
      </Button>
    </div>
  );
};

export default ArticleHeader;
