import React, { useState, useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useStyle } from "./style";
import ReactWOW from "react-wow";
import "../../animate.css";
import AXIOS from "../../utils/axios";

export interface PopulerTagsInterface {
  children: React.ReactNode;
  handleCallback?: any | (() => any);
}

const PopulerTags: React.FC<{
  handleCallback: any;
}> = ({ handleCallback }) => {
  const classes = useStyle();
  const [words, setWord]: any = useState([]);

  useEffect(() => {
    const fetchData = () => {
      AXIOS.get("tags")
        .then((res: any) => {
          setWord(res.data.tags);
        })
        .catch(error => {
          console.error(error);
        });
    };

    fetchData();
  }, []);

  const PopulerTagsData = words.map((wordItem: string) => (
    <Grid
      item
      xs={12}
      lg={3}
      key={wordItem}
      className={classes.tag}
      onClick={() => {
        handleCallback(wordItem);
      }}
    >
      {wordItem}
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
