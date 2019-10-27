import React, {useState, useEffect} from 'react';
import { BrowserRouter , Route, Switch} from 'react-router-dom'
import SignUp from '../SignUp/index'
import SignIn from '../SignIn/index'
import NavBar from '../Navbar/index'
import NewArticle from '../NewArticle/index'
import Settings from '../SettingsCom/index'
import Profile from '../Profile/index'
import Home from '../Home/index'
import HiScreen from '../HiScreen/index'
import ReadMore from '../ReadMore/index'
import CommentsContext from '../ContextAPI/index'

export interface IndexPageInterface{
  children: React.ReactNode,
}

const IndexPage: React.FC = ()=>{
   
    return( 
        <BrowserRouter>
       
            <NavBar />
                <Switch>
                    <Route exact path="/" component={HiScreen}/>
                    <Route path="/Home" component={Home}/>
                    <Route path="/SignUp" component={SignUp}/>
                    <Route path="/SignIn" component={SignIn}/>
                    <Route path="/NewArticle" component={NewArticle}/>
                    <Route path="/Settings" component={Settings}/>
                    <Route path="/Profile" component={Profile}/>
                    <CommentsContext>
                    <Route path="/ReadMore" component={ReadMore}/>
                    </CommentsContext>
                </Switch>
       </BrowserRouter>
    )

    IndexPage.defaultProps = {
      children: true
    }
}

export default IndexPage;