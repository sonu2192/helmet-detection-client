import React from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './components/page1';
import Profile from './components/helmetprofile';
import { BrowserRouter , Route} from "react-router-dom";
import Login from './components/Login'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={Login}/>
      <Route path="/viewProfile" component={Profile}/>
      <Route path="/page1" component={Page}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
