import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ProfileTabs from "../ProfileTabs/index";
import ReactWOW from "react-wow";
import "../../animate.css";
import { useStyle } from "./style";
import AXIOS from "../../utils/axios";
import utl from "../../utils/utils";
import { NavLink } from "react-router-dom";

export interface ProfileInterface {
  children: React.ReactNode;
}

const Profile: React.FC = () => {
  const [image, setImage]: any = useState("");
  const [username, setUsername]: any = useState("");
  const [bio, setBio]: any = useState(""); //not useing here now
  const [following, setFellowing]: any = useState(false); //not useing here now

  //for button
  const [text, setText]: any = useState("");
  const [classname, setClassname]: any = useState("");

  useEffect(() => {
    let path = window.location.pathname;
    let filename = path.substring(path.indexOf("@") + 2);
    if (path.indexOf("@") !== 9) {
      setText("Edit Profile Settings");
      setClassname("fas fa-cogs");
      AXIOS.get(`profiles/${utl.userData().username}`)
        .then(res => {
          console.log(res.data);

          setImage(res.data.profile.image);
          setUsername(res.data.profile.username);
          setBio(res.data.profile.bio);
          setFellowing(res.data.profile.following);
        })
        .catch(err => {
          console.error(err);
        });
    } else if (path.indexOf("@") === 9) {
      setText(`Follow ${filename}`);
      setClassname("fas fa-plus-circle");
      AXIOS.get(`profiles/${filename}`)
        .then(res => {
          setImage(res.data.profile.image);
          setUsername(res.data.profile.username);
          setBio(res.data.profile.bio);
          setFellowing(res.data.profile.following);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, []);

  const classes = useStyle();
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.info_section}>
          <ReactWOW animation="rubberBand">
            <img src={image} alt="pic" className={classes.img} />
          </ReactWOW>
          <ReactWOW animation="slideInUp">
            <Typography variant="h6" component="h6">
              {username}
            </Typography>
          </ReactWOW>
          <ReactWOW animation="fadeIn">
            <NavLink to="/Settings" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                className={classes.Button}
              >
                <i className={classname} style={{ padding: "5px" }}></i> {text}
              </Button>
            </NavLink>
          </ReactWOW>
        </div>
      </header>

      <div className={classes.tabs_section}>
        <ProfileTabs />
      </div>
    </div>
  );
};

export default Profile;
