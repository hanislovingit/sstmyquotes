import React from "react";


export default class AddFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }
    
    onNameUpdate(e) {
        this.setState({
            name: e.target.value
        });
        
        this.props.AddNewFriend(e.target.value);
    }
    
    render() {
        return (<div>
            <label htmlFor="name">Add name:</label>
            <input type="text" id="name" value={this.state.name} onChange={this.onNameUpdate.bind(this)} />
            <button>Add</button>
            <br/>
            <span>{this.state.name}</span>
        </div>);
    }
    
}