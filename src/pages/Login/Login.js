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
      <div className="container">
        <div className="align-items-center">
          <h1>
            <span className="fa fa-sign-in" /> Login
          </h1>

          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
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
              login
            </button>
          </form>

          <hr />

          <p>
            <a href="/register">Don't have an account? Sign up.</a>
          </p>
          <p>
            <a href="/">Go back to home page.</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
