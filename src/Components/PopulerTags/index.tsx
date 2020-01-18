import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useStyle } from "./style";
import { NavLink } from "react-router-dom";
import ReactWOW from "react-wow";
import "../../animate.css";
import AXIOS from "../../utils/axios";

export interface PopulerTagsInterface {
  children: React.ReactNode;
}

const PopulerTags = (props: any) => {
  const classes = useStyle();
  const [words, setWord]: any = useState([]);

  useEffect(() => {
    AXIOS.get("tags")
      .then((res: any) => {
        setWord(res.data.tags);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  const PopulerTagsData = words.map((wordItem: any) => (
    <Grid item xs={12} lg={3} className={classes.tag} key={wordItem}>
      <NavLink
        style={{
          color: "#fff",
          textDecoration: "none"
        }}
      >
        {wordItem}
      </NavLink>
    </Grid>
  ));

  return (
    <ReactWOW animation="slideInUp">
      <div className={classes.container}>
        <Typography component="h4" variant="h4" className={classes.title}>
          Populer Tags
        </Typography>
        <Grid container spacing={1}>
          {PopulerTagsData}
        </Grid>
      </div>
    </ReactWOW>
  );
};

export default PopulerTags;
