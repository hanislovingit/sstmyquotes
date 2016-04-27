import React from "react";
import BaseComponent from "./BaseComponent.jsx!";

export default class AddFriend extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
        this._bind("onNameUpdate", "addNewFriend");
    }
    
    onNameUpdate(e) {
        this.setState({
            name: e.target.value
        });        
    }
    
    addNewFriend() {
        this.props.addNewFriend(this.state.name);
        this.setState({
            name: ""
        });
    }
    
    render() {
        return (<div>
            <label htmlFor="name">Add name:</label>
            <input type="text" id="name" value={this.state.name} onChange={this.onNameUpdate} />
            <button onClick={this.addNewFriend}>Add</button>
        </div>);
    }
    
}

AddFriend.propTypes = {
    addNewFriend: React.PropTypes.func.isRequired
};