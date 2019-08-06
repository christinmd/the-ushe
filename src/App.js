import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
function App() {
  return (
  <Router>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    </Switch>
  </Router>
  );
}

export default App;