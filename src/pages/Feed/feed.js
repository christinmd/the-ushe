import React, { Component } from "react";
import GlobalOrder from "../../components/globalorder/globalorder";
import Orders from "../../orders.json"
import Title from "../../components/title/title";
import NavBar from "../../components/navbar/navbar";





class Feed extends Component {
    state = {
        Orders
    };
    render() {
        return (
            <div>
                <NavBar/>
                <Title>THE USHER</Title>
                {this.state.Orders.map(orders => (
                    <GlobalOrder
                        id={orders.id}
                        key={orders.id}
                        name={orders.name} 
                        order={orders.order}
                        location={orders.location}
                    />
                ))}
            </div>
        );
    }

}

export default Feed;

