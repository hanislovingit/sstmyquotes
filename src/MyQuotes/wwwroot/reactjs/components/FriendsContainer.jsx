import React from "react";

import FriendsList from "./FriendsList.jsx!";
import AddFriend from "./AddFriend.jsx!";

class FriendsContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Chuck Han",
            friends: ["Chuck", "Mark", "Cj", "Cornell"]
        };
    }
    
    render() {
        return (<div>
            <h2>{this.state.name}</h2>
            <AddFriend />
            <FriendsList friends={this.state.friends} />
        </div>);
    }
}

export default FriendsContainer;