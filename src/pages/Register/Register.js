import React, { Component } from "react";
import "./register.css"

class Register extends Component {
  componentDidMount() {
    document.body.classList.add("background-register");
  }

  render() {
    return (
      <div class="container">

      <div class="align-items-center">
  
          <h1><span class="fa fa-sign-in"></span> Register</h1>
  
  
          <form>
              <div class="form-group">
                  <input type="text" class="form-control" placeholder="Email" name="email" id="email"/>
              </div>
              <div class="form-group">
                  <input type="password" class="form-control" placeholder="Password" name="password" id="password"/>
              </div>
              <div class="form-group">
                  <input type="text" class="form-control" placeholder="Username" name="username" id="username"/>
              </div>
              <div class="form-group">
                  <input type="text" class="form-control" placeholder="City" name="city" id="city"/>
              </div>
              <div class="form-group">
                  <input type="text" class="form-control" placeholder="State" name="state" id="state"/>
              </div>
              <div class="form-group">
                  <input type="text" class="form-control" placeholder="Allergies" name="allergies" id="allergies"/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Bio" name="bio" id="bio"/>
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
