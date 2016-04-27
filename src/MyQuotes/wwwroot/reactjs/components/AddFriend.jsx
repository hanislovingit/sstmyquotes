import React from "react";


export default class AddFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
        this.onNameUpdate = this.onNameUpdate.bind(this);
        this.addNewFriend = this.addNewFriend.bind(this);
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