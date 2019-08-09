import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import cards from './components/cards/cards';
import navbar from './components/navbar/navbar';
import Feed from './pages/Feed/feed';


function App() {
  return (
  <Router>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/Profile" component={Profile}/>
    <Route exact path="/cards" component={cards}/>
    <Route exact path="/navbar" component={navbar}/>
    <Route exact path="/Feed" component={Feed}/>
    </Switch>
  </Router>
  );
}

export default App;