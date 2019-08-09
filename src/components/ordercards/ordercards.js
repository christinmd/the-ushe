import React from "react";
import "./ordercards.css";

function OrderCard(props) {
    return (

    <div className="container">
    <h3 className="order-name"><i class="random name"> </i> John Smith</h3>

        <div className="card-body">
        <h3 className="card-title">Starbucks</h3>
     
      
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><i class="fas fa-utensils fa-xs"></i> Iced Caramel Macchiato</li>
        <li className="list-group-item"><i class="fas fa-utensils fa-xs"></i> Lemon Pound Cake</li>
      </ul>
      <div className="card-body">
      </div>
      </div>

  
            );
    }

  export default OrderCard;
