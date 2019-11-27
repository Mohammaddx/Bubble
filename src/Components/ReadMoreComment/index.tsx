import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useStyle } from "./style";
import Axios from "axios";
import AXIOS from "../../utils/axios";

export interface ReadMoreCommnetInterface {
  children: React.ReactNode;
}

const ReadMoreCommnet: React.FC<{ slug: string }> = ({ slug }) => {
  const classes = useStyle();
  const [body, setBody]: any = useState("");
  const handleCommnetBody = (event: any) => {
    setBody(event.target.value);
  };

  const handleSubmit = () => {
    AXIOS.post(`articles/${slug}/comments`, { comment: { body } })
      .then((res: any) => {
        console.log(res.data);
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.root}>
          <textarea
            placeholder="Write a Comment..."
            className={classes.textarea}
            onChange={handleCommnetBody}
          ></textarea>
          <div className={classes.divFooter}>
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
            >
              Post Comment
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReadMoreCommnet;
