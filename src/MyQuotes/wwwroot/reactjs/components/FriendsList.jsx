import React from "react";

export default class FriendsList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const friends = this.props.friends.map(function (friend, index) {
           return <li key={index}>{friend}</li>; 
        });
        return (<div>
            <ul>
                {friends}
            </ul>
        </div>);
    }
}

FriendsList.defaultProps = {
    friends: ["default", "friends", "list"]
};