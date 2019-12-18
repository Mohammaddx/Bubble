import React, { useState, useEffect } from "react";
import Comment from "../Comment/index";
import AXIOS from "../../utils/axios";

export interface CommentListInterface {
  children: React.ReactNode;
}
const CommentList: React.FC<{ slug: string }> = ({ slug }) => {
  const [comment, setComment]: any = useState([]);

  useEffect(() => {
    AXIOS.get(`articles/${slug}/comments`)
      .then(res => {
        setComment(res.data.comments);
      })
      .catch(error => console.log(error));
  }, [slug]);

  return (
    <div style={{ margin: "50px" }}>
      {comment.map((el: any, index: number) => (
        <Comment body={el.body} key={index} slug={slug} id={el.id} />
      ))}
    </div>
  );
};

export default CommentList;
