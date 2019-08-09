import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
    state = {
      open: false,
      width: window.innerWidth
    };
  
    updateWidth = () => {
      const newState = { width: window.innerWidth };
  
      if (this.state.open && newState.width > 991) {
        newState.open = false;
      }
  
      this.setState(newState);
    };
  
    toggleNav = () => {
      this.setState({ open: !this.state.open });
    };
  
    componentDidMount() {
      window.addEventListener("resize", this.updateWidth);
    }
  
    componentWillUnmount() {
      window.removeEventListener("resize", this.updateWidth);
    }
  
    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
          <Link className="navbar-brand" to="/Profile">
            Profile
          </Link>
          <button
            onClick={this.toggleNav}
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link>
                  <div class="search-container">
                    <form action="/action_page.php">
                      <input type="text" placeholder="Search..." name="search"></input>
                      <button onClick="location.href = '/saved';" id ="submitButton">Submit</button>                    
                      </form>
                    </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={this.toggleNav}
                  className={window.location.pathname === "/everything" ? "nav-link active" : "nav-link"}
                  to="/everything"
                >
                  <div class="everything">
                  Everything
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  }
 

export default Navbar;

import React from "react";

function NavBar(props) {
  return (
   
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="../home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="../profile">Profile</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="../feed">Feed</a>
      </li>
    </ul>
      <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>  
</nav>

  );
}

export default NavBar;
 
