import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStyle } from "./style";
import AXIOS from "../../utils/axios";

export interface CommentInterface {
  children: React.ReactNode;
}

const Comment: React.FC<{ body: string; slug: string; id: number }> = ({
  body,
  slug,
  id
}) => {
  const classes = useStyle();

  const handleDelete = (event: any) => {
    event.preventDefault();
    AXIOS.DELETE(`articles/${slug}/comments/${id}`)
      .then((res: any) => {
        console.log(res.data);
      })
      .catch((error: any) => console.log(error));
  };

  return (
    <div className={classes.root}>
      <p className={classes.paragraph}>{body}</p>
      <Button
        size="small"
        variant="contained"
        className={classes.Button}
        onClick={handleDelete}
      >
        <DeleteIcon /> Remove Comment
      </Button>
    </div>
  );
};

export default Comment;
