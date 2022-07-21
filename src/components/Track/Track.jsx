import React, { Component } from "react";

//import Track.css
import './Track.css';

class Track extends Component {
  render() {
    return (
      <div class="Track">
        <div class="Track-information">
          <h3>track name</h3>
          <p>track artist | track album </p>
        </div>
        <button class="Track-action"><!-- + or - will go here --></button>
      </div>
    )
  }
}

export default Track;
