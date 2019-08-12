import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  componentDidMount() {
    document.body.classList.add("background-login");
  }

  handleFormSubmit = e => {
    e.preventDefault();
    alert(`Hello ${this.state.email}`);
  };

  render() {
    return (
      <div className="container login-container">
        <div className="align-items-center">
          <h1> THE USHE</h1>
            
          <h2>
            <span className="fa fa-sign-in" /> Login
          </h2>

	

          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control textbox"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control textbox"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="btn btn-warning btn-lg"
              onClick={this.handleFormSubmit}
            >
              LOGIN
            </button>
          </form>

          <hr />

         
            <a className= "sign-up no-account" href="/register">DON'T HAVE AN ACCOUNT? SIGN UP.</a>
        
         
        </div>
      </div>
    );
  }
}

export default Login;
