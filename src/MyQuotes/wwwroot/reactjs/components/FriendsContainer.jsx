import React from "react";

import FriendsList from "./FriendsList.jsx!";
import AddFriend from "./AddFriend.jsx!";

class FriendsContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Chuck Han",
            age: 30,
            friends: []
        };
    }
    
    addFriend(friend) {
        this.setState({
           friends: this.state.friends.concat([friend]) 
        });
    }
    
    render() {
        return (<div>
            <h2>{this.state.name}, {this.state.age}</h2>
            <AddFriend addNewFriend={this.addFriend.bind(this)} />
            <FriendsList friends={this.state.friends} />
        </div>);
    }
}

export default FriendsContainer;