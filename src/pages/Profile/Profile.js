import React, { Component} from "react";
import ReactDOM from "react-dom";
import "./Profile.css";
import OrderCard from "../../components/ordercards/ordercards";
import FriendCard from "../../components/cards/cards"

class Profile extends Component {
    render() {
    return(
        <div className="profile">
        <h1> THE USHE</h1>
    
        <h2> PROFILE </h2>

        <div className="profile-section">
        <p> USER INFO </p>
        <div class="friends-container">
        <FriendCard/>
        </div>
        </div>

        <div className="Orders">
        <p> ORDERS <i class="fas fa-heart"></i></p>
        <button type="button onclick- " className="btn btn-light"> ADD A NEW USHE</button>
       <div class="cards-container">
            
        <OrderCard/>
        </div>
        </div>
       
        </div>
        );
    }
}

export default Profile;