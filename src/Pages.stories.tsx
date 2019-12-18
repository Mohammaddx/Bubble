import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { storiesOf } from "@storybook/react";

import HiScreen from "./Components/HiScreen/index";
import Home from "./Components/Home/index";
import NewArticle from "./Components/NewArticle/index";
import Profile from "./Components/Profile/index";
import Settings from "./Components/SettingsCom/index";
import SignIn from "./Components/SignIn/index";
import SignUp from "./Components/SignUp/index";

storiesOf("Pages", module)
  .add("Hi Screen Page", () => (
    <Router>
      <HiScreen />
    </Router>
  ))
  .add("Home Page", () => (
    <Router>
      <Home />
    </Router>
  ))
  .add("New Artilce Page", () => (
    <Router>
      <NewArticle />
    </Router>
  ))
  .add("Settings Page", () => (
    <Router>
      <Settings />
    </Router>
  ))
  .add("Profile Page", () => (
    <Router>
      <Profile />
    </Router>
  ))
  .add("Login Page", () => (
    <Router>
      <SignIn />
    </Router>
  ))
  .add("Register Page", () => (
    <Router>
      <SignUp />
    </Router>
  ));
