import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import Profile from './components/pages/Profile/Profile';

function App() {
  return (
  <Router>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/Profile" component={Profile}/>
    </Switch>
  </Router>
  );
}

export default App;