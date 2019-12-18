import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useStyle } from "./style";
import AXIOS from "../../utils/axios";

export interface ReadMoreInfoProfileInterface {
  children: React.ReactNode;
}

const ReadMoreInfoProfile: React.FC<{
  username: string;
  image: string;
  following: boolean;
  createdAt: string;
}> = ({ username, image, following, createdAt }) => {
  const handleFollow = () => {
    following === false
      ? AXIOS.post(`profiles/${username}/follow`, {
          profile: { following: true }
        })
          .then((res: any) => {})
          .catch((error: any) => console.log(error))
      : AXIOS.DELETE(`profiles/${username}/follow`)
          .then((res: any) => {})
          .catch((error: any) => {
            console.log(error);
          });
  };

  const classes = useStyle();
  return (
    <div className={classes.Profile_info}>
      <div className={classes.root}>
        <div className={classes.root}>
          <img src={image} alt="pic" className={classes.img} />
          <div className="text_info">
            <Typography component="h6" variant="h6" style={{ color: "#fff" }}>
              {username}
            </Typography>
            <Typography component="span" style={{ color: "#fff" }}>
              <i className="fas fa-history"></i> {createdAt}
            </Typography>
          </div>
        </div>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          onClick={handleFollow}
        >
          {following === true ? "UnFollow" : "Follow"} {username}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          className={classes.button}
        >
          <FavoriteIcon /> unfavorite Articles (2)
        </Button>
      </div>
    </div>
  );
};

export default ReadMoreInfoProfile;
