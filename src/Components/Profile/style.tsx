import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
export const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      backgroundImage:
        'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url("https://media.giphy.com/media/l3vRbMRGhSmCxWj72/giphy.gif")',
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      height: "300px"
    },
    img: {
      width: "100px",
      height: "100px",
      border: "2px solid aqua",
      borderRadius: "50%",
      padding: "10px"
    },
    info_section: {
      padding: "15px",
      color: "#fff",
      position: "relative",
      top: "20px"
    },
    Button: {
      position: "relative",
      top: "10px"
    },
    tabs_section: {
      position: "relative",
      top: "40px"
    }
  })
);
