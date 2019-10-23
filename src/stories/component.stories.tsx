import * as React from "react";

// tslint:disable-next-line:no-implicit-dependencies
import { storiesOf } from "@storybook/react";
// tslint:disable-next-line:no-implicit-dependencies
import { action } from "@storybook/addon-actions";
// tslint:disable-next-line
import { Welcome } from "@storybook/react/demo";

//Comonent Imports
import HiScreen from '../Components/HiScreen/index'
import Home from '../Components/Home/index'
import Article from '../Components/Article/index'
import ArticleBody from '../Components/ArticleBody/index'
import ArticleHeader from '../Components/ArticleHeader/index'
import Comment from '../Components/Comment/index'
import CommentList from '../Components/CommentList/index'
import CommentsContext from '../Components/ContextAPI/index'
import HomeGlobalFeed from '../Components/HomeGlobalFeed/index'
import HomeTabs from '../Components/HomeTabs/index'
import HomeYourFeed from '../Components/HomeYourFeed/index'
import IndexPage from '../Components/indexPage/index'
import NavBar from '../Components/Navbar/index'
import NewArticle from '../Components/NewArticle/index'
import PopulerTags from '../Components/PopulerTags/index'
import Profile from '../Components/Profile/index'
import ProfileFavioretArticles from '../Components/ProfileFavioretArticles/index'
import ProfileMyArticles from '../Components/ProfileMyArticles/index'
import ProfileTabs from '../Components/ProfileTabs/index'
import ReadMore from '../Components/ReadMore/index'
import ReadMoreComment from '../Components/ReadMoreComment/index'
import ReadMoreInfoProfile from '../Components/ReadMoreInfoProfile/index'
import Settings from '../Components/SettingsCom/index'
import SignIn from '../Components/SignIn/index'
import SingUp from '../Components/SignUp/index'

import Button from "./button";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome />
));

storiesOf("Component", module)
  .add("Hi Screen Component", () => (
    <HiScreen/>
  ))
  .add("Home Component", () => (
    <Home/>
  ))
  .add("Article Component", () => (
    <Article/>
  ))
  .add("Article Body Component", () => (
    <ArticleBody/>
  ))
  .add("Article Header Component", () => (
    <ArticleHeader/>
  ))
  .add("Comment Component", () => (
    <Comment/>
  ))
  .add("Comment List Component", () => (
    <CommentList/>
  ))
  .add("Comments Context Component", () => (
    <CommentsContext/>
  ))
  .add("Home Global Feed Component", () => (
    <HomeGlobalFeed/>
  ))
  .add("Home Tabs Component", () => (
    <HomeTabs/>
  ))
  .add("Home Your Feed Component", () => (
    <HomeYourFeed/>
  ))
  .add("Index Page Component", () => (
    <IndexPage/>
  ))
  .add("NavBar Component", () => (
    <NavBar/>
  ))
  .add("New Article Component", () => (
    <NewArticle/>
  ))
  .add("Populer Tags Component", () => (
    <PopulerTags/>
  ))
  .add("Profile Component", () => (
    <Profile/>
  ))
  .add("Profile Favioret Articles Component", () => (
    <ProfileFavioretArticles/>
  ))
  .add("Profile My Articles Component", () => (
    <ProfileMyArticles/>
  ))
  .add("Profile Tabs Component", () => (
    <ProfileTabs/>
  ))
  .add("Read More Component", () => (
    <ReadMore/>
  ))
  .add("Read More Comment Component", () => (
    <ReadMoreComment/>
  ))
  .add("Read More Info Profile Component", () => (
    <ReadMoreInfoProfile/>
  ))
  .add("Settings Component", () => (
    <Settings/>
  ))
  .add("Sign In Component", () => (
    <SignIn/>
  ))
  .add("Sing Up Component", () => (
    <SingUp/>
  ))
  
  