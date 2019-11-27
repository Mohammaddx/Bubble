import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    navbar: {
      backgroundColor: "dodgerblue",
      position: "sticky"
    },
    border: {
      width: "70%"
    },
    link: {
      textDecoration: "none",
      color: "#fff",
      padding: "5px 10px"
    },
    List: {
      listStyleType: "none"
    },
    itemList: {
      display: "inline-block",
      padding: "10px",
      margin: "auto",
      alignItems: "center"
    },
    iFont: {
      marginRight: "5px"
    }
  })
);
