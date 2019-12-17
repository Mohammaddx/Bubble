import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useStyle } from "./style";
import AXIOS from "../../utils/axios";
import { Formik, Form } from "formik";
import * as yup from "yup";

export interface ReadMoreCommnetInterface {
  children: React.ReactNode;
}

interface Values {
  body: string;
}

const schema = yup.object().shape({
  body: yup.string()
});

const ReadMoreCommnet: React.FC<{ slug: string }> = ({ slug }) => {
  const classes = useStyle();
  const [commentBody, setBody]: any = useState("");
  const handleCommnetBody = (event: any) => {
    setBody(event.target.value);
  };

  const handleFormSubmit = (values: Values) => {
    AXIOS.post(`articles/${slug}/comments`, { comment: { body: values.body } })
      .then((res: any) => {
        console.log(res.data);
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{
          body: commentBody
        }}
        onSubmit={handleFormSubmit}
        validationSchema={schema}
      >
        {() => (
          <Form className={classes.form}>
            <div className={classes.root}>
              <textarea
                placeholder="Write a Comment..."
                className={classes.textarea}
                onChange={handleCommnetBody}
                name="commentBody"
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ReadMoreCommnet;
