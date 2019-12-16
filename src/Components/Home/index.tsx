import React, { useState, useEffect } from "react";
import HomeTabs from "../HomeTabs/index";
import PopulerTags from "../PopulerTags/index";
import { useStyle } from "./style";
import AXIOS from "../../utils/axios";

export interface HomeInterface {
  children: React.ReactNode;
}

const Home: React.FC = () => {
  const [tagName, setTagName]: any = useState("");
  const [articleDataForTag, setArticleDataForTag]: any = useState([]);

  const getTagName = (tagNameFromChild: string) => {
    setTagName(tagNameFromChild);
  };

  useEffect(() => {
    const fetchData = () => {
      AXIOS.get(`articles?tag=${tagName}`)
        .then(res => setArticleDataForTag(res.data.articles))
        .catch(err => console.log(err));
    };
    fetchData();
  }, [tagName]);
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.home_tabs}>
          <HomeTabs tagName={tagName} articleDataForTag={articleDataForTag} />
        </div>
        <div className={classes.populer_tags}>
          <PopulerTags callbackTagName={getTagName} />
        </div>
      </div>
    </div>
  );
};

export default Home;
