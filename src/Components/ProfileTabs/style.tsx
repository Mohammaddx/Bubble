import { makeStyles, Theme } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "80%",
    backgroundColor: "#fff",
    margin: "auto"
  },
  AppBar: {
    boxShadow: "none",
    borderBottom: "1px solid #aaa",
    backgroundColor: "#fff"
  }
}));
