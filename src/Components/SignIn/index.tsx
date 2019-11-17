import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextFeild from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./style";
import ReactWOW from "react-wow";
import "../../animate.css";
import AXIOS from "../../utils/axios";

export interface SignInInterface {
  children: React.ReactNode;
}

const SignIn: React.FC = () => {
  const classes = useStyles();
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");
  const [error, setError]: any = useState("");
  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    AXIOS.post("users/login", { user: { email, password } })
      .then((res: any) => {
        console.log(res.data.user);
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

          <form className={classes.form} onSubmit={handleSubmit} action="/Home">
            <p style={{ color: "red" }}>{error}</p>
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
          </form>
        </Grid>
      </ReactWOW>
    </div>
  );
};

export default SignIn;
