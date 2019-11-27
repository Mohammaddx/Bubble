import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: "1px solid #aaa",
      width: "50%",
      margin: "10px auto",
      padding: "10px",
      minHeight: "120px",
      minWidth: "300px",
      backgroundColor: "#eee"
    },
    paragraph: {
      border: "1px solid #aaa",
      height: "100px",
      padding: "5px",
      backgroundColor: "#fff"
    },
    Button: {
      backgroundColor: "red",
      color: "#fff"
    }
  })
);
