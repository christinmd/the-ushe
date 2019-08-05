import React, { Component } from "react";
class Register extends Component {
  componentDidMount() {
    document.body.classList.add("background");
  }
  render() {
    return (
      <div class="container">

      <div class="align-items-center">
  
          <h1><span class="fa fa-sign-in"></span> Register</h1>
  
  
          <form action="/register" method="post">
              <div class="form-group">
                  <input type="text" class="form-control" placeholder="Email" name="email" id="email"/>
              </div>
              <div class="form-group">
                  <input type="password" class="form-control" placeholder="Password" name="password" id="password"/>
              </div>
              <div class="form-group">
                  <input type="text" class="form-control" placeholder="First Name" name="firstName" id="firstName"/>
              </div>
              <div class="form-group">
                  <input type="text" class="form-control" placeholder="Last Name" name="lastName" id="lastName"/>
              </div>
              <div class="form-group">
                  <input type="text" class="form-control" placeholder="City" name="city" id="city"/>
              </div>
              <div class="form-group">
                  <input type="text" class="form-control" placeholder="State - Say none, if you are not located in US." name="state" id="state"/>
              </div>
              <div class="form-group">
                  <input type="text" class="form-control" placeholder="Country" name="country" id="country"/>
              </div>
  
              <button type="submit" class="btn btn-warning btn-lg">Create Account</button>
          </form>
  
          <hr/>
  
          <p>Already have an account? <a href="/login">Sign in.</a></p>
          <p><a href="/">Go back to home page.</a></p>
  
      </div>
  
  </div>
    );
  }
}

export default Register;
