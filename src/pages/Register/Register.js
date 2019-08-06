import React, { Component } from "react";
import "./register.css";

class Register extends Component {
  state = {
    email: "",
    password: "",
    username: "",
    city: "",
    state: "",
    allergies: "",
    bio: ""
  };

  componentDidMount() {
    document.body.classList.add("background-register");
  }

  handleFormSubmit = e => {
    e.preventDefault();
    alert(`Hello ${this.state.username}`);
  };

  render() {
    return (
      <div className="container">
        <div className="align-items-center">
          <h1>
            <span className="fa fa-sign-in" /> Register
          </h1>

          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                name="email"
                id="email"
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
                id="password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                id="username"
                value={this.state.username}
                onChange={e => this.setState({ username: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                name="city"
                id="city"
                value={this.state.city}
                onChange={e => this.setState({ city: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="State"
                name="state"
                id="state"
                value={this.state.state}
                onChange={e => this.setState({ state: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Allergies"
                name="allergies"
                id="allergies"
                value={this.state.allergies}
                onChange={e => this.setState({ allergies: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Bio"
                name="bio"
                id="bio"
                value={this.state.bio}
                onChange={e => this.setState({ bio: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-warning btn-lg" onClick={this.handleFormSubmit}>
              Create Account
            </button>
          </form>

          <hr />

          <p>
            Already have an account? <a href="/login">Sign in.</a>
          </p>
          <p>
            <a href="/">Go back to home page.</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Register;
