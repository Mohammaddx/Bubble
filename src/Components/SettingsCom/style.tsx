import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      position: "relative",
      top: "20px"
    },
    rootChild: {
      width: "80%",
      margin: "auto",
      padding: "20px"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "100%"
    },
    button: {
      background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
      margin: "auto",
      position: "relative",
      top: "30px"
    },
    divFooter: {
      position: "relative",
      top: "50px",
      padding: "25px"
    }
  })
);
