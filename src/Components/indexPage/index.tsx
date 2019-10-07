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
const IndexPage: React.FC = ()=>{
    const [query, setQuery] = useState();
    useEffect(() => {
      getData()
    }, [query]);
  
    const getData = async() =>{
      const response = await fetch("https://conduit.productionready.io/api/tags")
      const data = await response.json()
      console.log(data);
     
      
    }
    return( 
        <BrowserRouter>
        <Route exact path="/" component={HiScreen}/>
       
            <NavBar />
                <Switch>
                    
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
}

export default IndexPage;