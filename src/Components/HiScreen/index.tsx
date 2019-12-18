import * as React from "react";
import { NavLink } from "react-router-dom";
import WaterWave from "react-water-wave";
import image from "./HiScreenBackground.jpg";
import Typography from "@material-ui/core/Typography";
import ReactWOW from "react-wow";
import Logo from "./Logo.png";
import "../../animate.css";
import "../../hover.css";
import { useStyle } from "./style";

export interface HiScreenInterface {
  children?: React.ReactNode;
}

const HiScreen: React.FC<HiScreenInterface> = props => {
  const classes = useStyle();
  return (
    <WaterWave imageUrl={image}>
      {() => (
        <div className={classes.root}>
          <div className={classes.container}>
            <ReactWOW animation="zoomIn">
              <img
                src={Logo}
                alt="Logo"
                className={`${classes.image} hvr-grow-rotate`}
              />
            </ReactWOW>
            <Typography
              component="h4"
              variant="h4"
              className={classes.Headline1}
            >
              Bubble
            </Typography>
            <Typography
              component="h5"
              variant="h5"
              className={classes.Headline2}
            >
              ~Welcome to you~
            </Typography>
            <ReactWOW animation="fadeIn">
              <NavLink to="/Home">
                <button className={classes.Button}>Get Started</button>
              </NavLink>
            </ReactWOW>
          </div>
        </div>
      )}
    </WaterWave>
  );
};

export default HiScreen;
