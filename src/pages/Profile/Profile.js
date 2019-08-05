import React, { Component} from "react";
import "./Profile.css";

class Profile extends Component {
    render() {
    return(
        <div className="profile">
        <h1>Profile</h1>
        <p></p>
        <h1>Info</h1>
        <p>email: </p>
        <p>Favorite food: </p>
        <p>Favorite drink: </p>
        <p>Allergies</p>
        <p>Favorite Location</p>
        </div>
        );
    }
}

export default Profile;