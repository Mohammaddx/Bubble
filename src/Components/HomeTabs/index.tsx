import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import HomeGlobalFeed from "../HomeGlobalFeed/index";
import HomeYourFeed from "../HomeYourFeed/index";
import ArticlesByTags from "../ArticlesByTags/index";
import { useStyles } from "./style";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

export interface HomeTabsInterface {
  children?: React.ReactNode;
  tag: any;
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
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

const HomeTabs: React.FC<{ tag: any }> = tag => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Your Feed" {...a11yProps(0)} />
          <Tab label="Global Feed" {...a11yProps(1)} />
          <Tab label={tag.tag != "" ? `#${tag.tag}` : ""} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <HomeYourFeed />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HomeGlobalFeed />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ArticlesByTags tagName={tag.tag} />
      </TabPanel>
    </div>
  );
};

export default HomeTabs;
