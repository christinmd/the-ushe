import React, { Component} from "react";
import "./Profile.css";
import CardOrder from "../../components/cards/cards";
import Navbar from "../../components/navbar/navbar";

class Profile extends Component {
    render() {
    return(
        <div className="profile">
        <Navbar/>
        <h1>Profile</h1>
        <p></p>
        <h1>Info</h1>
        <CardOrder/>
        </div>
        );
    }
}

export default Profile;