import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import ReadMoreInfoProfile from "../ReadMoreInfoProfile/index";
import ReadMoreComment from "../ReadMoreComment/index";
import CommentList from "../CommentList/index";
import { useStyle } from "./style";
import AXIOS from "../../utils/axios";

export interface ReadMore {
  children: React.ReactNode;
  username: string;
  image: string;
  following: boolean;
  body: string;
  tagList: string[];
}

const ReadMore: React.FC = () => {
  const classes = useStyle();

  let path = window.location.pathname;
  let pathSearch = window.location.search;
  let filename = path.substring(path.indexOf("@") + 2);
  let slugname = pathSearch.substring(pathSearch.indexOf("=") + 1);

  //for profile
  const [image, setImage] = useState("");
  const [username, setUsername] = useState("");
  const [following, setFellowing] = useState(false); //not useing here now

  //for article
  const [slug] = useState(slugname);
  const [title, setTitle] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [body, setBody] = useState("");
  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    AXIOS.get(`profiles/${filename}`)
      .then(res => {
        setImage(res.data.profile.image);
        setUsername(res.data.profile.username);
        setFellowing(res.data.profile.following);
      })
      .catch(err => {
        console.error(err);
      });

    AXIOS.get(`articles/${slug}`).then((res: any) => {
      setTitle(res.data.article.title);
      setCreatedAt(res.data.article.createdAt);
      setBody(res.data.article.body);
      setTagList(res.data.article.tagList);
    });
  }, []);

  return (
    <div>
      <header className={classes.header}>
        <Typography component="h2" variant="h2" className={classes.title}>
          {title}
        </Typography>
        <ReadMoreInfoProfile
          username={username}
          image={image}
          following={following}
          createdAt={createdAt}
        />
      </header>

      <div>
        <p style={{ padding: "25px", fontWeight: "bold" }}>{body}</p>
        <div>
          {tagList.map((el: any) => (
            <Typography
              component="span"
              style={{
                fontSize: "12px",
                padding: "5px 10px",
                border: "1px solid dodgerblue",
                borderRadius: "20px",
                color: "dodgerblue"
              }}
            >
              {el}
            </Typography>
          ))}
        </div>
      </div>
      <div className={classes.divComment}>
        <ReadMoreComment slug={slug} />
      </div>

      <div className={classes.comment}>
        <CommentList slug={slug} />
      </div>
    </div>
  );
};

export default ReadMore;
