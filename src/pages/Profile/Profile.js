import React, { Component} from "react";
import "./Profile.css";
import Modal from "../../components/modal/modal"
import FriendCard from "../../components/cards/cards"
import OrderCard from "../../components/ordercards/ordercards"
import Navbar from "../../components/navbar/navbar"


class Profile extends Component {
    constructor() {
        super();

        this.state = {
            isShowing: false
        }
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }
    render () {
        return (

            
            <div>
            <Navbar/>
            <h1> THE USHE</h1>
            <h2> PROFILE </h2>
            <div className="profile-section">
            <p> USER INFO </p>
            <div class="friends-container">
            <FriendCard/>
            </div>
            <p> FAVORITES <i class="fas fa-heart"></i></p>

            <div class="cards-container">
            <OrderCard/>
            </div>
            </div>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                <button className="modal-btn" onClick={this.openModalHandler}>Add a New Ushe </button>

                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>

                    <form>
                    <div class="form-group">
                    <label className="form-input" for="formGroupExampleInput">Name of Restaurant</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"></input>
                    </div>
                    <div class="form-group">
                    <label className="form-input" for="formGroupExampleInput"> Add Your Order Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"></input>
                    </div>
                    </form>
                </Modal>
            </div>
            
        );
    }
}


export default Profile;