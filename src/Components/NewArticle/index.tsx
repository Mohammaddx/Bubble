import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Avatar from "@material-ui/core/Avatar";
import ReactWOW from "react-wow";
import "../../animate.css";
import { useStyle } from "./style";
import AXIOS from "../../utils/axios";
import { Formik, Form } from "formik";
import * as yup from "yup";

export interface NewArticleInterface {
  children: React.ReactNode;
}

interface Values {
  title: string;
  description: string;
  body: string;
}

const schema = yup.object().shape({
  title: yup.string().required("title can't be blank"),
  description: yup.string().required("description can't be blank"),
  body: yup.string().required("body can't be blank")
});

const NewArticle: React.FC = () => {
  const [articleTitle, setTitle] = useState("");
  const [articleDescription, setDesc] = useState("");
  const [articleBody, setBody] = useState("");
  const [tagList, setTagList] = useState([]);

  const handleTitle = (event: any) => {
    setTitle(event.target.value);
  };

  const handleDesc = (event: any) => {
    setDesc(event.target.value);
  };

  const handleBody = (event: any) => {
    setBody(event.target.value);
  };

  const handleTagList = (event: any) => {
    setTagList(event.target.value.split(" "));
  };

  const handleFormSubmit = async (values: Values) => {
    AXIOS.post("articles", {
      article: {
        title: values.title,
        description: values.description,
        body: values.body,
        tagList: tagList
      }
    })
      .then((res: any) => {
        console.log(res.data);
        alert(JSON.stringify(values, null, 2));
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Formik
          enableReinitialize
          initialValues={{
            title: articleTitle,
            description: articleDescription,
            body: articleBody
          }}
          onSubmit={handleFormSubmit}
          validationSchema={schema}
        >
          {() => (
            <Form style={{ width: "100%" }}>
              <Avatar className={classes.avatar}>
                <AssignmentIcon className={classes.icon} fontSize="large" />
              </Avatar>
              <Grid item xs={12}>
                <ReactWOW animation="fadeInLeftBig">
                  <TextField
                    id="outlined-email-input"
                    label="Article Title"
                    className={classes.textField}
                    type="text"
                    name="articleTitle"
                    margin="normal"
                    variant="outlined"
                    required
                    onChange={handleTitle}
                  />
                </ReactWOW>
              </Grid>

              <Grid item xs={12}>
                <ReactWOW animation="fadeInRightBig">
                  <TextField
                    id="outlined-email-input"
                    label="What's this article about?"
                    className={classes.textField}
                    type="text"
                    name="articleDescription"
                    margin="normal"
                    variant="outlined"
                    required
                    onChange={handleDesc}
                  />
                </ReactWOW>
              </Grid>

              <Grid item xs={12}>
                <ReactWOW animation="fadeInUp">
                  <TextField
                    id="outlined-email-input"
                    label="Write your article (in markdown)"
                    className={classes.textField}
                    type="text"
                    name="articleBody"
                    margin="normal"
                    variant="outlined"
                    rowsMax={10}
                    multiline={true}
                    required
                    onChange={handleBody}
                  />
                </ReactWOW>
              </Grid>

              <Grid item xs={12}>
                <ReactWOW animation="fadeIn">
                  <TextField
                    id="outlined-email-input"
                    label="Enter Tags"
                    className={classes.textField}
                    type="text"
                    name="EnterTags"
                    margin="normal"
                    variant="outlined"
                    onChange={handleTagList}
                  />
                </ReactWOW>
              </Grid>

              <Button className={classes.button} type="submit">
                Publish Article
              </Button>
            </Form>
          )}
        </Formik>
      </Grid>
    </div>
  );
};

export default NewArticle;
