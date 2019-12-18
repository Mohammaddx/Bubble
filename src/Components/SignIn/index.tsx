import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Redirect } from "react-router-dom";
import TextFeild from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./style";
import ReactWOW from "react-wow";
import "../../animate.css";
import AXIOS from "../../utils/axios";
import { Formik, Form } from "formik";
import * as yup from "yup";

export interface SignInInterface {
  children: React.ReactNode;
}

interface Values {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  password: yup.string().required("Password is required")
});

const SignIn: React.FC = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggin, setIsLoggin] = useState(false);

  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };

  if (isLoggin) {
    return <Redirect to="/Home" />;
  }
  const handleFormSubmit = (values: Values) => {
    AXIOS.post("users/login", {
      user: { email: values.email, password: values.password }
    })
      .then((res: any) => {
        console.log(":hi");
        setIsLoggin(true);
      })
      .catch((error: any) => {
        setError(
          "* Email or Password" +
            " " +
            error.response.data.errors["email or password"][0]
        );
      });
  };

  return (
    <div className={classes.SignIn}>
      <ReactWOW animation="jackInTheBox">
        <Grid container spacing={2} className={classes.root}>
          <Grid item xs={12} className={classes.title}>
            <Typography variant="h5">Sign In</Typography>
          </Grid>

          <Formik
            enableReinitialize
            initialValues={{
              email: email,
              password: password
            }}
            validationSchema={schema}
            onSubmit={handleFormSubmit}
          >
            {() => (
              <Form className={classes.form}>
                <Typography component="span" style={{ color: "red" }}>
                  {error}
                </Typography>
                <Grid item xs={12}>
                  <TextFeild
                    className={classes.textFeild}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    autoComplete="email"
                    onChange={handleEmail}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextFeild
                    className={classes.textFeild}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="current password"
                    onChange={handlePassword}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign In
                  </Button>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </ReactWOW>
    </div>
  );
};

export default SignIn;
