import React from 'react';
import './App.css';
import IndexPage from './Components/indexPage/index'
import CommentsContext from './Components/ContextAPI/index'
const App: React.FC = () => {
  return (
 <CommentsContext>
    <div className="App">
      <IndexPage />
    </div>
    </CommentsContext>
  );
}

export default App;
