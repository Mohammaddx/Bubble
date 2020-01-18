import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
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
      <Typography component="p" variant="p" className={classes.paragraph}>
        {body}
      </Typography>
      <Button size="small" variant="contained" className={classes.Button}>
        <DeleteIcon onClick={handleDelete} /> Remove Comment
      </Button>
    </div>
  );
};

export default Comment;
