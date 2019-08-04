import React, { Component } from "react";
import "./assets/css/home.css";
class Home extends Component {
  componentDidMount() {
    document.body.classList.add("background");
  }
  render() {
    return (
      <div>
      <h1 className="rotate">The Ushe</h1>
      <h1>The Ushe</h1>
      <button type="button" class="btn btn-outline-primary">Login</button>
      <button type="button" class="btn btn-outline-primary">Register</button>
      </div>
    );
  }
}

export default Home;
