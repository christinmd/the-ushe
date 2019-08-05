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
        <input type="text" class="form-control" name="FavFood" id="FavFood"/> 
        <p>Favorite drink: </p>
        <input type="text" class="form-control" name="FavDrink" id="FavDrink"/> 
        <p>Allergies</p>
        <input type="text" class="form-control" name="Allergies" id="Allergies"/> 
        <p>Favorite Location</p>
        <input type="text" class="form-control" name="FavLocation" id="FavLocation"/> 
        </div>
        );
    }
}

export default Profile;