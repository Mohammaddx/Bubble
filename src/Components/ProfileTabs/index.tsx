import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FavioretArticles from '../ProfileFavioretArticles/index'
import MyArticles from '../ProfileMyArticles/index'
import {useStyles} from './style'

export interface ProfileTabsInterface{
  children: React.ReactNode
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}



 const ProfileTabs: React.FC =()=> {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar} position="static" >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor='secondary'
          textColor='secondary'
          aria-label="scrollable force tabs example"
        >
          <Tab label="My Articles" icon={<AssignmentIcon />} {...a11yProps(0)} />
          <Tab label="Favorite Articles" icon={<FavoriteIcon />} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MyArticles />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FavioretArticles />
      </TabPanel>
    </div>
  );

  ProfileTabs.defaultProps = {
    children: true
  }
}

export default ProfileTabs;