import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    SignUp: {
      width: "100%",
      height: "85vh",
      background: "linear-gradient(dodgerblue , transparent )"
    },
    root: {
      flexGrow: 1,
      backgroundColor: "#fff",
      width: "40%",
      margin: "auto",
      padding: "10px",
      position: "relative",
      top: "100px",
      boxShadow: "1px 1px 50px -3px rgba(0,0,0,0.3)"
    },
    textFeild: {
      textAlign: "center"
    },
    form: {
      margin: "auto",
      width: "90%"
    },
    title: {
      marginBottom: "20px"
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  })
);
