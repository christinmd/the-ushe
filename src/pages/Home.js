import React, { Component } from "react";
import "./assets/css/home.css";
class Home extends Component {
  componentDidMount() {
    document.body.classList.add("background");
  }
  render() {
    return (
      <div className="center-box">
      <h1 className="rotate">The Ushe</h1>
      <h1>The Ushe</h1>
      </div>
    );
  }
}

export default Home;
