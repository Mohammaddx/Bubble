import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      top: "50px",
      padding: "10px"
    },
    container: {
      display: "flex"
    },
    populer_tags: {
      width: "25%"
    },
    home_tabs: {
      width: "70%"
    }
  })
);
