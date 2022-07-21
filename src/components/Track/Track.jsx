import React, { Component } from "react";

//import Track.css
import './Track.css';

class Track extends Component {

  renderAction() { 
  if (this.props.isRemoval) {
    return (
      <button
       className="Track-action"
       onClick={() => removeTrack()}>-</button>
    );
  } else {
    return (
      <button
        className="Track-action"
        onClick={() => addTrack()}>+</button>
    );
  }
}



  render() {
    return (
      <div class="Track">
        <div class="Track-information">
          <h3>track name</h3>
          <p>track artist | track album </p>
        </div>
        <button class="Track-action"></button>
      </div>
    );
  }
}

export default Track;
