import React, { Component } from "react";
import "./assets/css/login.css"

class Login extends Component {
  componentDidMount() {
    document.body.classList.add("background");
  }
  render() {
    return (
      <div className="container">
      <div className="align-items-center">
          <h1><span className="fa fa-sign-in"></span> Login</h1>

          <form action="/login" method="post">
              <div className="form-group">

                  <input type="email" className="form-control" placeholder="Email" name="email"/>
              </div>
              <div className="form-group">

                  <input type="password" className="form-control" placeholder="Password" name="password"/>
              </div>

              <button type="submit" className="btn btn-warning btn-lg">login</button>
          </form>

          <hr/>

          <p><a href="/register">Don't have an account? Sign up.</a></p>
          <p><a href="/">Go back to home page.</a></p>
      </div>
  </div>
    );
  }
}

export default Login;
