import React, { Component } from "react";

//import Playlist.css
import './Playlist.css';

class Playlist extends Component {
  render() {
    return (
      <div class="Playlist">
        <input defaultValue={"New Playlist"} />
        {/* <TrackList /> */}
        <button class="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    )
  }
}

export default Playlist;
