import React from "react";
import "./cards.css";

function FriendCard(props) {
    return (

    <div className="container">
        <div className="row user-menu-container square">
            <div className="col-md-7 user-details">
                <div className="row coralbg white">
                    <div className="col-md-6 no-pad">
                        <div className="user-pad">
                            <h3 className="name"><i class="random name"> </i>John Smith</h3>
                            <h4 className="location"><i class="fa fa-check-circle-o"></i> Seattle, WA </h4>
                            <h5 className="bio"><i class="fa fa-twitter"></i> Mac and Cheese lover. </h5>
                        </div>
                    </div>
                    
                </div>
                <div className="row-overview">
                    <div className="col-md-1 user-pad text-center">
                        <h3 className="bioheader"><i class="random name"> </i> Allergies</h3>
                        <h4 className="biotext"><i class="random name"> </i> M</h4>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

            );
    }

    export default FriendCard;
