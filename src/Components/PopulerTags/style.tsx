import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles(() =>
  createStyles({
    tag: {
      backgroundColor: "dodgerblue",
      color: "#fff",
      padding: "10px 20xp",
      borderRadius: "20px",
      margin: "10px 0",
      "&:hover": { boxShadow: "1px 1px 10px 1px dodgerblue" }
    },
    container: {
      backgroundColor: "#eee",
      padding: "10px",
      alignItems: "center",
      borderRadius: "5px"
    },
    title: {
      textAlign: "left",
      fontSize: "20px"
    }
  })
);
