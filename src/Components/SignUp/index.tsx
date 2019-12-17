import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextFeild from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./style";
import AXIOS from "../../utils/axios";
import ReactWOW from "react-wow";
import "../../animate.css";
import { Formik, Form } from "formik";
import * as yup from "yup";

export interface SignUpInterface {
  children: React.ReactNode;
}

interface Values {
  username: string;
  password: string;
  email: string;
}

const schema = yup.object().shape({
  username: yup
    .string()
    .max(20, "Username is too long (maximum is 20 characters)")
    .required("Username is required"),
  password: yup
    .string()
    .min(8, "Password is too short (minimum is 8 characters)")
    .required("Password is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required")
});

const SignUp: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);

  const handleUsername = (event: any) => {
    setUsername(event.target.value);
  };

  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const handleFormSubmition = async (values: Values) => {
    AXIOS.authPost("users", {
      user: {
        username: values.username,
        email: values.email,
        password: values.password
      }
    })
      .then(res => {
        localStorage.setItem("Token", res.data.user.token);
        localStorage.setItem("userData", JSON.stringify(res.data));
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

  const classes = useStyles();
  return (
    <div className={classes.SignUp}>
      <ReactWOW animation="jackInTheBox">
        <Grid container spacing={2} className={classes.root}>
          <Grid item xs={12} className={classes.title}>
            <Typography variant="h5">Sign Up</Typography>
          </Grid>
          <Formik
            enableReinitialize
            initialValues={{
              username: username,
              password: password,
              email: email
            }}
            validationSchema={schema}
            onSubmit={handleFormSubmition}
          >
            {() => (
              <Form className={classes.form}>
                <div>
                  {error.map((el: any) => (
                    <Typography component="p" key={el} style={{ color: "red" }}>
                      {el}
                    </Typography>
                  ))}
                </div>
                <Grid item xs={12}>
                  <TextFeild
                    className={classes.textFeild}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="User Name"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={handleUsername}
                  />
                </Grid>

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
                    type="password"
                    name="password"
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
                    Sign UP
                  </Button>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </ReactWOW>
    </div>
  );
  SignUp.defaultProps = {
    children: null
  };
};

export default SignUp;
