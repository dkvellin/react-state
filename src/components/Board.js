import React from 'react';
import MessageCard from './MessageCard';

class Board extends React.Component {

  // Constructor
  constructor() {
    super();
    // States
    this.state = {
      comments: ["First Comment", "Second Comment"]
    }
    // Event Binding
    this.updateComments = this.updateComments.bind(this);
    this.removeComments = this.removeComments.bind(this);
    this.addNew = this.addNew.bind(this);
  }

  //Events
  updateComments(newText, i){
    const arr = this.state.comments;
    arr[i] = newText;
    this.setState({
      comments: arr
    })
  }

  removeComments(i){
    const arr = this.state.comments;
    arr.splice(i, 1);
    this.setState({
      comments: arr
    })
  }

  addNew(text){
    const arr = this.state.comments;
    arr.unshift(text);
    this.setState({
      comments: arr
    });
  }

  // Rendering
  render(){
    return(
      <div>
        <button onClick={this.addNew.bind(null, "LORD JESUS loves you")}>Add New Comment</button>
        {
          this.state.comments.map((text, i) => {
            return <MessageCard key={i} index={i} updateComments={this.updateComments} removeComments={this.removeComments} comments={this.state.comments}>{text}</MessageCard>
          })
        }
      </div>
    );
  }
}

export default Board;
