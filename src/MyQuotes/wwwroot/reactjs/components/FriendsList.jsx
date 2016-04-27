import React from "react";

export default class FriendsList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const friends = this.props.friends.map(function (friend) {
           return <li>{friend}</li>; 
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