import React from 'react';
import './MessageStyle.css';

class MessageCard extends React.Component {

  // Constructor Function
  constructor(){
    super();

    // States
    this.state = {
      editing: false
    }

    // Binding Events
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.remove = this.remove.bind(this);
  }

  // Events
  edit() {
    console.log("Editing...");
    this.setState({
      editing: !this.state.editing
    });
  }

  remove() {
    this.props.removeComments(this.props.index);
  }

  save() {
    console.log("Saved.");
    const newText = this.refs.newText.value;
    console.log(newText, this.props.index);
    this.setState({
      editing: !this.state.editing
    });
    this.props.updateComments(newText, this.props.index);
  }

  // Rendering Logic
  // Editing Mode
  editingMode(){
    return(
      <div>
        <div>
          <textarea ref='newText' defaultValue={this.props.children}></textarea>
        </div>
        <button onClick={this.save}>Save</button>
      </div>
    );
  }

  // Normal Mode
  normalMode(){
      return (
        <div className="card-container">
          <div>{this.props.children}</div>
          <button onClick={this.edit}>Edit</button>
          <button onClick={this.remove}>Remove</button>
        </div>
      );
  }

  // Rendering
  render(){
    if(this.state.editing){
      return this.editingMode();
    } else {
      return this.normalMode();
    }
  }
}

export default MessageCard;
