import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import ReactWOW from "react-wow";
import "../../animate.css";
import { useStyle } from "./style";
import AXIOS from "../../utils/axios";
import { Formik, Form } from "formik";
import * as yup from "yup";

export interface SettingsInterface {
  children: React.ReactNode;
}

interface Values {
  imageURL: string;
  username: string;
  bio: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  imageURL: yup.string(),
  username: yup.string(),
  bio: yup.string(),
  email: yup.string().required("email can't be blank"),
  password: yup.string()
});

const Settings: React.FC = () => {
  const [image, setImage] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);

  const handleImage = (event: any) => {
    setImage(event.target.value);
  };

  const handleUsername = (event: any) => {
    setUsername(event.target.value);
  };

  const handleBio = (event: any) => {
    setBio(event.target.value);
  };

  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (values: Values) => {
    AXIOS.put("user", {
      user: {
        email: values.email,
        bio: values.bio,
        image: values.imageURL,
        username: values.username
      }
    })
      .then((res: any) => {
        console.log(res.data);
        alert(JSON.stringify(values, null, 2));
      })
      .catch((err: any) => {
        let arr: any = [];
        if (err.response.data.errors.username != undefined) {
          arr.push(`* username ${err.response.data.errors.username[0]}`);
        }
        if (err.response.data.errors.email != undefined) {
          arr.push(`* email ${err.response.data.errors.email[0]}`);
        }
        if (err.response.data.errors.password != undefined) {
          arr.push(`* password ${err.response.data.errors.password[0]}`);
        }
        setError(arr);
      });
  };
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.rootChild}>
        <ReactWOW animation="zoomIn">
          <Formik
            enableReinitialize
            initialValues={{
              imageURL: image,
              username: username,
              bio: bio,
              email: email,
              password: password
            }}
            onSubmit={handleFormSubmit}
            validationSchema={schema}
          >
            {() => (
              <Form style={{ margin: "auto" }}>
                <Typography variant="h4" component="h2">
                  Your Settings
                </Typography>
                <Grid container spacing={2}>
                  {error.map((el: any) => (
                    <Typography component="p" key={el} style={{ color: "red" }}>
                      {el}
                    </Typography>
                  ))}
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-email-input"
                      label="URL of profile picture"
                      className={classes.textField}
                      type="text"
                      name="image"
                      margin="normal"
                      variant="outlined"
                      onChange={handleImage}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      id="outlined-email-input"
                      label="User Name"
                      className={classes.textField}
                      type="text"
                      name="username"
                      margin="normal"
                      variant="outlined"
                      onChange={handleUsername}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      id="outlined-email-input"
                      label="Short bio about you"
                      className={classes.textField}
                      type="text"
                      name="bio"
                      margin="normal"
                      variant="outlined"
                      rowsMax={10}
                      multiline={true}
                      onChange={handleBio}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      id="outlined-email-input"
                      label="E-mail"
                      className={classes.textField}
                      type="email"
                      name="email"
                      margin="normal"
                      variant="outlined"
                      onChange={handleEmail}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      id="outlined-email-input"
                      label="password"
                      className={classes.textField}
                      type="password"
                      name="password"
                      margin="normal"
                      variant="outlined"
                      onChange={handlePassword}
                    />
                  </Grid>

                  <Button className={classes.button} type="submit">
                    Update Settings
                  </Button>
                </Grid>
              </Form>
            )}
          </Formik>
        </ReactWOW>
        <div className={classes.divFooter}>
          <hr />

          <Button variant="outlined" color="secondary">
            or click here to logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
