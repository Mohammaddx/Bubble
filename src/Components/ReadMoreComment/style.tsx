import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: "1px solid #aaa",
      width: "60%",
      margin: "auto",
      padding: "10px",
      minWidth: "300px"
    },
    textarea: {
      width: "100%",
      height: "120px",
      fontSize: "20px",
      fontFamily: "sans-serif",
      borderWidth: "0px"
    },
    divFooter: {
      backgroundColor: "#eee",
      padding: "10px"
    },
    button: {
      border: "1px solid green",
      color: "#fff",
      backgroundColor: "green",
      boxshadow: "1px 1px 10px 1px #aaa",
      "&:hover": {
        color: "#fff",
        backgroundColor: "green"
      }
    },
    form: {
      margin: "auto"
    }
  })
);
