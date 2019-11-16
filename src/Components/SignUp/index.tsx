import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextFeild from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./style";
import AXIOS from "../../utils/axios";
import ReactWOW from "react-wow";
import "../../animate.css";

export interface SignUpInterface {
  children: React.ReactNode;
}

const SignUp: React.FC = () => {
  const [username, setUsername]: any = useState("");
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");
  const [error, setError]: any = useState([]);

  const handleUsername = (event: any) => {
    setUsername(event.target.value);
  };

  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    AXIOS.authPost("users", { user: { username, email, password } })
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
          <form className={classes.form} onSubmit={handleSubmit}>
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
          </form>
        </Grid>
      </ReactWOW>
    </div>
  );
};

export default SignUp;
